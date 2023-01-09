/**
 * copyHTML copies the HTML of the elements specified by the user to the clipboard.
 */
export async function copyHTML(transform?: (html: string) => string) {
  const granted = await requestWriteClipboardPermission();
  if (!granted) {
    alert(
      "Please enable clipboard permission in your browser settings to use this feature.",
    );
    return;
  }

  const html = scrape(getPromptResult());
  setClipboardContent(transform ? transform(html) : html);
}

export function setClipboardContent(text: string) {
  (navigator as unknown as {
    clipboard: { writeText: (text: string) => Promise<void> };
  }).clipboard
    .writeText(text)
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      console.log("Copied to clipboard.", { text });
    });
}

async function requestWriteClipboardPermission() {
  if (!navigator.clipboard) {
    return false;
  }

  try {
    const permissionStatus = await navigator.permissions.query({
      name: "clipboard-read",
      allowWithoutGesture: false,
    } as unknown as PermissionDescriptor);

    // Will be 'granted', 'denied' or 'prompt':
    if (permissionStatus.state === "prompt") {
      console.log("Requesting clipboard permission...");
    }

    return permissionStatus.state === "granted";
  } catch (err) {
    console.error(err);
  }

  return false;
}

export interface ScrapeOptions {
  selectors: string[];
}

export function scrape(options: ScrapeOptions): string {
  const elements = options.selectors.map((sel) => document.querySelector(sel));
  const html = elements.map((element) => element?.outerHTML).join("");
  return html;
}

export interface PromptResult {
  selectors: string[];
}

const PROMPT = "Enter selectors to copy HTML from (comma-separated):";

export function getPromptResult(): ScrapeOptions {
  const commaSeparatedSelectors = prompt(PROMPT);
  if (commaSeparatedSelectors === null) {
    throw new Error("No selectors provided.");
  }

  const selectors = commaSeparatedSelectors
    .split(",")
    .map((selector) => selector.trim());

  return { selectors };
}
