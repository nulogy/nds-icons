import babel from "@rollup/plugin-babel";

export default {
  input: "index.js",
  output: {
    name: "ndsIcons",
    file: "dist/main.js",
    format: "umd",
  },
  plugins: [
    babel({
      /* exclude: globs to exclude */
      exclude: ["./node_modules/**/*"],
      /* exclude: files to be transpiled by babel */
      extensions: [".js", ".jsx", ".json"],
    }),
  ],
};
