import { getPromptResult } from "./prompt.ts";
import { scrape } from "./scrape.ts";
import { setClipboardContent } from "./clipboard.ts";

export function copyHTML(transform?: (html: string) => string) {
  const { selectors } = getPromptResult();
  const html = scrape(selectors);
  setClipboardContent(transform ? transform(html) : html);
}
