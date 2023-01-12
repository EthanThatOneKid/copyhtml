# Copy md

This is a helpful bookmarklet for copying markdown from any HTML element.

This bookmarklet was build using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/md/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Bvar%20f%3D(e%3D%3Etypeof%20require%3C%22u%22%3Frequire%3Atypeof%20Proxy%3C%22u%22%3Fnew%20Proxy(e%2C%7Bget%3A(r%2Ct)%3D%3E(typeof%20require%3C%22u%22%3Frequire%3Ar)%5Bt%5D%7D)%3Ae)(function(e)%7Bif(typeof%20require%3C%22u%22)return%20require.apply(this%2Carguments)%3Bthrow%20new%20Error('Dynamic%20require%20of%20%22'%2Be%2B'%22%20is%20not%20supported')%7D)%3Bvar%20p%3Df(%22https%3A%2F%2Fetok.codes%2Fdynamic_require%2Fraw%2Fmain%2Fexamples%2Fshowdown%2Fmod.ts%22)%3Bfunction%20m(e)%7Blet%20r%3D%5B%5D%3Breturn%20e.forEach(t%3D%3Er.push(t.outerHTML))%2Cr%7Dfunction%20n(e)%7Blet%20r%3De.scrape()%3Br%26%26e.render(e.transform%3Fe.transform(r)%3Am(r))%7Dfunction%20s(e%3Du())%7Bif(e)return%20document.querySelectorAll(e)%7Dasync%20function%20i(e)%7Bif(!await%20w())%7Balert(%22Please%20enable%20clipboard%20permission%20in%20your%20browser%20settings%20to%20use%20this%20feature.%22)%3Breturn%7Dd(String(e))%7Dvar%20l%3D%22Enter%20selector%20to%20copy%20HTML%20from%20elements%20that%20match%20the%20given%20selector%3A%22%3Bfunction%20u()%7Breturn%20prompt(l%2C%22%22)%7C%7C%22%22%7Dfunction%20d(e)%7Bnavigator.clipboard.writeText(e).then(()%3D%3E%7Bconsole.info(%22Copied%20to%20clipboard.%22%2C%7Btext%3Ae%7D)%7D).catch(r%3D%3E%7Bconsole.error(r)%7D)%7Dasync%20function%20w()%7Bif(!navigator.clipboard)return!1%3Btry%7Blet%20e%3Dawait%20navigator.permissions.query(%7Bname%3A%22clipboard-write%22%2CallowWithoutGesture%3A!1%7D)%3Breturn%20e.state%3D%3D%3D%22prompt%22%26%26console.log(%22Requesting%20clipboard%20permission...%22)%2Ce.state%3D%3D%3D%22granted%22%7Dcatch(e)%7Bconsole.error(e)%7Dreturn!1%7Dasync%20function%20a(e%3D%7B%7D)%7Bawait%20n(%7Bscrape%3As%2Ctransform%3Ae.transform%2Crender%3Ai%7D)%7Dvar%20c%3Da.bind(null%2C%7Btransform(e)%7Blet%20r%3De%5B0%5D%3F.outerHTML%3Bif(!r)return%3Blet%20o%3Dnew%20window.showdown.Converter().makeMarkdown(r)%3Breturn%20console.log(%22Custom%20MD%20transformation!%22%2C%7Bhtml%3Ar%2Cconverted%3Ao%7D)%2Co%7D%7D)%3B(0%2Cp.dynamicRequireShowdown)().then(e%3D%3E%7Bif(!e)throw%20new%20Error(%22Showdown%20not%20prepared!%22)%3Breturn%20c()%7D).catch(e%3D%3Econsole.error(e))%3B%7D)()%3B%0A
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
