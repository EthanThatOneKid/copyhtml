# copyhtml

A Deno tool for conveniently extracting inner HTML from specific HTML elements
on an HTML document. Exported as a bookmarklet for easy use on any website.

## Features

- Select desired HTML elements using a CSS selector (or multiple selectors
  separated by commas)
- Copy the resulting HTML to the clipboard
- Option to pass a custom function for more specialized data extraction

## Installation

To install the default `copyhtml` bookmarklet, follow these instructions:

- Copy the bookmarklet from our example [Usage](examples/html/README.md#usage).
- Add a new bookmark to your bookmarks bar.
- Paste the bookmarklet into the URL field of the new bookmark.
- Save the bookmark.
- Navigate to any website and click the bookmark to invoke the bookmarklet and
  copy the HTML of the selected element(s).

### Potential future improvements

There are several potential improvements to the `copyhtml` tool that could
enhance its functionality and usability:

- Abstract the process of selecting CSS selectors to allow users to easily
  create bookmarklets for specific websites with known selectors.
- Allow users to specify which attribute(s) they want to copy from the selected
  HTML element(s), in addition to the inner HTML.
- Provide the option to copy the entire parent element of the selected HTML
  element, rather than just the element itself.
- Enable the copying of multiple values from different HTML elements using a
  multi-select option for CSS selectors.
- Allow for the customizable transformation of the copied HTML using a
  user-defined function or set of functions.
- Consider adding the ability to save the copied HTML
  [to a file](https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryEntry)
  or
  [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
  for future use.
- Enhance the user interface with helpful prompts and error messages to guide
  the user through the extraction process.

### Why bookmarklets

Bookmarklets offer several advantages over traditional browser extensions. They
are typically smaller and faster to load, as they do not need to be installed
and do not require any additional resources or permissions. Bookmarklets are
also more portable, as they can be easily saved and shared across multiple
devices and browsers. Additionally, bookmarklets do not require any ongoing
updates or maintenance, as they are simply a link to a script that is executed
on the current webpage. These benefits make bookmarklets an efficient and
convenient tool for quickly performing specific actions on a website.

#### Bookmarklet references

- [11.2: Bookmarklets - Programming with Text](https://youtu.be/DloHqUfPbJc) by
  [**@codingtrain**](https://github.com/codingtrain)
- [`deno.land/x/bmt`](https://deno.land/x/bmt) - Tool for bundling bookmarklets
  in Deno
- [Bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) - Wikipedia
