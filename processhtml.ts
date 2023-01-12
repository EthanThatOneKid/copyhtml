export interface ProcessHTMLOptions {
  render: (output: unknown) => void | Promise<void>;
  scrape: () => NodeListOf<Element> | undefined;
  transform?: <T>(els: NodeListOf<Element>) => T;
}

function defaultTransform(elements: NodeListOf<Element>): string[] {
  const html: string[] = [];
  elements.forEach((el) => html.push(el.outerHTML));
  return html;
}

/**
 * processHTML is an engine that processes the raw HTML from the scrape
 * function and renders it using the render function. Optionally, the HTML
 * can be transformed into a new data format before rendering.
 */
export function processHTML(options: ProcessHTMLOptions) {
  const elements = options.scrape();
  if (elements) {
    options.render(
      options.transform
        ? options.transform(elements)
        : defaultTransform(elements),
    );
  }
}
