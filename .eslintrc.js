module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // v3 3.setup语法错
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    // "plugin:vue/essential",
    // 2.vue3规则集
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  // 1.解析vue
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 'off'
  }
}
