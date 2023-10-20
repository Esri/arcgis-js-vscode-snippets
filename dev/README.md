# Development environment

To contribute without messing around with other snippets you might use in other projects, this repo provides a project-folder scoped file (`development.code-snippets`) and several playgrounds to help you test the snippets you are going to contribute.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**: 

- [Getting started](#getting-started)
  - [Add a new snippet](#add-a-new-snippet)
  - [Enhance an existing snippet](#enhance-an-existing-snippet)
  - [Test a snippet](#test-a-snippet)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
  - [How do I add placeholders to my snippet?](#how-do-i-add-placeholders-to-my-snippet)
  - [How do I add a dropdown/choices in my snippet?](#how-do-i-add-a-dropdownchoices-in-my-snippet)
  - [Are there other alternatives to use the `development.code-snippets` file?](#are-there-other-alternatives-to-use-the-developmentcode-snippets-file)
  - [Are there other alternatives to use the Snippet Builder to generate JSON code?](#are-there-other-alternatives-to-use-the-snippet-builder-to-generate-json-code)
- [Additional resources](#additional-resources)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting started

First of all, **fork and clone locally** this repository.

### Add a new snippet

* 1\) Within this folder ([dev](./dev)), build a sample app make sure you have tested the code snippet you want to contribute (e.g. [sample-app.html](./sample-app.html)).
* 2\) Generate the [custom snippet code](#what-is-a-custom-snippet-code) using the [VS Code Snippets Builder](https://esri.github.io/arcgis-js-vscode-snippets/builder/).
* 3\) Paste your VS Code Snippets JSON syntax into [../.vscode/development.code-snippets](../.vscode/development.code-snippets).
* 4\) [Test the snippet](#test-a-snippet)


### Enhance an existing snippet

To be able to test your modifications, we encourage you to follow these steps, even if you are doing a simple change to the `prefix`, `name`, or `description`. 

* 1\) Open the file (from the [snippets folder](../snippets/)) that contains the [custom snippet code](#what-is-a-custom-snippet-code) you are going to enhance, **find it and copy it**.
* 2\) Paste the snippet into [../.vscode/development.code-snippets](../.vscode/development.code-snippets).
* 3\) Do the modifications there. Use the [snippets builder](https://esri.github.io/arcgis-js-vscode-snippets/builder/), and add [placeholders](#are-there-other-alternatives-to-use-the-developmentcode-snippets-file), [choices](#how-do-i-add-a-dropdownchoices-in-my-snippet), ... as needed.
* 4\) [Test the snippet](#test-a-snippet)

### Test a snippet

* 1\) Open in VS Code a file and start typing your snippet prefix. You can use any of the provided files within the folder [playgrounds](./playgrounds/) to test it. Choose the right one based on the type of snippets you want to contribute:
  * **index.html** for HTML, CSS and JavaScript snippets.
  * **config.json** or **data.geojson** for JSON snippets.
  * **main.scss** for SCSS snippets.
  * **index.ts** for TypeScript snippets.
  * **index.tsx** for TypeScript React snippets.
* 2\) If everything works as expected, follow the [steps to add your changes](https://github.com/Esri/arcgis-js-vscode-snippets/blob/master/CONTRIBUTING.md#add-your-changes).


## Troubleshooting

If your code snippet doesn't show up:
* Make sure the developmnet.code-snippets is still a valid JSON. You can test it with [JSONLint](http://jsonlint.com/) (but **remember to remove comments**).
* Use the command palette (Mac: `Cmd + Shift + P` | Windows/Linux: `Ctrl + Shift + P`) and type Developer: `Reload Window`.

## FAQ

### How do I add placeholders to my snippet?

You have to use the syntax `${1:default_value}`. Example:

```json
{
  "Load a new MapView (2D)": {
    "prefix": "mapView",
    "body": [
      "new MapView({",
      "\tcontainer: \"${1:viewDiv}\",",
      "\tmap: ${2:map},",
      "});"
    ]
  },
}
```
Learn [more about placeholders](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_placeholders).

### How do I add a dropdown/choices in my snippet?

You have to use the syntax `${1|one,two,three|}`. Example:

```json
  "Get the API from the CDN": {
    "prefix": "getApi",
    "body": [
      "<link rel=\"stylesheet\" href=\"https://js.arcgis.com/${1|4.20,4.19,4.18,4.17,4.16,1.15,4.14|}/esri/css/main.css\">",
      "<script src=\"https://js.arcgis.com/${2|4.20,4.19,4.18,4.17,4.16,4.15,4.14|}\"></script>"
    ],
  },
```

Learn [more about choices](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_choice).

### Are there other alternatives to use the `development.code-snippets` file?
1. In VSCode show command palette pressing: `Cmd + Shift + P` (Windows: `Ctrl + Shift + P`) then type/select `Preferences: Configure User Snippets`.
2. Select your preferred option, `New Global Snippets file...` or the folder you want to place the snippets file.

### Are there other alternatives to use the Snippet Builder to generate JSON code?
Yes, you can use any another extension, for example, the [Snippet Generator](https://marketplace.visualstudio.com/items?itemName=wenfangdu.snippet-generator).

## Additional resources

Learn more about:
* [VS Code Snippets JSON syntax](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax)
* [Snippets scope (language and project scopes)](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-scope)


