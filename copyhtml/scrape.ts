export function scrape(selectors: string[]) {
  const elements = selectors.map((selector) =>
    document.querySelector(selector)
  );
  const html = elements.map((element) => element?.outerHTML).join("");
  return html;
}
