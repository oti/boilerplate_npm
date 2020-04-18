module.exports = {
  mode: "production",
  entry: {
    script: "./src/script/script.ts",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist/script",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts"],
  },
};
