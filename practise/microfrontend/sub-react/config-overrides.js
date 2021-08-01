const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

const { name } = require('./package.json');

console.log(name)

module.exports = {
  webpack: function override(config, env) {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    // Remove 'react-refresh' from the loaders.
    for (const rule of config.module.rules) {
      if (!rule.oneOf) continue;

      for (const one of rule.oneOf) {
        if (one.loader && one.loader.includes("babel-loader") && one.options && one.options.plugins) {
          one.options.plugins = one.options.plugins.filter(
            (plugin) => typeof plugin !== "string" || !plugin.includes("react-refresh")
          );
        }
      }
    }

    config.plugins = config.plugins.filter(
      (plugin) => !(plugin instanceof webpack.HotModuleReplacementPlugin) && !(plugin instanceof ReactRefreshPlugin)
    );

    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
