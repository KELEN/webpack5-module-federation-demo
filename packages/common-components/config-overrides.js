const { ModuleFederationPlugin } = require('webpack').container;
const {
  override,
  addWebpackPlugin,
} = require("customize-cra");

module.exports = override(
  config => {
    config.output.publicPath = 'http://localhost:3000/';
    return config;
  },
  addWebpackPlugin(new ModuleFederationPlugin({
    name: 'ccomponent',
    filename: "remoteEntry.js",
    exposes: {
      './button': './src/button/index.jsx',
    }
  })),
);