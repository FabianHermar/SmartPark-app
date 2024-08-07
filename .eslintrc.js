// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [ "expo", "prettier" ],
  plugins: [ "prettier" ],
  rules: {
		'prettier/prettier': 'off',
		"react/jsx-filename-extension": 'off',
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "no-console": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
  },
};
