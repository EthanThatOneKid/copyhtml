// Run:
// deno run -A generate.ts
// or
// deno task generate
//

import { gen } from "https://deno.land/x/bmt@v0.2/examples_gen.ts";

if (import.meta.main) {
  await gen();
  Deno.exit(0);
}
