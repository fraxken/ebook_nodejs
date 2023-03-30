// Import Node.js Dependencies
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import { parseArgs } from 'node:util';
import { load } from 'cheerio';

// Import Third-party Dependencies
import MarkdownPDF from "markdown-pdf";
import { walkSync } from "@nodesecure/fs-walk";
import through from "through";



// CONSTANTS
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const kOutDir = path.join(__dirname, "..", "pdf");
const kPageBreak = `\n\n<div style="page-break-before: always;"></div>\n\n`;
const kAvailableLangs = new Set(["fr", "en"]);
const kNumericCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

process.argv.forEach((val, index) => {
    if (index == 2) reportFolderName = val;
});

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

var preProcessHtml = function () {

    return through(function (data) {
        var $ = load(data);
        const  regexPath = /^https?:\/\//i;
        $('img[src]').each(function (e, ele) {
            var srcPath = $(this).attr('src');
            
            
            // console.log(srcPath,__dirname,'dddd', e, ele, "srcPath",)
            if (!regexPath.test(srcPath)) {
                const findIndexOf = srcPath.indexOf('assets')
                const substring = srcPath.substring(findIndexOf)
                // console.log(findIndexOf,)
                srcPath = `file:///${process.cwd()}/${substring}`
            }
            
            $(this).attr('src', srcPath);
        });
        $('a[href]').each(function () {
            let hrefPath = $(this).attr('href')
            const relativePath = path.resolve(path.join(__dirname, '..', 'en', 'chapters', `${hrefPath}`))
            if (!regexPath.test(hrefPath)) {
                hrefPath = `file:///${relativePath}` 
            }
            $(this).attr('href', hrefPath)
        })
        console.log($.html());
        this.queue($.html());
    });
};


const { lang } = args.values;
if (!kAvailableLangs.has(lang)) {
    throw new Error(`Unknown language '${lang}'`);
}

// fs.mkdirSync(kOutDir, { recursive: true });

const syncIterator = walkSync(path.join(__dirname, "..", lang), {
    extensions: new Set([".md"])
});
const files = [...syncIterator]
    .filter((value) => !value[0].isDirectory())
    .map((value) => value[1])
    .reverse()
    .sort(kNumericCollator.compare);


MarkdownPDF({ preProcessHtml: preProcessHtml,remarkable: { html: true, breaks: true } })
    .concat.from(files)
    .to(path.join(kOutDir, `${lang}.pdf`), (err) => {
        if (err) {
            console.log(err)
        }
        console.log("PDF successfully created!");
    });
