// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [ "expo", "prettier" ],
  plugins: [ "prettier" ],
  rules: {
    'prettier/prettier': 'off',
    'no-unused-vars': 'on',
    "react/jsx-filename-extension": [ 1, { extensions: [ ".js", ".jsx" ] } ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "no-console": "warn",
  },
};
