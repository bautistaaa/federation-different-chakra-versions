const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("@module-federation/enhanced");
const path = require("path");
const deps = require("./package.json").dependencies;

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app2",
      library: { type: "var", name: "app2" },
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/components/App",
        "./Button": "./src/components/Button",
      },
      shared: {
        react: { singleton: true, requiredVersion: deps.react },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "@chakra-ui/react": {
          singleton: false,
          version: deps["@chakra-ui/react"],
          requiredVersion: deps["@chakra-ui/react"],
          strictVersion: false,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = webpackConfig;
