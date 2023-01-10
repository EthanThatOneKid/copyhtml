export async function defaultScrape(): Promise<string> {
  const selectors = await defaultPrompt();
  const elements = selectors.map((sel) => document.querySelector(sel));
  const html = elements.map((element) => element?.outerHTML).join("");
  return html;
}

export async function defaultRender(output: string): Promise<void> {
  const granted = await requestWriteClipboardPermission();
  if (!granted) {
    alert(
      "Please enable clipboard permission in your browser settings to use this feature.",
    );
    return;
  }

  setClipboardContent(output);
}

const PROMPT = "Enter selectors to copy HTML from (comma-separated):";

export function defaultPrompt(): string[] {
  const commaSeparatedSelectors = prompt(PROMPT, "");
  if (!commaSeparatedSelectors) {
    throw new Error("No selectors provided.");
  }

  const selectors = commaSeparatedSelectors
    .split(",")
    .map((selector) => selector.trim());

  return selectors;
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
      name: "clipboard-write",
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
