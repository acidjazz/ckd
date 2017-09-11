module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'no-unused-vars': 0,
    'quotes': 0,
    'comma-dangle': 0,
    'padded-blocks': 0,
    'no-multi-spaces': 0,
    'no-multiple-empty-lines': ['error', { "max": 2, "maxEOF": 2, "maxBOF": 2, }],
    'key-spacing': 0
  },
  globals: {}
}
