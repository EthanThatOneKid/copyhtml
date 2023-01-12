# Copy md

This is a helpful bookmarklet for copying markdown from any HTML element.

This bookmarklet was build using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/md/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Basync%20function%20n(e%2Cr%3D%7B%7D)%7Bif(r.check%26%26r.check())return!0%3Blet%20o%3Ddocument.createElement(%22script%22)%3Bif(o.src%3De%2Cr.module)%7Bif(!m())return!1%3Bo.type%3D%22module%22%7Dreturn%20document.head.appendChild(o)%2Cr.check%3Fawait%20new%20Promise(t%3D%3E%7Bo.onload%3D()%3D%3Et(r.check())%7D)%3Aawait%20new%20Promise(t%3D%3E%7Bo.onload%3D()%3D%3Et(!0)%7D)%7Dfunction%20m()%7Bif(%22supports%22in%20HTMLScriptElement)return%20HTMLScriptElement.supports(%22module%22)%3Bif(%22noModule%22in%20document.createElement(%22script%22))return!0%3Bthrow%20new%20Error(%22Module%20support%20is%20not%20available%20in%20this%20browser%22)%7Dasync%20function%20s(e%3D%7B%7D)%7Blet%20r%3De.version%7C%7C%22latest%22%3Breturn%20await%20n(%60https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fshowdown%40%24%7Br%7D%2Fdist%2Fshowdown.min.js%60%2C%7Bcheck()%7Breturn%20Boolean(window.showdown)%7D%7D)%7Dfunction%20d(e)%7Blet%20r%3D%5B%5D%3Breturn%20e.forEach(o%3D%3Er.push(o.outerHTML))%2Cr%7Dfunction%20i(e)%7Blet%20r%3De.scrape()%3Br%26%26e.render(e.transform%3Fe.transform(r)%3Ad(r))%7Dfunction%20c(e%3Df())%7Bif(e)return%20document.querySelectorAll(e)%7Dasync%20function%20a(e)%7Bif(!await%20h())%7Balert(%22Please%20enable%20clipboard%20permission%20in%20your%20browser%20settings%20to%20use%20this%20feature.%22)%3Breturn%7Dw(String(e))%7Dvar%20l%3D%22Enter%20selector%20to%20copy%20HTML%20from%20elements%20that%20match%20the%20given%20selector%3A%22%3Bfunction%20f()%7Breturn%20prompt(l%2C%22%22)%7C%7C%22%22%7Dfunction%20w(e)%7Bnavigator.clipboard.writeText(e).then(()%3D%3E%7Bconsole.info(%22Copied%20to%20clipboard.%22%2C%7Btext%3Ae%7D)%7D).catch(r%3D%3E%7Bconsole.error(r)%7D)%7Dasync%20function%20h()%7Bif(!navigator.clipboard)return!1%3Btry%7Blet%20e%3Dawait%20navigator.permissions.query(%7Bname%3A%22clipboard-write%22%2CallowWithoutGesture%3A!1%7D)%3Breturn%20e.state%3D%3D%3D%22prompt%22%26%26console.log(%22Requesting%20clipboard%20permission...%22)%2Ce.state%3D%3D%3D%22granted%22%7Dcatch(e)%7Bconsole.error(e)%7Dreturn!1%7Dasync%20function%20p(e%3D%7B%7D)%7Bawait%20i(%7Bscrape%3Ac%2Ctransform%3Ae.transform%2Crender%3Aa%7D)%7Dvar%20u%3Dp.bind(null%2C%7Btransform(e)%7Blet%20r%3De%5B0%5D%3F.outerHTML%3Bif(!r)return%3Blet%20t%3Dnew%20window.showdown.Converter().makeMarkdown(r)%3Breturn%20console.log(%22Custom%20MD%20transformation!%22%2C%7Bhtml%3Ar%2Cconverted%3At%7D)%2Ct%7D%7D)%3Bs().then(e%3D%3E%7Bif(!e)throw%20new%20Error(%22Showdown%20not%20prepared!%22)%3Breturn%20u()%7D).catch(e%3D%3Econsole.error(e))%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.

## Showdown requirement

This bookmarklet requires
[Showdown](https://github.com/showdownjs/showdown#readme) to be loaded. This is
done by the following code:

<https://github.com/EthanThatOneKid/copyhtml/blob/91a5e4796f9ed2a3b0e2dd26d8054d62c5895197/examples/md/main.ts#L1-L13>
