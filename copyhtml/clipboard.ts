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
