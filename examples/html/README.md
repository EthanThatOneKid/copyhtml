# Copy html

This is a helpful bookmarklet for copying raw HTML from any HTML element.

This bookmarklet was build using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/html/main.ts
```

This bookmarklet uses the [`copyhtml` module](../../copyhtml/) in its default
configuration.

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Basync%20function%20t(r)%7Blet%20e%3Dawait%20r.scrape()%3Br.render(r.transform%3Fr.transform(e)%3Ae)%7Dt()%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.

## On the generation of examples

The examples you are looking at is generated using the following command:

```bash
deno task generate
```

This command will compile the bookmarklets for all examples and generate the
README.md files for all examples.
