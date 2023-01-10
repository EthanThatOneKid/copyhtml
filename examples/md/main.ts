import { requireShowdown } from "https://etok.codes/require/raw/main/examples/showdown/mod.ts";

import { copyHTML } from "../../copyhtml/copyhtml.ts";

const copyMD = copyHTML.bind(null, {
  transform(html: string) {
    const converter = new showdown.Converter();
    const converted = converter.makeHtml(html);
    console.log("Custom MD transformation!", { html, converted });
    return converted;
  },
});

requireShowdown()
  .then((ready: boolean) => {
    if (!ready) {
      throw new Error("Showdown not ready.");
    }

    copyMD();
  })
  .catch((err: Error) => {
    console.error(err);
  });
