import { requireShowdown } from "https://etok.codes/require/raw/main/examples/showdown/mod.ts";

import { copyHTML } from "../../copyhtml/copyhtml.ts";

await requireShowdown();

copyHTML((html) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(html);
});
