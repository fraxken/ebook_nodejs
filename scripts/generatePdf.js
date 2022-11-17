// Import Node.js Dependencies
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import util from "node:util";

// Import Third-party Dependencies
import MarkdownPDF from "markdown-pdf";
import { walkSync } from "@nodesecure/fs-walk";
import through from "through2";

// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const kOutDir = path.join(__dirname, "..", "pdf");
const kPageBreak = `\n\n<div style="page-break-before: always;"></div>\n\n`;
const kAvailableLangs = new Set(["fr", "en"]);
const kNumericCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

const args = util.parseArgs({
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

function preProcessMd() {
    return through(function(data, enc, cb) {
        cb(null, Buffer.concat([data, Buffer.from(kPageBreak)]));
    });
}

MarkdownPDF({ preProcessMd, remarkable: { html: true, breaks: true } })
    .concat.from(files)
    .to(path.join(kOutDir, `${lang}.pdf`), () => {
        console.log("PDF successfully created!");
    });
