// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  // required to lint *.vue files
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {jsx: true}
  },
  env: {
    browser: true,
    es6: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',

  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': 2,
    'no-eval': 2,
    'no-magic-numbers': 0,
    'no-trailing-spaces': 0,
    'require-jsdoc': 2,
    'no-var': 2,
    'object-property-newline': 0,
    'no-return-await': 0,
    'no-return-assign': 0
  }
}
