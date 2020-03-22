# eslint-plugin-kunalnagar

An ESLint + Prettier + React base configuration

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-kunalnagar`:

```
$ npm install eslint-plugin-kunalnagar --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-kunalnagar` globally.

## Usage

Add `kunalnagar` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "kunalnagar"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "kunalnagar/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





