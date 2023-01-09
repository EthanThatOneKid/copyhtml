# Copy md

This is a helpful bookmarklet for copying markdown from any HTML element.

This bookmarklet was build using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/md/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Bvar%20s%3D(r%3D%3Etypeof%20require%3C%22u%22%3Frequire%3Atypeof%20Proxy%3C%22u%22%3Fnew%20Proxy(r%2C%7Bget%3A(e%2Cn)%3D%3E(typeof%20require%3C%22u%22%3Frequire%3Ae)%5Bn%5D%7D)%3Ar)(function(r)%7Bif(typeof%20require%3C%22u%22)return%20require.apply(this%2Carguments)%3Bthrow%20new%20Error('Dynamic%20require%20of%20%22'%2Br%2B'%22%20is%20not%20supported')%7D)%3Bvar%20o%3Ds(%22https%3A%2F%2Fetok.codes%2Frequire%2Fraw%2Fmain%2Fexamples%2Fshowdown%2Fmod.ts%22)%3Basync%20function%20t(r)%7Blet%20e%3Dawait%20r.scrape()%3Br.render(r.transform%3Fr.transform(e)%3Ae)%7Dvar%20i%3Dt.bind(r%3D%3Enew%20showdown.Converter().makeHtml(r))%3B(0%2Co.requireShowdown)().then(i).then(console.log)%3B%7D)()%3B%0A
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
