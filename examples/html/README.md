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
javascript:(()%3D%3E%7Basync%20function%20s(r)%7Blet%20e%3Dawait%20r.scrape()%3Br.render(r.transform%3Fr.transform(e)%3Ae)%7Dasync%20function%20n()%7Breturn(await%20p()).map(t%3D%3Edocument.querySelector(t)).map(t%3D%3Et%3F.outerHTML).join(%22%22)%7Dasync%20function%20i(r)%7Bif(!await%20m())%7Balert(%22Please%20enable%20clipboard%20permission%20in%20your%20browser%20settings%20to%20use%20this%20feature.%22)%3Breturn%7Dl(r)%7Dvar%20c%3D%22Enter%20selectors%20to%20copy%20HTML%20from%20(comma-separated)%3A%22%3Bfunction%20p()%7Blet%20r%3Dprompt(c%2C%22%22)%3Bif(!r)throw%20new%20Error(%22No%20selectors%20provided.%22)%3Breturn%20r.split(%22%2C%22).map(o%3D%3Eo.trim())%7Dfunction%20l(r)%7Bnavigator.clipboard.writeText(r).catch(e%3D%3E%7Bconsole.error(e)%7D).finally(()%3D%3E%7Bconsole.log(%22Copied%20to%20clipboard.%22%2C%7Btext%3Ar%7D)%7D)%7Dasync%20function%20m()%7Bif(!navigator.clipboard)return!1%3Btry%7Blet%20r%3Dawait%20navigator.permissions.query(%7Bname%3A%22clipboard-write%22%2CallowWithoutGesture%3A!1%7D)%3Breturn%20r.state%3D%3D%3D%22prompt%22%26%26console.log(%22Requesting%20clipboard%20permission...%22)%2Cr.state%3D%3D%3D%22granted%22%7Dcatch(r)%7Bconsole.error(r)%7Dreturn!1%7Dasync%20function%20a(r)%7Bawait%20s(%7B...r%2Cscrape%3An%2Crender%3Ai%7D)%7Da()%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.

## On the generation of examples

The examples you are looking at is generated using the following command:

```bash
deno task generate
```

This command will compile the bookmarklets for all examples and generate the
README.md files for all examples.
