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
javascript:(()%3D%3E%7Bvar%20p%3D%22Enter%20selectors%20to%20copy%20HTML%20from%20(comma-separated)%3A%22%3Bfunction%20s()%7Blet%20t%3Dprompt(p)%3Bif(t%3D%3D%3Dnull)throw%20new%20Error(%22No%20selectors%20provided.%22)%3Breturn%7Bselectors%3At.split(%22%2C%22).map(e%3D%3Ee.trim())%7D%7Dfunction%20n(t)%7Breturn%20t.map(r%3D%3Edocument.querySelector(r)).map(r%3D%3Er%3F.outerHTML).join(%22%22)%7Dfunction%20c(t)%7Bnavigator.clipboard.writeText(t).catch(o%3D%3E%7Bconsole.error(o)%7D).finally(()%3D%3E%7Bconsole.log(%22Copied%20to%20clipboard.%22%2C%7Btext%3At%7D)%7D)%7Dfunction%20i(t)%7Blet%7Bselectors%3Ao%7D%3Ds()%2Ce%3Dn(o)%3Bc(t%3Ft(e)%3Ae)%7Di()%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.

## On the generation of examples

The examples you are looking at is generated using the following command:

```bash
deno task generate
```

This command will compile the bookmarklets for all examples and generate the
README.md files for all examples.
