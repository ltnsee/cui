const path = require('path');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  transpileDependencies: ['vue-echarts', 'resize-detector', 'vuetify'],
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },

  chainWebpack: (config) => {
    config.resolve.alias.set('@$', resolve('src')).set('@views', resolve('src/views'));
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    proxy: {
      '/web': {
        // target: 'http://192.168.1.6:8080',
        target: 'https://appint.mspbots.ai',
        ws: false,
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          // '^/web': 'http://192.168.1.6:8080'
          '^/web': 'https://appint.mspbots.ai/web'
        }
      }
    }
  },

  assetsDir: 'static',
  runtimeCompiler: true,
  productionSourceMap: !isProduction
};
