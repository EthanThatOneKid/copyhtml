# Copy md

This is a helpful bookmarklet for copying markdown from any HTML element.

This bookmarklet was build using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/md/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Bvar%20p%3D(r%3D%3Etypeof%20require%3C%22u%22%3Frequire%3Atypeof%20Proxy%3C%22u%22%3Fnew%20Proxy(r%2C%7Bget%3A(o%2Ce)%3D%3E(typeof%20require%3C%22u%22%3Frequire%3Ao)%5Be%5D%7D)%3Ar)(function(r)%7Bif(typeof%20require%3C%22u%22)return%20require.apply(this%2Carguments)%3Bthrow%20new%20Error('Dynamic%20require%20of%20%22'%2Br%2B'%22%20is%20not%20supported')%7D)%3Bvar%20c%3Dp(%22https%3A%2F%2Fetok.codes%2Frequire%2Fraw%2Fmain%2Fexamples%2Fshowdown%2Fmod.ts%22)%3Basync%20function%20n(r)%7Blet%20o%3Dawait%20r.scrape()%3Br.render(r.transform%3Fr.transform(o)%3Ao)%7Dasync%20function%20s()%7Breturn(await%20m()).map(t%3D%3Edocument.querySelector(t)).map(t%3D%3Et%3F.outerHTML).join(%22%22)%7Dasync%20function%20i(r)%7Bif(!await%20d())%7Balert(%22Please%20enable%20clipboard%20permission%20in%20your%20browser%20settings%20to%20use%20this%20feature.%22)%3Breturn%7Du(r)%7Dvar%20l%3D%22Enter%20selectors%20to%20copy%20HTML%20from%20(comma-separated)%3A%22%3Bfunction%20m()%7Blet%20r%3Dprompt(l)%3Bif(r%3D%3D%3Dnull)throw%20new%20Error(%22No%20selectors%20provided.%22)%3Breturn%20r.split(%22%2C%22).map(e%3D%3Ee.trim())%7Dfunction%20u(r)%7Bnavigator.clipboard.writeText(r).catch(o%3D%3E%7Bconsole.error(o)%7D).finally(()%3D%3E%7Bconsole.log(%22Copied%20to%20clipboard.%22%2C%7Btext%3Ar%7D)%7D)%7Dasync%20function%20d()%7Bif(!navigator.clipboard)return!1%3Btry%7Blet%20r%3Dawait%20navigator.permissions.query(%7Bname%3A%22clipboard-write%22%2CallowWithoutGesture%3A!1%7D)%3Breturn%20r.state%3D%3D%3D%22prompt%22%26%26console.log(%22Requesting%20clipboard%20permission...%22)%2Cr.state%3D%3D%3D%22granted%22%7Dcatch(r)%7Bconsole.error(r)%7Dreturn!1%7Dasync%20function%20a(r)%7Bawait%20n(%7B...r%2Cscrape%3As%2Crender%3Ai%7D)%7Dvar%20f%3Da.bind(null%2C%7Btransform(r)%7Blet%20e%3Dnew%20showdown.Converter().makeHtml(r)%3Breturn%20console.log(%22Custom%20MD%20transformation!%22%2C%7Bhtml%3Ar%2Cconverted%3Ae%7D)%2Ce%7D%7D)%3B(0%2Cc.requireShowdown)().then(r%3D%3E%7Bif(!r)throw%20new%20Error(%22Showdown%20not%20ready.%22)%3Bf()%7D).catch(r%3D%3E%7Bconsole.error(r)%7D)%3B%7D)()%3B%0A
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
