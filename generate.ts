// Run:
// deno run -A generate.ts
// or
// deno task generate
//

import { gen } from "https://etok.codes/bmt/raw/main/examples_gen.ts";

if (import.meta.main) {
  await gen();
  Deno.exit(0);
}
