<!-- vue-cli3.0 config -->
{
  "useTaobaoRegistry": false,
  "packageManager": "yarn",
  "presets": {
    "cui-front": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-typescript": {
          "classComponent": true,
          "useTsWithBabel": true
        },
        "@vue/cli-plugin-router": {
          "historyMode": true
        },
        "@vue/cli-plugin-vuex": {},
        "@vue/cli-plugin-eslint": {
          "config": "prettier",
          "lintOn": [
            "save"
          ]
        },
        "@vue/cli-plugin-unit-jest": {}
      },
      "cssPreprocessor": "node-sass"
    }
  }
}