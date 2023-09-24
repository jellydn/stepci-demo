module.exports = {
  extends: ["productsway/typescript"],
  rules: {
    "@typescript-eslint/naming-convention": "off",
  },
  ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
};
