module.exports = {
  root: true,
  parser: 'vue-eslint-parser', // 用于解析 Vue 文件
  parserOptions: {
    ecmaVersion: 2020, // 设置 ECMAScript 版本
    sourceType: 'module', // 设置为模块
  },
  env: {
    browser: true, // 环境设置为浏览器
  },
  extends: ['standard', 'plugin:vue/recommended'], // 扩展标准和 Vue 推荐规则
  plugins: ['vue'], // 需要的插件
  rules: {
    'no-multiple-empty-lines': [0], // 每个文件开头、结尾允许 1 行空行
    'quotes': [0], // 强制使用单引号
    'semi': [0], // 禁止使用分号
    'comma-dangle': [0], // 禁止尾随逗号
    'space-before-function-paren': [0], // 函数括号前需要空格
    'prefer-const': [0], // 强制使用 const
    'vue/multi-word-component-names': [0], // 禁用多词组件名称规则
    'vue/no-useless-template-attributes': [0], // 禁用无用的模板属性规则
    'eqeqeq': [0],
    'indent': [0],
    'no-useless-escape': [0],
    'no-useless-return':[0],
    'no-trailing-spaces':[0],
    'no-dupe-keys':[0],
    'array-callback-return':[0], //
    'spaced-comment':[0],
    'dot-notation':[0],
    'eol-last':[0],
    'curly':[0],
    'object-property-newline':[0],
    'no-unused-expressions':[0],
    'brace-style':[0]
    // 添加或修改其他规则
  },
};
