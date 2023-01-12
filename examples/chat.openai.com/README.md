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
javascript:(()%3D%3E%7Bfunction%20d(t)%7Blet%20e%3D%5B%5D%3Breturn%20t.forEach(n%3D%3Ee.push(n.outerHTML))%2Ce%7Dfunction%20m(t)%7Blet%20e%3Dt.scrape()%3Be%26%26t.render(t.transform%3Ft.transform(e)%3Ad(e))%7Dasync%20function%20u(t)%7Bif(!await%20g())%7Balert(%22Please%20enable%20clipboard%20permission%20in%20your%20browser%20settings%20to%20use%20this%20feature.%22)%3Breturn%7Dh(String(t))%7Dfunction%20h(t)%7Bnavigator.clipboard.writeText(t).then(()%3D%3E%7Bconsole.info(%22Copied%20to%20clipboard.%22%2C%7Btext%3At%7D)%7D).catch(e%3D%3E%7Bconsole.error(e)%7D)%7Dasync%20function%20g()%7Bif(!navigator.clipboard)return!1%3Btry%7Blet%20t%3Dawait%20navigator.permissions.query(%7Bname%3A%22clipboard-write%22%2CallowWithoutGesture%3A!1%7D)%3Breturn%20t.state%3D%3D%3D%22prompt%22%26%26console.log(%22Requesting%20clipboard%20permission...%22)%2Ct.state%3D%3D%3D%22granted%22%7Dcatch(t)%7Bconsole.error(t)%7Dreturn!1%7Dvar%20r%3Dclass%7Bconstructor(e%2Cn%3De)%7Bthis.start%3DMath.min(e%2Cn)%2Cthis.end%3DMath.max(e%2Cn)%7Dstatic%20fromString(e)%7Blet%5Bn%2Cs%5D%3De.split(%22-%22).map(a%3D%3EparseInt(a))%3Breturn%20new%20r(n%2Cs)%7D%7D%3Basync%20function%20f()%7Bawait%20m(%7Bscrape%3Aw%2Ctransform%3Ay%2Crender%3Au%7D)%7Dfunction%20w()%7Bif(location.host!%3D%3D%22chat.openai.com%22%7C%7Clocation.pathname!%3D%3D%22%2Fchat%22)%7Balert(%22This%20script%20only%20works%20on%20chat.openai.com%2Fchat%22)%3Breturn%7Dreturn%20document.querySelectorAll(%22%23__next%20.markdown%22)%7Dfunction%20y(t)%7Blet%20e%3Dprompt(%22Enter%20the%20range%20of%20messages%20to%20copy%20from%20the%20bottom%20of%20the%20chat%2C%20separated%20by%20a%20hyphen.%20For%20example%2C%201-5%20will%20copy%20the%20last%205%20messages.%20If%20you%20want%20to%20copy%20the%20most%20recent%20message%2C%20just%20enter%201.%20If%20you%20pass%20nothing%2C%20the%20default%20is%201.%22%2C%221%22)%7C%7C%221%22%2Cn%3Dr.fromString(e)%2Cs%3Dt.length-n.start%2Ca%3Dt.length-n.end%2Cp%3Dnew%20window.showdown.Converter%2Co%3D%5B%5D%3Bfor(let%20i%3Da%3Bi%3Cs%3Bi%2B%2B)%7Blet%20c%3Dt%5Bi%5D%3F.outerHTML%3Bif(!c)break%3Blet%20l%3Dp.makeMarkdown(c)%3Bconsole.log(%22Custom%20MD%20transformation!%22%2C%7Bhtml%3Ac%2Cconverted%3Al%7D)%2Co.unshift(l)%7Dreturn%20o.length%3D%3D%3D0%3F(alert(%22No%20messages%20found!%22)%2C%22%22)%3Ao.length%3D%3D%3D1%3Fo%5B0%5D%3AJSON.stringify(o)%7Df()%3B%7D)()%3B%0A
```

> Note: For reusability, you may want to add this to your bookmarks bar.
