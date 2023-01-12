import { copyHTML } from "../../copyhtml/copyhtml.ts";

export const copyMD = copyHTML.bind(null, {
  transform(elements: NodeListOf<Element>) {
    const html = elements[0]?.outerHTML;
    if (!html) {
      return;
    }

    const converter = new window.showdown.Converter();
    const converted = converter.makeMarkdown(html);
    console.log("Custom MD transformation!", { html, converted });
    return converted;
  },
});
