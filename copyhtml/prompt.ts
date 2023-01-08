export interface PromptResult {
  selectors: string[];
}

const PROMPT = "Enter selectors to copy HTML from (comma-separated):";

export function getPromptResult(): PromptResult {
  const commaSeparatedSelectors = prompt(PROMPT);
  if (commaSeparatedSelectors === null) {
    throw new Error("No selectors provided.");
  }

  const selectors = commaSeparatedSelectors
    .split(",")
    .map((selector) => selector.trim());

  return { selectors };
}
