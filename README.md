# Tidy

A JSDoc3 template

Documentation doesn't have to be ugly and boring.
 Based on the default JSDoc 3 template, which uses:
- [the Taffy Database library](http://taffydb.com/)
- [Underscore Template library](http://underscorejs.org/)

## Usage

#### 1. Add Dependency

To use this jsdoc template in a project, first install the package:

```
npm install --save-dev tidy-jsdoc
```

#### 2. Configure JSDoc

Then in your `jsdoc.json` configuration file, change the template options to:

```json
"opts": {
  "template": "node_modules/tidy-jsdoc"
}
```

#### 3. Generate Docs

Then generate documents refering this template:

```
jsdoc -c jsdoc.json
```

## Development

This is a bootstrap based template, so when working with sass, you can automatically build the CSS like so.

```
npm run sass:watch
```
