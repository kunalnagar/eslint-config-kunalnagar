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
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          'no-public',
        ],
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
    project: ['./tsconfig.json', './tsconfig.*.json'],
  },
  rules: {
    'default-case': 'error',
    eqeqeq: 'error',
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-duplicate-imports': 'error',
    'no-lonely-if': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [0, 1, 2],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            message: 'Please import from styled-components/macro.',
            name: 'styled-components',
          },
        ],
        patterns: ['!styled-components/macro'],
      },
    ],
    // Disabled because this flags styled-components multiline template literals
    'no-unexpected-multiline': 'off',
    'no-unneeded-ternary': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',
    'object-shorthand': 'error',
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        next: 'return',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'block-like',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: '*',
        prev: 'block-like',
      },
      {
        blankLine: 'always',
        next: 'break',
        prev: '*',
      },
      {
        blankLine: 'always',
        next: 'continue',
        prev: '*',
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
      },
    ],
    'prefer-const': 'warn',
    'prefer-destructuring': 'error',
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
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
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      {
        natural: true,
      },
    ],
    'sort-vars': 'error',
    yoda: 'error',
  },
}
