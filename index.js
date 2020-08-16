module.exports = {
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  // eslint-plugin-react-app adds their rules to overrides, so in order to
  // override them, we need to use overrides as well
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        /**
         * TODO
         * - When CRA supports typescript-eslint 1.7.0:
         *   '@typescript-eslint/explicit-member-accessibility': [
         *     'error',
         *     'no-public',
         *   ],
         */
        '@typescript-eslint/camelcase': [
          'error',
          {
            ignoreDestructuring: true,
            properties: 'never',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/generic-type-naming': [
          'error',
          '^T[A-Z][a-zA-Z]+$',
        ],
        '@typescript-eslint/interface-name-prefix': ['error', 'always'],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    // Disabled because this flags styled-components multiline template literals
    'no-unexpected-multiline': 'off',
    'prefer-const': 'warn',
    'react/jsx-handler-names': 'error',
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'instance-variables',
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],
  },
}
