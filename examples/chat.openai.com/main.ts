import { dynamicRequireShowdown } from "https://etok.codes/dynamic_require/raw/main/examples/showdown/mod.ts";

import { copyChat } from "./copychat.ts";

dynamicRequireShowdown()
  .then((prepared) => {
    if (!prepared) {
      throw new Error("Showdown not prepared!");
    }

    return copyChat();
  })
  .catch((err) => console.error(err));
