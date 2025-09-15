const eslintConfig = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs",
      globals: {
        node: true,
        jest: true,
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        exports: "readonly",
        console: "readonly"
      }
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "no-process-exit": "off"
    }
  }
];

module.exports = eslintConfig;