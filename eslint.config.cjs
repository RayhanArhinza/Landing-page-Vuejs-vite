// eslint.config.cjs (CommonJS format)
module.exports = {
  languageOptions: {
    globals: {
      process: 'readonly',
      module: 'readonly',
    },
    parserOptions: {
      ecmaVersion: 2020,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
}
