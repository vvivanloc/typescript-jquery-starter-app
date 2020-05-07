const path = require("path");

module.exports = (_env, _argv) => {
  return {
    context: path.resolve(__dirname, "./"),

    entry: {
      app: "./src/main.ts",
    },

    output: {
      filename: "dist/bundle.js",
      path: path.resolve(__dirname, "./"),
    },

    resolve: {
      extensions: [".ts", ".js"],
    },

    devtool: "source-map",

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
        },
        {
          test: /\.scss$/,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  };
};
