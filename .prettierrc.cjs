/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 100,
  semi: false,
  singleQuote: false,
  quoteProps: "preserve",
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: true,
  endOfLine: "lf",
  arrowParens: "always",
  overrides: [
    {
      files: ["*.json", "*.md", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    }
  ]
}
