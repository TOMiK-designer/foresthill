import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

const eslintConfig = [
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      // Plain Node launcher scripts — legitimately CommonJS, not part of the TS/React app.
      "scripts/**/*.cjs",
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  eslintPluginPrettier,
  {
    rules: {
      // Legitimate client-only hydration reads (localStorage, matchMedia) on mount;
      // rewriting to useSyncExternalStore is a larger behavioral change than a lint-tooling fix warrants.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
];

export default eslintConfig;
