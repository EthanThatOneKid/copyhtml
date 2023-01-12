export function defaultScrape(
  selector = defaultPrompt(),
): NodeListOf<Element> | undefined {
  if (selector) {
    const elements = document.querySelectorAll(selector);
    return elements;
  }
}

export async function defaultRender(output: unknown): Promise<void> {
  const granted = await requestWriteClipboardPermission();
  if (!granted) {
    alert(
      "Please enable clipboard permission in your browser settings to use this feature.",
    );
    return;
  }

  setClipboardContent(String(output));
}

const PROMPT =
  "Enter selector to copy HTML from elements that match the given selector:";

export function defaultPrompt(): string {
  const selector = prompt(PROMPT, "");
  return selector || "";
}

export function setClipboardContent(text: string) {
  (navigator as unknown as {
    clipboard: { writeText: (text: string) => Promise<void> };
  }).clipboard
    .writeText(text)
    .then(() => {
      console.info("Copied to clipboard.", { text });
    })
    .catch((err) => {
      console.error(err);
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
