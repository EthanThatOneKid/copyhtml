import type { ProcessHTMLOptions } from "../processhtml.ts";
import { processHTML } from "../processhtml.ts";

import { defaultRender, defaultScrape } from "./defaults.ts";

export interface CopyHTMLOptions {
  transform?: ProcessHTMLOptions["transform"];
}

export async function copyHTML(options: CopyHTMLOptions = {}) {
  await processHTML({
    scrape: defaultScrape,
    transform: options.transform,
    render: defaultRender,
  });
}
