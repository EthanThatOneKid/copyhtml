# Copy md

This is a helpful bookmarklet for copying markdown from any HTML element.

This bookmarklet was build using the following command:

```bash
deno run -A --reload https://deno.land/x/bmt/main.ts ./examples/md/main.ts
```

{{ bookmarklet:usage }}

## Showdown requirement

This bookmarklet requires
[Showdown](https://github.com/showdownjs/showdown#readme) to be loaded. This is
done by the following code:

<https://github.com/EthanThatOneKid/copyhtml/blob/91a5e4796f9ed2a3b0e2dd26d8054d62c5895197/examples/md/main.ts#L1-L13>
