import { showdown } from "https://cdn.skypack.dev/showdown@2.1.0/dist/showdown.min.js?dts";

import { copyHTML } from "../../copyhtml/copyhtml.ts";

const copyMD = copyHTML.bind(null, {
  transform(html: string) {
    const converter = new showdown.Converter();
    const converted = converter.makeHtml(html);
    console.log("Custom MD transformation!", { html, converted });
    return converted;
  },
});

copyMD();
