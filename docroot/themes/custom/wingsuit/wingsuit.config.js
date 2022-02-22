const namespaces = require('./source/default/namespaces');
// webpack.config.js
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  webpackFinal: function (appConfig, webpack) {
    // Alter final webpack config.
    webpack.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader',
    });
    webpack.plugins.push(new VueLoaderPlugin());
    return webpack;
  },
  presets: ['@wingsuit-designsystem/preset-tailwind2', '@wingsuit-designsystem/preset-postcss8'],
  designSystems: {
    default: {
      namespaces,
    },
  },
};
