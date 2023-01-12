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
javascript:(()%3D%3E%7Basync%20function%20u(e%2Ct%3D%7B%7D)%7Bif(t.check%26%26t.check())return!0%3Blet%20n%3Ddocument.createElement(%22script%22)%3Bif(n.src%3De%2Ct.module)%7Bif(!w())return!1%3Bn.type%3D%22module%22%7Dreturn%20document.head.appendChild(n)%2Ct.check%3Fawait%20new%20Promise(r%3D%3E%7Bn.onload%3D()%3D%3Er(t.check())%7D)%3Aawait%20new%20Promise(r%3D%3E%7Bn.onload%3D()%3D%3Er(!0)%7D)%7Dfunction%20w()%7Bif(%22supports%22in%20HTMLScriptElement)return%20HTMLScriptElement.supports(%22module%22)%3Bif(%22noModule%22in%20document.createElement(%22script%22))return!0%3Bthrow%20new%20Error(%22Module%20support%20is%20not%20available%20in%20this%20browser%22)%7Dasync%20function%20m(e%3D%7B%7D)%7Blet%20t%3De.version%7C%7C%22latest%22%3Breturn%20await%20u(%60https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fshowdown%40%24%7Bt%7D%2Fdist%2Fshowdown.min.js%60%2C%7Bcheck()%7Breturn%20Boolean(window.showdown)%7D%7D)%7Dfunction%20g(e)%7Blet%20t%3D%5B%5D%3Breturn%20e.forEach(n%3D%3Et.push(n.outerHTML))%2Ct%7Dfunction%20p(e)%7Blet%20t%3De.scrape()%3Bt%26%26e.render(e.transform%3Fe.transform(t)%3Ag(t))%7Dasync%20function%20d(e)%7Bif(!await%20b())%7Balert(%22Please%20enable%20clipboard%20permission%20in%20your%20browser%20settings%20to%20use%20this%20feature.%22)%3Breturn%7Dy(String(e))%7Dfunction%20y(e)%7Bnavigator.clipboard.writeText(e).then(()%3D%3E%7Bconsole.info(%22Copied%20to%20clipboard.%22%2C%7Btext%3Ae%7D)%7D).catch(t%3D%3E%7Bconsole.error(t)%7D)%7Dasync%20function%20b()%7Bif(!navigator.clipboard)return!1%3Btry%7Blet%20e%3Dawait%20navigator.permissions.query(%7Bname%3A%22clipboard-write%22%2CallowWithoutGesture%3A!1%7D)%3Breturn%20e.state%3D%3D%3D%22prompt%22%26%26console.log(%22Requesting%20clipboard%20permission...%22)%2Ce.state%3D%3D%3D%22granted%22%7Dcatch(e)%7Bconsole.error(e)%7Dreturn!1%7Dvar%20o%3Dclass%7Bconstructor(t%2Cn%3Dt)%7Bthis.start%3DMath.min(t%2Cn)%2Cthis.end%3DMath.max(t%2Cn)%7Dstatic%20fromString(t)%7Blet%5Bn%2Cr%5D%3Dt.split(%22-%22).map(i%3D%3EparseInt(i))%3Breturn%20new%20o(n%2Cr)%7D%7D%3Basync%20function%20f()%7Bawait%20p(%7Bscrape%3Ak%2Ctransform%3Av%2Crender%3Ad%7D)%7Dfunction%20k()%7Bif(location.host!%3D%3D%22chat.openai.com%22%7C%7Clocation.pathname!%3D%3D%22%2Fchat%22)%7Balert(%22This%20script%20only%20works%20on%20https%3A%2F%2Fchat.openai.com%2Fchat%22)%3Breturn%7Dreturn%20document.querySelectorAll(%22%23__next%20.markdown%22)%7Dfunction%20v(e)%7Blet%20t%3Dprompt(%22Enter%20the%20range%20of%20messages%20to%20copy%20from%20the%20bottom%20of%20the%20chat%2C%20separated%20by%20a%20hyphen.%20For%20example%2C%201-5%20will%20copy%20the%20last%205%20messages.%20If%20you%20want%20to%20copy%20the%20most%20recent%20message%2C%20just%20enter%201.%20If%20you%20pass%20nothing%2C%20the%20default%20is%201.%22%2C%221%22)%7C%7C%221%22%2Cn%3Do.fromString(t)%2Cr%3De.length-n.start%2Ci%3De.length-n.end%2Ch%3Dnew%20window.showdown.Converter%2Cs%3D%5B%5D%3Bfor(let%20a%3Di%3Ba%3E%3Dr%3Ba--)%7Blet%20c%3De%5Ba%5D%3F.outerHTML%3Bif(!c)break%3Blet%20l%3Dh.makeMarkdown(c)%3Bconsole.log(%22Custom%20MD%20transformation!%22%2C%7Bhtml%3Ac%2Cconverted%3Al%7D)%2Cs.unshift(l)%7Dreturn%20s.length%3D%3D%3D0%3F(alert(%22No%20messages%20found!%22)%2C%22%22)%3As.length%3D%3D%3D1%3Fs%5B0%5D%3AJSON.stringify(s)%7Dm().then(e%3D%3E%7Bif(!e)throw%20new%20Error(%22Showdown%20not%20prepared!%22)%3Breturn%20f()%7D).catch(e%3D%3Econsole.error(e))%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.
