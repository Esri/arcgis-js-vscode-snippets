# Contributing guidelines

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** 

- [Before you get started](#before-you-get-started)
  - [How Visual Studio Intellisense works](#how-visual-studio-intellisense-works)
  - [Project folder structure](#project-folder-structure)
- [I want to contribute, what should I work on?](#i-want-to-contribute-what-should-i-work-on)
- [Suggesting new snippets](#suggesting-new-snippets)
  - [JavaScript and TypeScript snippets](#javascript-and-typescript-snippets)
  - [Other snippets](#other-snippets)
- [Development environment](#development-environment)
- [Add your changes](#add-your-changes)
- [Commit message format](#commit-message-format)
- [Pull request](#pull-request)
- [Conventions](#conventions)
  - [`prefix`](#prefix)
  - [`name`](#name)
  - [`description`](#description)
  - [`body`](#body)
- [FAQ](#faq)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Before you get started

### How Visual Studio Intellisense works

The first thing you should familiarize yourself with, if you have never created a custom snippet in Visual Studio Code, is the most important components that make up Intellisense (intelligent code completion) in Visual Studio Code:

![](./images/vscode-intelisense-components.png)

These fields are shown in the image above: `prefix`, `name`, `description`, and `body`, have to be defined in a JSON object that looks like this:

```json
"Layer View query features": {
"prefix": ["layerView", "layerViewQF"],
"body": [
	"layerView.queryFeatures().then(function(results){",
    "\tconsole.log(results.features);",
    "});",
],
"description": "Get features in the layer"
}
``` 

Where:
* "Layer View query features": is the snippet name. It is displayed via IntelliSense if no `description` is provided
* `prefix` defines **one or more** trigger words that display the snippet in IntelliSense. Substring matching (fuzzy search) is performed on prefixes, that's why in this case, "lq" matched "layerViewQF"
* `body` is one or more lines of content, which will be joined as multiple lines upon insertion. Newlines and embedded tabs will be formatted according to the context in which the snippet is inserted.
* `description` is a description of the snippet displayed by IntelliSense.

> **Note**: there is another optional component ([scope](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-scope)) that can be used to specify in which context ([language](https://code.visualstudio.com/docs/languages/identifiers#_known-language-identifiers)) the snippet is relevant.

To improve accessibility and usability, Visual Studio Code have a special syntax that can be used inside the `body`, for example [placeholders](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_placeholders), and [choices](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_choice):
![IPlaceholders and Choices](./images/places-and-choices.png) 

Later on, we will see in which file(s) we will have to add this code and the user interface we provide to facilitate the creation of the snippet code.

### Project folder structure

The most relevant files and folders in this repository are:

* **[.vscode/](./.vscode/)**: the most important file in this folder is `development.code-snippets` that you will use to test the snippets you will contribute.
* **[builder/](./builder/)**: this folder include the code of the [Snippets Builder  application](https://esri.github.io/arcgis-js-vscode-snippets/builder/).
* **[dev/](./dev)**: this folder contains the files to help you during your development proccess, and the instructions on how to use them.
* **[images/](./images/)**: contains the assets being used in the README files as well as the icon being use in the Visual Studio Code marketplace.
* **[snippets/](./snippets/)**: this folder have all the available snippets within the official extension that is published (defined in the [package.json file](./package.json)).
* **[CHANGELOG.md](./CHANGELOG.md)**: this file keeps a log or record of all notable changes made to the project.

## I want to contribute, what should I work on?

You can help mostly by:

* **Adding ideas for snippets** using the [snippet builder](https://esri.github.io/arcgis-js-vscode-snippets/builder/). If you are planning to do so, check [Suggesting new snippets](#suggesting-new-snippets).
* **Requesting enhancements** for existing snippets by creating a [Enhancement issue](https://github.com/Esri/arcgis-js-vscode-snippets/issues/new?assignees=&labels=type%2Fenhancement%2C0+-+new%2Cneeds+triage&projects=&template=enhancement.yml).
* **Reporting problems** by creating a [Bug issue](https://github.com/Esri/arcgis-js-vscode-snippets/issues/new?assignees=&labels=type%2Fenhancement%2C0+-+new%2Cneeds+triage&projects=&template=bug.yml).
* **Working on the issues** marked as `help wanted`. There is also a `good first issue` label if you are just getting started.
    * Comment on the issue and check if any additional context is needed before you start working. This will also help everyone knows that you are already working on it.
* **Sharing your own list of snippets** to the [community snippets](https://github.com/Esri/arcgis-js-vscode-snippets#community-snippets)

## Suggesting new snippets

If you plan to propose new snippets, this section contains an overview of the main type of snippets this extension contains for each language, but if you have any another idea(s), do not hesitate to share them.

### JavaScript and TypeScript snippets

The list below summarize the main type of snippets within [snippets/javascript.json](./snippets/javascript.json), [snippets/typescript.json](./snippets/typescript.json), and [snippets/typescriptreact.json](./snippets/typescriptreact.json).

**1) Initialization of classes.** 

Instantiate an object of a new class like MapView, FeatureLayers, widgets (e.g. Search widget with multple configurations: multiple sources, custom sources, ...).

Examples: `FeatureLayerClientSide`

```js
new FeatureLayer({
    fields: [{
        name: "OBJECTID",
        type: "oid"
    }, {
        name: "${1:url}",
        type: "string"
    }],
    objectIdField: "OBJECTID",
    popupTemplate: {
        content: "${2:<img src='{url}'>}"
    },
    renderer: ${3:Renderer},
    source: ${4:graphics}, 
});
```

**2) JS objects with constructor properties**
 
JavaScript objects to facilitate class configuration:

Examples: `featureReductionClusterProps`

```js
{
    type: "cluster",
    clusterMaxSize: ${1:37.5},
    clusterMinSize: ${2:16.5},
    clusterRadius: ${3:60},
    labelingInfo: ${4:LabelClass},
    labelsVisible: true,
    popupEnabled: true,
    popupTemplate: ${5:PopupTemplate}
}
```

**3) Common procedures and programming patterns**

Like query a layer, disable navigation, project a geometry, ...

Example: `queryLayerView`

```js
view.whenLayerView(${1:fl}).then(function (layerView) {
    layerView.queryFeatures().then(function (results) {
        console.log(results.features);
    });
});
```
**4) Enumeration of possible values**

Snippets to help choosing between multiple enumerations, like [basemap styles](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html#basemap), [renderer types](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#type), [symbol types](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html#type), [layer types](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#type), ... 

Example: `basemapsWithAPIKeys`

```
${1|arcgis-imagery,arcgis-imagery-standard,arcgis-imagery-labels,arcgis-light-gray,arcgis-dark-gray,arcgis-navigation,arcgis-navigation-night,arcgis-streets,arcgis-streets-night,arcgis-streets-relief,arcgis-topographic,arcgis-oceans,osm-standard,osm-standard-relief,osm-streets,osm-streets-relief,osm-light-gray,osm-dark-gray,arcgis-terrain,arcgis-community,arcgis-charted-territory,arcgis-colored-pencil,arcgis-nova,arcgis-modern-antique,arcgis-midcentury,arcgis-newspaper,arcgis-hillshade-light,arcgis-hillshade-dark|}
```

### Other snippets

The list of snippets within [html.json](./snippets/html.json), and [json.json](./snippets/json.json) is short, so we encourage you to check yourself.


## Development environment

At this point you are almost ready to start doing your contribution. 

Go to the [dev folder](./dev), and read the instructions to learn how to setup and use your local development environment.

## Add your changes

Do you have your contribution ready? If so, keep reading.

Although it is possible to make your changes directly through the GitHub web interface, we recommend that you add your changes to a local copy of the repository.

**Which branch should I use?**<br>
If your are not doing a lot of changes you can use `master`, otherwise we encourage you to do the changes in a new branch. Branch name convention:
* For changes associated with an issue: `<username>/<issue-description>-<issue-id>`.
* For changes without an associated issue: `<username>/<issue-description>`.

**Checklist before doing a Pull Request**<br>
Please ensure that you have completed the following steps before making a PR:

1. Update the corresponding file in the [snippets folder](./snippets). Depending on the type of snippet, you need to will have to modify: `html.json`, `javascript.json`, `json.json`, `typescript.json`, ... 
    1. Make sure your snippet meets [our conventions]((#conventions)).
    2. Make sure snippets are sorted in the alphabetical order, by `name`). Use any [JSON ABC](https://novicelab.org/jsonabc/) **checking "Spare plain Arrays"**.
    3. Validate JSON and indentation with [JSONLint](https://jsonlint.com/).
2. Update the snippets table within the [README.md](./README.md) to reflect the changes.
3. Update the [CHANGELOG.md](./CHANGELOG.md) file to reflect the changes.
4. Commit your changes.

## Commit message format

This project do not strictly follows [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), but we will use the format `<type>: description [optional #issue-number]` to generate the changelog. Be sure to provide clear and sufficient information in commit messages. 

For `<type>` you should use:

* **feat**: A new snippet or feature
* **fix**: A bug fix with the snippet
* **docs**: Documentation only changes (changes in markdown)
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

**Examples:**
* `style: apply prefix conventions to all snippets #30`
* `doc: update contributing guidelines and minor conventions changes #37`

## Pull request

> **Reminder**: before doing a PR, ensure that you have completed the checklist included in [Add your changes](#add-your-changes).

When submitting:
* If you are adding a new snippet, please provide a codepen example to help during the review process.
* If you are working on an issue, remember to [link your PR to it](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue), by use a supported keyword in the pull request description. For example: "`Closes #10`" or "`Fixes Esri/arcgis-js-vscode-snippets#10`".

## Conventions 

### `prefix`

Prefix are the trigger words that display the snippet in the Intellisense:

<img src="./builder/assets/snippet-prefix.png" width="550" alt="Image showing how the prefix shows in VS Code" />

* Avoid acronyms (like `sms` for `SimpleMarkerSymbol`)
* Use camelCase (not [snake_case](https://en.wikipedia.org/wiki/Snake_case), UPPERCASE, etc.)
* Per snippet type:
    * **Class properties objects**: add the suffix "Props".
    * **Class constructors**: match JS SDK capitalization.

> **⚠️ Important**: when changing an exist prefix, or backwards compatibility, if the new prefix is totally different, instead of removing the previous prefix, add a new one (`prefix` support `strings` and `arrays`), but new one as the first element in the array.

**Examples**:
* Class constructors: `SimpleMarkerSymbol`, `MapView`, ...
* Class properties objects: `popupTemplateProps`, `featureReductionClusterProps`...
* Common procedures an enumerations: `basemapsWithAPIKeys`, `findLayerByTitle`, ...

> If you want to suggest a change, please [check the issue #10](https://github.com/Esri/arcgis-js-vscode-snippets/issues/10). 

### `name`

Name is the short description that follows the prefix:

<img src="./builder/assets/snippet-name.png" width="550" alt="Image showing how the name shows in VS Code" />

* Start your sentence with capitals (do not capitalize, uppercase)
* Use plain english using spaces as needed (don't use [camelCase](https://en.wikipedia.org/wiki/Camel_case), [snake_case](https://en.wikipedia.org/wiki/Snake_case), [PascalCase](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference/#pascal-case), or [kebab-case](https://en.wikipedia.org/wiki/Letter_case#Kebab_case)).
* Keep the name short as possible to avoid ellipsis ("..."). Ideally it should be less than 35 characters, but it also depends on the prefix(es) length, so try and adjust it.

**Examples**:
* `City scale 3D callout`
* `Create class breaks renderer`
* `Create 3D extruded polygon symbol`
* `Generate icon Point 3D`

> If you want to suggest a change, please [check the issue #20](https://github.com/Esri/arcgis-js-vscode-snippets/issues/20). 

### `description` 

Description is a long description that precedes the body:

<img src="./builder/assets/snippet-description.png" width="550" alt="Image showing how the description shows in VS Code" />

* It should be a proper description of what the snippet does, and reuse text from the API reference whenever possible.
* For "Initialization of classes" snippets finish with: `AMD path: <path> | ESM path: <path>`
* For "JS objects with constructor properties" finish with: `This snippet is usually used to set the property \"<property-name>\" of a <class-name(s)>`

Examples:
* `Load the config, Map and MapView modules using require.`
* `Use of these basemaps requires a valid ArcGIS Online organizational subscription or an ArcGIS Enterprise license.`
* `Specifies how features are placed on the vertical axis (z). This snippets should be used to set the property "elevationInfo" of a FeatureLayer, CSVLayer, WFSLayer, SceneLayer, StreamLayer, GeoJSONLayer, IntegratedMeshLayer, etc.`
* `Creates the labelingInfo for labels in a layer for 3D maps. It is normally used in the property "labelingInfo[]" of a FeatureLayer, SceneLayer or any layyer with that property within a SceneView. AMD path: esri/layers/support/LabelClass | ESM path: @arcgis/core/layers/support/LabelClass.js`

> If you want to suggest a change, please [check the issue #21](https://github.com/Esri/arcgis-js-vscode-snippets/issues/21). 

### `body`

Body contain the code snippet that will be inserted:

<img src="./builder/assets/snippet-body.png" width="550" alt="Image showing how the body shows in VS Code" />

> If you want to suggest a change, please [check the issue #19](https://github.com/Esri/arcgis-js-vscode-snippets/issues/19). 

#### 1) Use `\t` for tabs (do not use spaces)

> **Note:** You don't have to worry about this if you use the [Snippets Builder](https://esri.github.io/arcgis-js-vscode-snippets/builder/).

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

#### 2) Style guide conventions

Follow the ArcGIS Maps SDK for JavaScript coding conventions define in [github.com/esri/jsapi-resources/.prettierrc.json](https://github.com/Esri/jsapi-resources/blob/main/.prettierrc.json):

* **Plain JavaScript**:
    * Print semicolons at the ends of statements.
    * Always require parentheses around arrow function arguments ([example](https://eslint.org/docs/latest/rules/arrow-parens)).
    * Print spaces between brackets in object literals: true ([example](https://prettier.io/docs/en/options.html)).
    * If at least one property in an object requires quotes, quote all properties.
    *  No [trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas) (final commas)
    * Line length: 120
* **JavaScript React** (JSX):
    * Put the \> of a multi-line JSX element at the end of the last line instead of being alone on the next line (does not apply to self closing elements) ([example](https://prettier.io/docs/en/options.html#deprecated-jsx-brackets)).
    * Line length: 100

We have set [this prettier.io/playground](https://prettier.io/playground/#N4Igxg9gdgLgprEAuEIA0IIAcYEtoDOyoAhgE5kQDuACuQkSiQDZUkCeRGARmSWAGs4MAMokAtnAAyuKHGQAzFgTg8+g4SKz9ZAc2QwyAV1UgV43AeOmCe5nACKRiPEXLTAKwIAPEXcfOrkhKzCoYAI6BcDSUWIzghLgE8IgYhiS4zHoAwhDi4iTIIFDQ8hi2ULr2AIIwhrjcRvA0cGQycm6hpgAWMOLMAOrduPAE2mBwIgwjuABuI+xFYARcILMmAJJQACYIomBkuDjVOyIw7PadYSBYlCoDfFhFt3AqZLNlILJvMDEkugUrqZtGQ3kVuCRuHBmOgbodYANcNsYN1kABGABMAAYMGQ4JFcHi-gDCsF3GlIYjkaikBiMEYVAAVSGMELXODiKHbXbbKQkSpGf5wABiEDIBTqeiKJCaEBAAF95UA) to help you beautify your code.

#### 3) Don't add comments in your snippets

**Example:**

```js
// queries all features in the layer
myLayer.queryFeatures().then(results => {
        // queries features and returns a FeatureSet
    })
```

#### 4) Keep snippets small

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

#### 5) Conventions for constructor properties

* Sort properties by alphabetical order. 
  * For "JS objects with constructor properties" `type` is an exception. It can be set as the first one.
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

#### 6) After a class initialization, don't assign it to a variable

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

#### 7) For inherited methods, try to make generic snippets

For methods like [fromJSON()](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html#methods-summary), which is inherited in many classes, for example: SimpleRenderer, UniqueValueRenderer, HeatmapRenderer, ... do something like this:

```js
${1|Simple,UniqueValue,ClassBreaks,Dictionary,DotDensity,Heatmap|}Renderer.fromJSON(json)
```


## FAQ

**I have made a contribution, but I can't find the contribution in the extension deployed in the marketplace. Why?**

The Esri team have to to deploy a new version of the snippet to the Visual Studio Code marketplace in order to make the changes available to every user of the extension.

**Can I modify the local installation of the extension to test my edits?**<br>
To avoid conflicts and overwrites, we do not recommend editing the local installation of your extension placed in your home folder (`~/.vscode/extensions/esri.arcgis-maps-sdk-js-snippets-VERSION_NO`).


## Additional resources

- [Visual Studio Code Snippets Builder](https://esri.github.io/arcgis-js-vscode-snippets/builder).
- Visual Studio Code official documentation:
    - [Editor > Languages > JavaScript > IntelliSense](https://code.visualstudio.com/docs/languages/javascript#_intellisense).
    - [Editor > User guide > Snippets > Snippets syntax](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax).
    - [API > Get started > Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension).
