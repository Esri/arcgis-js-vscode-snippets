# Contributing guidelines

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** 

- [How to add new snippets using VS Code **User Snippets**](#how-to-add-new-snippets-using-vs-code-user-snippets)
- [arcgis-jsapi-snippets conventions](#arcgis-jsapi-snippets-conventions)
  - [`prefix` conventions](#prefix-conventions)
  - [`name` conventions](#name-conventions)
  - [`description` conventions](#description-conventions)
  - [`body` conventions](#body-conventions)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to add new snippets using VS Code **User Snippets**

Steps:

1. In VSCode show command palette pressing: `Cmd + Shift + P` (Windows: `Ctrl + Shift + P`) then type/select `Preferences: Configure User Snippets`.
2. Select your preferred option, `New Global Snippets file...` or the folder you want to place the snippets file.
3. Depending on the type of snippet you want to add, you need to type: `html.json`, `javascript.json`, `json.json`, `typescript.json` or `typescriptreact.json.`
4. Now you can test it there. You will need to use the command palette again but instead, type `Developer: Reload Window` for VS Code to recognize the new snippet. Use the additional resources if needed.
5. Whenever you are ready to add it:
    5.1. Add a fork of [this repo](https://github.com/Esri/arcgis-js-vscode-snippets).
    5.1. Update the file in the [snippets](./snippets) (respects the alphabetical order).
    5.2. Update the [CHANGELOG.md](./CHANGELOG.md) file to reflect the changes.
    5.3. Add the info to the [snippets table](./README.md)
    5.4. Submit your PR

> **Note**: to avoid conflicts, we do not recommend to edit the local installation of the plugin placed in (`~/.vscode/extensions/esri.arcgis-jsapi-snippets-version`)

## arcgis-jsapi-snippets conventions

If you want to contribute to this extension, please read and follow this convetions before doing a pull request.

We accept different type of snippets:

* Initialization of classes. (E.g. `new FeatureLayer({ ... })`).
* JS objects with contructor properties (`{ url: ... }`).
* Common procedures (E.g. query a layer, disable navigation, project a geometry, ...).
* Enumeration of possible values (E.g: basemap styles, renderer and symbol types, ...).

> **Note**: You can use the the issue on each section to ask or discuss anything related to these conventions.

### `prefix` conventions

> These [conventions were discussed on issue #10](https://github.com/Esri/arcgis-js-vscode-snippets/issues/10). 

* Try not to use just acronyms (like `sms` for `SimpleMarkerSymbol`)
* If the snippet only contain and object with properties to initialize a class add the suffix "Props".

### `name` conventions

> These [conventions were discussed on issue #20](https://github.com/Esri/arcgis-js-vscode-snippets/issues/20). 

*To be decided*

### `description` conventions

> These [conventions were discussed on issue #21](https://github.com/Esri/arcgis-js-vscode-snippets/issues/21). 

*To be decided*

### `body` conventions

> These [conventions were discussed on issue #19](https://github.com/Esri/arcgis-js-vscode-snippets/issues/19). 

* Use \t instead of spaces. [Example 1](#body-example-1)
* Don't add comments in your snippets. [Example 2](#body-example-2)
* Try to keep snippets small, and try not to instantiate more than one class whenever possible. [Example 3](#body-example-3)
* Conventions about constructor objects: [Example 4](#body-example-4)
    * Sort properties by alphabetical order. 
    * Try to include only the most common properties.
    * If a property expects another instance of class, add the name of the snippet (if it exists).
    * When a property support multiple value types, add just a placeholder. 
* After a class initialization, don't assign it to a variable. [Example 5](body-example-5)
* For inherited methods, try make generic snippets. [Example 6](body-example-6)

#### `body` example 1

```js
{
  "tsconfig-basic": {
    "prefix": "tsConfigBasic",
    "body": [
      "{",
      "\t\"compilerOptions\": {",
      "\t\t\"module\": \"amd\",",
      "\t\t\"sourceMap\": true,",
      "\t\t\"target\": \"es2019\",",
      "\t\t\"esModuleInterop\": true",
      "\t}",
      "}"
    ],
    "description": "Simple TS Config"
}
```

#### `body` example 2

```js
// queries all features in the layer
myLayer.queryFeatures().then(results => {
        // queries features and returns a FeatureSet
    })
```

#### `body` example 3

Keeping snippets small helps make them more reusable. So insted of doing this:

```js
const webmap = new WebMap({
    portalItem: {
        id: "webmap_id"
    }
});

const view = new MapView({
    container: "viewDiv",
    map: webmap
});
```

Try to split it in two:

```js
new WebMap({
    portalItem: {
        id: "webmap_id"
    }
});
```

```js
new MapView({
    container: "viewDiv",
    map: webmap
});
```

#### `body` example 4

```js
new PopupTemplate({
  // ... 
  content: popupContent[] | String | Function | Promise,
  title: "Population in {NAME}",
  // ...
})
```

Observe the [PopupTemplate property "content"](https://developers.arcgis.com/javascript/latest/api-reference/esri-PopupTemplate.html#content) include a list of possible values, and `popupContent` will trigger other snippets like:
`popupCustomContent`, `popupMediaContent`, `popupFieldsContent`, `popupTextContent` and `popupAttachmentsContent`.

#### `body` example 5

Avoid doing this: 

```js
const webmap = new WebMap({
    portalItem: {
        id: "webmap_id"
    }
});
```

Just do this:

```js
new WebMap({
    portalItem: {
        id: "webmap_id"
    }
})
```

#### `body` example 6

For methods like [fromJSON()](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#methods-summary), which is inherited in many classes, for example: SimpleRenderer, UniqueValueRenderer, HeatmapRenderer, ... do something like this:

```js
${1|Simple,UniqueValue,ClassBreaks,Dictionary,DotDensity,Heatmap|}Renderer.fromJSON(json)
```

## Additional resources

- [VS Code Snippet Generator](https://snippet-generator.app/)
- [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- [Your First Extension | Visual Studio Code Extension API](https://code.visualstudio.com/api/get-started/your-first-extension)
- [JS IntelliSense in VSCode](https://code.visualstudio.com/docs/languages/javascript#_intellisense)
- [IntelliSense in VSCode](https://code.visualstudio.com/docs/languages/javascript#_intellisense)