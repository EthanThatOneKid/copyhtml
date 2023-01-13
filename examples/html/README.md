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
javascript:(()%3D%3E%7Bfunction%20a(e)%7Blet%20r%3D%5B%5D%3Breturn%20e.forEach(i%3D%3Er.push(i.outerHTML))%2Cr%7Dfunction%20t(e)%7Blet%20r%3De.scrape()%3Br%26%26e.render(e.transform%3Fe.transform(r)%3Aa(r))%7Dfunction%20o(e%3Dp())%7Bif(e)return%20document.querySelectorAll(e)%7Dasync%20function%20n(e)%7Bif(!await%20l())%7Balert(%22Please%20enable%20clipboard%20permission%20in%20your%20browser%20settings%20to%20use%20this%20feature.%22)%3Breturn%7Df(String(e))%7Dvar%20c%3D%22Enter%20selector%20to%20copy%20HTML%20from%20elements%20that%20match%20the%20given%20selector%3A%22%3Bfunction%20p()%7Breturn%20prompt(c%2C%22%22)%7C%7C%22%22%7Dfunction%20f(e)%7Bnavigator.clipboard.writeText(e).then(()%3D%3E%7Bconsole.info(%22Copied%20to%20clipboard.%22%2C%7Btext%3Ae%7D)%7D).catch(r%3D%3E%7Bconsole.error(r)%7D)%7Dasync%20function%20l()%7Bif(!navigator.clipboard)return!1%3Btry%7Blet%20e%3Dawait%20navigator.permissions.query(%7Bname%3A%22clipboard-write%22%2CallowWithoutGesture%3A!1%7D)%3Breturn%20e.state%3D%3D%3D%22prompt%22%26%26console.log(%22Requesting%20clipboard%20permission...%22)%2Ce.state%3D%3D%3D%22granted%22%7Dcatch(e)%7Bconsole.error(e)%7Dreturn!1%7Dasync%20function%20s(e%3D%7B%7D)%7Bawait%20t(%7Bscrape%3Ao%2Ctransform%3Ae.transform%2Crender%3An%7D)%7Ds().catch(e%3D%3Econsole.error(e))%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.

## On the generation of examples

The examples you are looking at is generated using the following command:

```bash
deno task generate
```

This command will compile the bookmarklets for all examples and generate the
README.md files for all examples.
