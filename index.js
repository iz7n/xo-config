module.exports = {
  prettier: true,
  rules: {
    "no-await-in-loop": "off",
    "default-case": "off",
    radix: ["error", "as-needed"],
    "no-multi-assign": "off",
    "no-promise-executor-return": "off",
    "no-return-assign": "off",
    "no-bitwise": "off",
    "no-implicit-coercion": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/switch-exhaustiveness-check": "off",
    "@typescript-eslint/member-ordering": "off",
    "import/extensions": "off",
    "import/no-unassigned-import": "off",
    "n/file-extension-in-import": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/require-array-join-separator": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          params: false,
          ctx: false,
          e: false,
          i: false,
          j: false,
          env: false,
          str: false,
          mod: false,
          ref: false,
          dir: false,
          func: false,
          arg: false,
          args: false,
          ext: false,
          dev: false,
        }
      }
    ],
    "unicorn/explicit-length-check": "off",
    "unicorn/no-array-reduce": "off",
  }
};
