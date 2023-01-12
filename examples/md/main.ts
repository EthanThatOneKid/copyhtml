import { dynamicRequireShowdown } from "https://etok.codes/dynamic_require/raw/main/examples/showdown/mod.ts";

import { copyMD } from "./copymd.ts";

dynamicRequireShowdown()
  .then((prepared) => {
    if (!prepared) {
      throw new Error("Showdown not prepared!");
    }

    return copyMD();
  })
  .catch((err) => console.error(err));
