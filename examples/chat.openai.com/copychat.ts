import { processHTML } from "../../processhtml.ts";
import { defaultRender } from "../../copyhtml/defaults.ts";

import { IntegerRange } from "./integer_range.ts";

export async function copyChat(): Promise<void> {
  await processHTML({
    scrape: scrapeChat,
    transform: transformChat,
    render: defaultRender,
  });
}

function scrapeChat() {
  if (
    location.host !== "chat.openai.com" || location.pathname !== "/chat"
  ) {
    alert("This script only works on chat.openai.com/chat");
    return;
  }

  const elements = document.querySelectorAll("#__next .markdown");
  return elements;
}

function transformChat(elements: NodeListOf<Element>) {
  const rawIntRange = prompt(
    "Enter the range of messages to copy from the bottom of the chat, separated by a hyphen. For example, 1-5 will copy the last 5 messages. If you want to copy the most recent message, just enter 1. If you pass nothing, the default is 1.",
    "1",
  ) || "1";
  const intRange = IntegerRange.fromString(rawIntRange);
  const start = elements.length - intRange.start;
  const end = elements.length - intRange.end;

  const converter = new window.showdown.Converter();
  const allConverted: string[] = [];
  for (let i = end; i < start; i++) {
    const element = elements[i];
    const html = element?.outerHTML;
    if (!html) {
      break;
    }
    const converted = converter.makeMarkdown(html);
    console.log("Custom MD transformation!", { html, converted });
    allConverted.unshift(converted);
  }

  if (allConverted.length === 0) {
    alert("No messages found!");
    return "";
  }

  if (allConverted.length === 1) {
    return allConverted[0];
  }

  return JSON.stringify(allConverted);
}
