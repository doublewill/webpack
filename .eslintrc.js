module.exports = {
  extends: "eslint:recommended",
  rules: {
    // enable additional rules
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],

    // override default options for rules from base configurations
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off",
  },
};
