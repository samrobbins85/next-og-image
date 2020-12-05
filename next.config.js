var CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  // Target must be serverless
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "node_modules/chrome-aws-lambda",
            to: "node_modules/chrome-aws-lambda",
          },
        ],
      })
    );
    config.externals.push("chrome-aws-lambda");

    // Important: return the modified config
    return config;
  },
};
