/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["next", "next/core-web-vitals"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: false,
  },
};
