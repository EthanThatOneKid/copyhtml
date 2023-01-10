export interface ProcessHTMLOptions {
  render: (output: string) => void | Promise<void>;
  scrape: () => Promise<string>;
  transform?: <T>(html: string) => T;
}

/**
 * processHTML processes the raw HTML from the scrape function and renders it
 * using the render function. Optionally, the HTML can be transformed into a
 * new data format before rendering.
 */
export async function processHTML(options: ProcessHTMLOptions) {
  const html = await options.scrape();
  options.render(options.transform ? options.transform(html) : html);
}
