module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': 1,
    '@typescript-eslint/no-explicit-any': 1,
    'vue/multi-word-component-names': 0, // 组件名为多个单词改为警告
    'import/extensions': 0, // 取消对文件扩展名的验证
    'import/no-unresolved': 0, // 取消自动解析路径
    'import/no-extraneous-dependencies': 0
  }
}
