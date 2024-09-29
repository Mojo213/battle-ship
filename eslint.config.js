module.exports = {
  ignores: [
    'dist/bundle.js', 
    'webpack.config.js', 
    'eslint.config.js',
    '**/*.test.js',
  ],
  rules: {
    'no-unused-vars': 'error',
    'no-undef': 'error',
  },
};
