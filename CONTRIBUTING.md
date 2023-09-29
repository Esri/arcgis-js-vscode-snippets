# Contributing guidelines

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** 

- [I want to contribute, what should I work on?](#i-want-to-contribute-what-should-i-work-on)
- [Getting a development environment set up](#getting-a-development-environment-set-up)
- [Adding a new snippet](#adding-a-new-snippet)
- [Conventions](#conventions)
  - [`prefix`](#prefix)
  - [`name`](#name)
  - [`description`](#description)
  - [`body`](#body)
- [Pull request](#pull-request)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## I want to contribute, what should I work on?

You can help mostly by:

* Adding ideas for snippets using the [snippet builder](https://esri.github.io/arcgis-js-vscode-snippets/builder/).
* Requesting updates for existing snippets by creating a [Enhancement issue](https://github.com/Esri/arcgis-js-vscode-snippets/issues/new?assignees=&labels=type%2Fenhancement%2C0+-+new%2Cneeds+triage&projects=&template=enhancement.yml).
* Reporting problems by creating a [Bug issue](https://github.com/Esri/arcgis-js-vscode-snippets/issues/new?assignees=&labels=type%2Fenhancement%2C0+-+new%2Cneeds+triage&projects=&template=bug.yml).
* Working on the issues marked as `help wanted`. There is also a `good first issue` label if you are just getting started.
    * Comment on the issue and check if any additional context is needed before you start working. This will also help everyone knows that you are already working on it.
* Sharing your own list to the [community snippets](https://github.com/Esri/arcgis-js-vscode-snippets#community-snippets)

## Getting a development environment set up

> **Note**: to avoid conflicts, we do not recommend editing the local installation of the plugin placed in (`~/.vscode/extensions/esri.arcgis-jsapi-snippets-version`)

**Steps:**

1. In VSCode show command palette pressing: `Cmd + Shift + P` (Windows: `Ctrl + Shift + P`) then type/select `Preferences: Configure User Snippets`.
2. Select your preferred option, `New Global Snippets file...` or the folder you want to place the snippets file.
3. Depending on the type of snippet you want to add, you need to type: `html.json`, `javascript.json`, `json.json`, `typescript.json` or `typescriptreact.json.`
4. Now you can test it there. You will need to use the command palette again but instead, type `Developer: Reload Window` for VSCode to recognize the new snippet.

## Adding a new snippet

We accept different type of snippets:

* Initialization of classes. (E.g. `new FeatureLayer({ ... })`).
* JS objects with constructor properties (`{ url: ... }`).
* Common procedures (E.g. query a layer, disable navigation, project a geometry, ...).
* Enumeration of possible values (E.g: basemap styles, renderer and symbol types, ...).

Consider using the [snippet builder](https://esri.github.io/arcgis-js-vscode-snippets/builder/) to validate your snippet, and please make sure it follows the [conventions](#conventions).

## Conventions 

### `prefix`

* Avoid acronyms (like `sms` for `SimpleMarkerSymbol`)
* Use camelcase (not [snake_case](https://en.wikipedia.org/wiki/Snake_case), UPPERCASE, etc.)
* Per snippet type:
    * **Class properties objects**: add the suffix "Props".
    * **Class constructors**: match JS SDK capitalization.

> If you want to suggest a change, please [check the issue #10](https://github.com/Esri/arcgis-js-vscode-snippets/issues/10). 

### `name`

* Start your sentence with capitals (do not capitalize, uppercase)
* Use plain english using spaces as needed (don't use [camelCase](https://en.wikipedia.org/wiki/Camel_case), [snake_case](https://en.wikipedia.org/wiki/Snake_case), [PascalCase](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#pascal-case), or [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case)).
* Keep the name short as possible (< 35 characters) to avoid ellipsis ("...").

> If you want to suggest a change, please [check the issue #20](https://github.com/Esri/arcgis-js-vscode-snippets/issues/20). 

### `description` 

* It should be a proper description of what the snippet does, and reuse text from the API reference whenever possible.
* If it is a snippet related to a class/module include the AMD and ESM paths. For example: `Convert a geometry from Web Mercator units (wkid: 3857) to geographic units (wkid: 4326). AMD path:  esri/geometry/support/webMercatorUtils | ESM path: @arcgis/core/geometry/support/webMercatorUtils.js`

> If you want to suggest a change, please [check the issue #21](https://github.com/Esri/arcgis-js-vscode-snippets/issues/21). 

### `body`

> If you want to suggest a change, please [check the issue #19](https://github.com/Esri/arcgis-js-vscode-snippets/issues/19). 

#### 1) Use `\t` for tabs (do not use spaces)

**Example:**

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

#### 2) Don't add comments in your snippets

**Example:**

```js
// queries all features in the layer
myLayer.queryFeatures().then(results => {
        // queries features and returns a FeatureSet
    })
```

#### 3) Keep snippets small

Try not to instantiate more than one class whenever possible. Keeping snippets small helps make them more reusable. So instead of doing this:

**Example:**

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

#### 4) Conventions for constructor properties

* Sort properties by alphabetical order. 
* Include what you think are the most common properties.
* If a property expects another instance of class, add the name of the snippet (if it exists).
* When a property support multiple value types, add just a placeholder. 

**Example:**

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

#### 5) After a class initialization, don't assign it to a variable

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

#### 6) For inherited methods, try to make generic snippets.

For methods like [fromJSON()](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#methods-summary), which is inherited in many classes, for example: SimpleRenderer, UniqueValueRenderer, HeatmapRenderer, ... do something like this:

```js
${1|Simple,UniqueValue,ClassBreaks,Dictionary,DotDensity,Heatmap|}Renderer.fromJSON(json)
```

## Commit message format

This project do not strictly follows [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), but we will use the format `<type>: description [optional #issue-number]` to generate the changelog. Be sure to provide clear and sufficient information in commit messages. 

For `<type>` you should use:

* **feat**: A new snippet or feature
* **fix**: A bug fix with the snippet
** **docs**: Documentation only changes (changes in markdown)
* **style**: Changes that do not affect the meaning of the code (conventions, white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature

`description`:

* The subject contains succinct description of the change
* use the imperative, present tense: "change" not "changed" nor "changes"
* do not capitalize first letter
* do not place a period . at the end
* entire length of the subject must not go over 50 characters
* describe what the commit does, not what issue it relates to or fixes
* **be brief, yet descriptive** - we should have a good understanding of what the commit does by reading the subject

Examples:
`style: apply prefix conventions to all snippets #30`
`doc: update contributing guidelines and minor conventions changes #37`

## Pull request

Before each PR follow these steps:

1. Update the file in the [snippets folder](./snippets) (respects the alphabetical order).
2. Submit your PR.
    * [Link your PR to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) if it exists. Use a supported keyword in the pull request description. Ex."`Closes #10`" or "`Fixes Esri/arcgis-js-vscode-snippets#10`".

## Additional resources

- [Visual Studio Code Snippets Builder](https://esri.github.io/arcgis-js-vscode-snippets/builder).
- Visual Studio Code official documentation:
    - [Editor > Languages > JavaScript > IntelliSense](https://code.visualstudio.com/docs/languages/javascript#_intellisense).
    - [Editor > User guide > Snippets > Snippets syntax](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax).
    - [API > Get started > Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension).
