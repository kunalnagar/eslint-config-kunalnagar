# ⚛️ eslint-config-kunalnagar

![CircleCI](https://img.shields.io/circleci/build/github/kunalnagar/eslint-config-kunalnagar/develop?token=6961e38f0ab710cad0cbba48bf771ee3bdb2e225) [![npm](https://img.shields.io/npm/v/eslint-config-kunalnagar?color=blue)](https://www.npmjs.com/package/eslint-config-kunalnagar)

An ESLint shareable config that lints React projects with the following configuration:

- ESLint
- Prettier
- React
- TypeScript

## 🛠 Installation

### Step 1

Add the package to your `devDependencies`:

```
$ npm install eslint-plugin-kunalnagar --save-dev
```

### Step 2

Install the `peerDependencies` using:

```
npx install-peerdeps eslint-config-kunalnagar --dev
```

## 💻 Usage

Add it to the `extends` section of your `.eslintrc` configuration file.

```json
{
  "extends": ["eslint-config-kunalnagar"]
}
```

## 💼 Optional

If you want you can configure/override rules as well:

```json
{
  .
  ...
  ....
  "overrides": {
    "override-rule-name": "override-rule-option"
  },
  "rules": {
    "rule-name": "rule-option"
  }
}
```

## 👨‍💻 Support

Please create a new issue [here](https://github.com/kunalnagar/eslint-config-kunalnagar/issues).
