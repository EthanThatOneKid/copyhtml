# Copy `chat.openai.com`

This is a helpful bookmarklet for copying markdown from AI-generated responses
on <https://chat.openai.com/chat>.

This bookmarklet was built using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/chat.openai.com/main.ts
```

## Usage

Copy and paste the following into your browser's address bar:

```
javascript:(()%3D%3E%7Bvar%20h%3D(e%3D%3Etypeof%20require%3C%22u%22%3Frequire%3Atypeof%20Proxy%3C%22u%22%3Fnew%20Proxy(e%2C%7Bget%3A(t%2Cr)%3D%3E(typeof%20require%3C%22u%22%3Frequire%3At)%5Br%5D%7D)%3Ae)(function(e)%7Bif(typeof%20require%3C%22u%22)return%20require.apply(this%2Carguments)%3Bthrow%20new%20Error('Dynamic%20require%20of%20%22'%2Be%2B'%22%20is%20not%20supported')%7D)%3Bvar%20f%3Dh(%22https%3A%2F%2Fetok.codes%2Fdynamic_require%2Fraw%2Fmain%2Fexamples%2Fshowdown%2Fmod.ts%22)%3Bfunction%20g(e)%7Blet%20t%3D%5B%5D%3Breturn%20e.forEach(r%3D%3Et.push(r.outerHTML))%2Ct%7Dfunction%20m(e)%7Blet%20t%3De.scrape()%3Bt%26%26e.render(e.transform%3Fe.transform(t)%3Ag(t))%7Dasync%20function%20u(e)%7Bif(!await%20y())%7Balert(%22Please%20enable%20clipboard%20permission%20in%20your%20browser%20settings%20to%20use%20this%20feature.%22)%3Breturn%7Dw(String(e))%7Dfunction%20w(e)%7Bnavigator.clipboard.writeText(e).then(()%3D%3E%7Bconsole.info(%22Copied%20to%20clipboard.%22%2C%7Btext%3Ae%7D)%7D).catch(t%3D%3E%7Bconsole.error(t)%7D)%7Dasync%20function%20y()%7Bif(!navigator.clipboard)return!1%3Btry%7Blet%20e%3Dawait%20navigator.permissions.query(%7Bname%3A%22clipboard-write%22%2CallowWithoutGesture%3A!1%7D)%3Breturn%20e.state%3D%3D%3D%22prompt%22%26%26console.log(%22Requesting%20clipboard%20permission...%22)%2Ce.state%3D%3D%3D%22granted%22%7Dcatch(e)%7Bconsole.error(e)%7Dreturn!1%7Dvar%20n%3Dclass%7Bconstructor(t%2Cr%3Dt)%7Bthis.start%3DMath.min(t%2Cr)%2Cthis.end%3DMath.max(t%2Cr)%7Dstatic%20fromString(t)%7Blet%5Br%2Cs%5D%3Dt.split(%22-%22).map(a%3D%3EparseInt(a))%3Breturn%20new%20n(r%2Cs)%7D%7D%3Basync%20function%20p()%7Bawait%20m(%7Bscrape%3Ab%2Ctransform%3Av%2Crender%3Au%7D)%7Dfunction%20b()%7Bif(location.host!%3D%3D%22chat.openai.com%22%7C%7Clocation.pathname!%3D%3D%22%2Fchat%22)%7Balert(%22This%20script%20only%20works%20on%20chat.openai.com%2Fchat%22)%3Breturn%7Dreturn%20document.querySelectorAll(%22%23__next%20.markdown%22)%7Dfunction%20v(e)%7Blet%20t%3Dprompt(%22Enter%20the%20range%20of%20messages%20to%20copy%20from%20the%20bottom%20of%20the%20chat%2C%20separated%20by%20a%20hyphen.%20For%20example%2C%201-5%20will%20copy%20the%20last%205%20messages.%20If%20you%20want%20to%20copy%20the%20most%20recent%20message%2C%20just%20enter%201.%20If%20you%20pass%20nothing%2C%20the%20default%20is%201.%22%2C%221%22)%7C%7C%221%22%2Cr%3Dn.fromString(t)%2Cs%3De.length-r.start%2Ca%3De.length-r.end%2Cd%3Dnew%20window.showdown.Converter%2Co%3D%5B%5D%3Bfor(let%20i%3Da%3Bi%3Cs%3Bi%2B%2B)%7Blet%20c%3De%5Bi%5D%3F.outerHTML%3Bif(!c)break%3Blet%20l%3Dd.makeMarkdown(c)%3Bconsole.log(%22Custom%20MD%20transformation!%22%2C%7Bhtml%3Ac%2Cconverted%3Al%7D)%2Co.unshift(l)%7Dreturn%20o.length%3D%3D%3D0%3F(alert(%22No%20messages%20found!%22)%2C%22%22)%3Ao.length%3D%3D%3D1%3Fo%5B0%5D%3AJSON.stringify(o)%7D(0%2Cf.dynamicRequireShowdown)().then(e%3D%3E%7Bif(!e)throw%20new%20Error(%22Showdown%20not%20prepared!%22)%3Breturn%20p()%7D).catch(e%3D%3Econsole.error(e))%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.
