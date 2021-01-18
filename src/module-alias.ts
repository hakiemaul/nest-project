import { resolve } from "path";
import * as moduleAlias from "module-alias";

moduleAlias.addAlias("src", resolve(__dirname, "./"));