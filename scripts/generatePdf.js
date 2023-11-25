// Import Node.js Dependencies
import { Readable } from "node:stream";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { parseArgs } from 'node:util';

// Import Third-party Dependencies
import { walkSync } from "@nodesecure/fs-walk";
import { generatePDF, initBrowser, terminateBrowser } from "@myunisoft/html-to-pdf";
import { toBase64 } from "@rossbob/image-to-base64";
import { marked } from "marked";
import { JSDOM } from "jsdom";

// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const kOutDir = path.join(__dirname, "..", "pdf");
const kPageBreak = `\n\n<div style="page-break-before: always;"></div>\n\n`;
const kAvailableLangs = new Set(["fr", "en"]);
const kNumericCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

const start = performance.now();

const args = parseArgs({
    options: {
        lang: {
            type: "string",
            short: "f",
            default: "en"
        }
    },
    allowPositionals: true
});

const { lang } = args.values;
if (!kAvailableLangs.has(lang)) {
    throw new Error(`Unknown language '${lang}'`);
}

fs.mkdirSync(kOutDir, { recursive: true });

const syncIterator = walkSync(path.join(__dirname, "..", lang), {
    extensions: new Set([".md"])
});
const files = [...syncIterator]
    .filter((value) => !value[0].isDirectory())
    .map((value) => value[1])
    .reverse()
    .sort(kNumericCollator.compare);

async function main(pdfOptions = {
    margin: {
        top: "20px",
        bottom: "20px",
        left: "40px",
        right: "40px"
    },
    scale: 1.2
}) {
    let stringHTML = "";

    const readme = files.find((fileName) => fileName.endsWith("README.md"));
    stringHTML += await readFile(readme) + kPageBreak;

    for (const file of files) {
        if (file.endsWith("README.md")) {
            continue;
        }

        stringHTML += await readFile(file) + kPageBreak;
    }

    const dom = new JSDOM(marked.parse(stringHTML), { contentType: "text/html" });

    const regexPath = /^https?:\/\//i;
    const images = dom.window.document.getElementsByTagName("img");

    for (const image of images) {
        if (!regexPath.test(image.src)) {  
            const splitted = image.src.split("./");
            const base64 = await toBase64({ path: path.join(__dirname, "..", splitted[splitted.length - 1]) });
            image.src = `data:image/png;base64,${base64.base64}`;
        }
    }

    const browser = await initBrowser();

    try {
        await writeFile(path.join(kOutDir, `${lang}.pdf`), Readable.from(generatePDF(browser, [{ content: dom.serialize() }], pdfOptions)))
    }
    finally {
        await terminateBrowser(browser);
    }
}

main()
    .then(() => console.log("PDF successfully created!", performance.now() - start))
    .catch((error) => console.error(error));