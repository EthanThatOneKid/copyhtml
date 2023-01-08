import { requireShowdown } from "https://etok.codes/require/raw/main/examples/showdown/mod.ts";

import { copyHTML } from "../../copyhtml/copyhtml.ts";

const copyMD = copyHTML.bind((html: string) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(html);
});

requireShowdown()
  .then(copyMD)
  .then(console.log);
