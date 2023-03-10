const { LoaderTargetPlugin } = require("webpack");

module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true
    },
    extends: [
        //vue
      'plugin:vue/vue3-strongly-recommended',
      //js
      'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
          }],
          "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
          }]
    }
}