import { nodeResolve } from "@rollup/plugin-node-resolve"
import { terser } from "rollup-plugin-terser"

export default {
  input: "app.js",
  output: {
    file: "bundle.js",
  },
  plugins: [nodeResolve(), terser()],
}
