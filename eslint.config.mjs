// Coding standards => https://gitlab.com/ast-uk/novus/frontend/-/wikis/Code-Standards
// https://github.com/jsx-eslint/eslint-plugin-react

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['**/node_modules/**', '**/dist/**', '.yarn/**'],
  },
  ...tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    // React
    {
      plugins: {
        react: reactPlugin,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    // Typescript
    {
      rules: {
        // unused variables are not allowed, variables can be ignored by using the following pattern (_unusedVar // No error)
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            caughtErrorsIgnorePattern: '^_',
            destructuredArrayIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
          },
        ],
        // `any` type is allowed (let empty: any)
        '@typescript-eslint/no-explicit-any': 'off',
        // Expressions are allowed (boolean ? someFn() : someOtherFn())
        '@typescript-eslint/no-unused-expressions': 'off',
      },
    },
    // Disables rules that are incompatible with prettier
    eslintConfigPrettier
  ),
];
