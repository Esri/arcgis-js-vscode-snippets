# Contributing guidelines

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

# How to add new snippets using VS Code **User Snippets**

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

# Additional resources

- [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- [Your First Extension | Visual Studio Code Extension API](https://code.visualstudio.com/api/get-started/your-first-extension)
- [JS IntelliSense in VSCode](https://code.visualstudio.com/docs/languages/javascript#_intellisense)
- [IntelliSense in VSCode](https://code.visualstudio.com/docs/languages/javascript#_intellisense)