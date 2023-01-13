/** @see https://skypack.dev/view/showdown */
import { Converter } from "https://cdn.skypack.dev/-/showdown@v2.1.0-VOdouPaBMsLwxZmH1dtQ/dist=es2019,mode=imports/optimized/showdown.js";

import { copyHTML } from "../../copyhtml/copyhtml.ts";

export const copyMD = copyHTML.bind(null, {
  transform(elements: NodeListOf<Element>) {
    const html = elements[0]?.innerHTML;
    if (!html) {
      return;
    }

    const converter = new Converter();
    const converted = converter.makeMarkdown(html);
    console.log("Custom MD transformation!", { html, converted });
    return converted;
  },
});
