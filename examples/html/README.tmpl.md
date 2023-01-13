# Copy html

This is a helpful bookmarklet for copying raw HTML from any HTML element.

This bookmarklet was build using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/html/main.ts
```

This bookmarklet uses the [`copyhtml` module](../../copyhtml/) in its default
configuration.

{{ bookmarklet:usage }}

## On the generation of examples

The examples you are looking at is generated using the following command:

```bash
deno task generate
```

This command will compile the bookmarklets for all examples and generate the
README.md files for all examples.
