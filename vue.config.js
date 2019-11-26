const path = require('path');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  // Vue-cli3:
  // Crashed when using Webpack `import()` #2463
  // https://github.com/vuejs/vue-cli/issues/2463

  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // },

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
        target: 'http://192.168.1.6:8080',
        // target: 'https://appint.mspbots.ai',
        ws: false,
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '^/web': 'http://192.168.1.6:8080'
          // '^/web': 'https://appint.mspbots.ai/web'
        }
      }
    }
    // port: 9099
    // int https://appint.mspbots.ai/web
    // Zhou 192.168.1.13:8082
    // Xing 192.168.1.2:8080
    // hzf 192.168.1.23:8086
  },

  assetsDir: 'static',
  runtimeCompiler: true,
  productionSourceMap: !isProduction
};
