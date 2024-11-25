import babel from "@rollup/plugin-babel";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.js",
  output: {
    name: "ndsIcons",
    file: "dist/main.js",
    format: "umd",
  },
  plugins: [
    babel({
      exclude: ["./node_modules/**/*"],
      extensions: [".js", ".jsx", ".json"],
    }),
    copy({
      targets: [{ src: "src/index.d.ts", dest: "dist" }],
    }),
  ],
};
