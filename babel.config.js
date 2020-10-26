module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: { browsers: "defaults" },
        useBuiltIns: "entry",
      },
    ],
  ],
  plugins: ["inline-json-import"],
};
