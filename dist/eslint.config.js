import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
    tseslint.configs.recommended,
    {
        rules: {
            // gave warning on this condition 
            'no-unused-vars': 'warn',
            'no-console': 'warn',
            'no-undef': 'warn',
            'no-redeclare': "error",
            'no-empty-function': "warn",
            "curly": "warn",
            "semi": ['warn', 'always']
        }
    }
]);
