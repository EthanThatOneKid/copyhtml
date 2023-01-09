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
javascript:(()%3D%3E%7Basync%20function%20s(e)%7Bif(!await%20i())%7Balert(%22Please%20enable%20clipboard%20permission%20in%20your%20browser%20settings%20to%20use%20this%20feature.%22)%3Breturn%7Dlet%20t%3Da(l())%3Bn(e%3Fe(t)%3At)%7Dfunction%20n(e)%7Bnavigator.clipboard.writeText(e).catch(r%3D%3E%7Bconsole.error(r)%7D).finally(()%3D%3E%7Bconsole.log(%22Copied%20to%20clipboard.%22%2C%7Btext%3Ae%7D)%7D)%7Dasync%20function%20i()%7Bif(!navigator.clipboard)return!1%3Btry%7Blet%20e%3Dawait%20navigator.permissions.query(%7Bname%3A%22clipboard-read%22%2CallowWithoutGesture%3A!1%7D)%3Breturn%20e.state%3D%3D%3D%22prompt%22%26%26console.log(%22Requesting%20clipboard%20permission...%22)%2Ce.state%3D%3D%3D%22granted%22%7Dcatch(e)%7Bconsole.error(e)%7Dreturn!1%7Dfunction%20a(e)%7Breturn%20e.selectors.map(o%3D%3Edocument.querySelector(o)).map(o%3D%3Eo%3F.outerHTML).join(%22%22)%7Dvar%20c%3D%22Enter%20selectors%20to%20copy%20HTML%20from%20(comma-separated)%3A%22%3Bfunction%20l()%7Blet%20e%3Dprompt(c)%3Bif(e%3D%3D%3Dnull)throw%20new%20Error(%22No%20selectors%20provided.%22)%3Breturn%7Bselectors%3Ae.split(%22%2C%22).map(t%3D%3Et.trim())%7D%7Ds()%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.

## On the generation of examples

The examples you are looking at is generated using the following command:

```bash
deno task generate
```

This command will compile the bookmarklets for all examples and generate the
README.md files for all examples.
