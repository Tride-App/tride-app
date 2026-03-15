import { defineConfig, globalIgnores } from 'eslint/config'

import nextTs from 'eslint-config-next/typescript'
import nextVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]), {
    rules: {
      // Disable the rule that disallows console statements.
      'no-console': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn', {
          'argsIgnorePattern': '^_|_',
          'vars': 'all',
          'args': 'after-used',
          'ignoreRestSiblings': false,
          'varsIgnorePattern': '^I[A-Z]|^_',
        }
      ],
    },
  }
])

export default eslintConfig
