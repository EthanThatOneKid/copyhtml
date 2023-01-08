# Copy md

This is a helpful bookmarklet for copying markdown from any HTML element.

This bookmarklet was build using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/md/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Bvar%20l%3D(t%3D%3Etypeof%20require%3C%22u%22%3Frequire%3Atypeof%20Proxy%3C%22u%22%3Fnew%20Proxy(t%2C%7Bget%3A(o%2Ce)%3D%3E(typeof%20require%3C%22u%22%3Frequire%3Ao)%5Be%5D%7D)%3At)(function(t)%7Bif(typeof%20require%3C%22u%22)return%20require.apply(this%2Carguments)%3Bthrow%20new%20Error('Dynamic%20require%20of%20%22'%2Bt%2B'%22%20is%20not%20supported')%7D)%3Bvar%20p%3Dl(%22https%3A%2F%2Fetok.codes%2Frequire%2Fraw%2Fmain%2Fexamples%2Fshowdown%2Fmod.ts%22)%3Bvar%20m%3D%22Enter%20selectors%20to%20copy%20HTML%20from%20(comma-separated)%3A%22%3Bfunction%20n()%7Blet%20t%3Dprompt(m)%3Bif(t%3D%3D%3Dnull)throw%20new%20Error(%22No%20selectors%20provided.%22)%3Breturn%7Bselectors%3At.split(%22%2C%22).map(e%3D%3Ee.trim())%7D%7Dfunction%20s(t)%7Breturn%20t.map(r%3D%3Edocument.querySelector(r)).map(r%3D%3Er%3F.outerHTML).join(%22%22)%7Dfunction%20c(t)%7Bnavigator.clipboard.writeText(t).catch(o%3D%3E%7Bconsole.error(o)%7D).finally(()%3D%3E%7Bconsole.log(%22Copied%20to%20clipboard.%22%2C%7Btext%3At%7D)%7D)%7Dfunction%20i(t)%7Blet%7Bselectors%3Ao%7D%3Dn()%2Ce%3Ds(o)%3Bc(t%3Ft(e)%3Ae)%7Dvar%20a%3Di.bind(t%3D%3Enew%20showdown.Converter().makeHtml(t))%3B(0%2Cp.requireShowdown)().then(a).then(console.log)%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.

## Showdown requirement

This bookmarklet requires
[Showdown](https://github.com/showdownjs/showdown#readme) to be loaded. This is
done by the following code:

```js
import { requireShowdown } from "https://etok.codes/require/raw/main/examples/showdown/mod.ts";

requireShowdown()
  .then(copyMD);
```
