const { ModuleFederationPlugin } = require('webpack').container;
const {
  override,
  addWebpackPlugin,
} = require("customize-cra");

module.exports = override(
  addWebpackPlugin(new ModuleFederationPlugin({
    name: 'app',
    remotes: {
      'ccomponent': 'ccomponent@http://localhost:3000/remoteEntry.js',
    }
  })),
);