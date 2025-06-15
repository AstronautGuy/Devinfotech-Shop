import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // ⬇️ THIS BLOCK is needed to enable disable-comments
    linterOptions: {
      allowInlineConfig: true,
      reportUnusedDisableDirectives: false,
    },
  },
];

export default eslintConfig;
