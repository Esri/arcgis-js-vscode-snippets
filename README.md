# arcgis-js-vscode-snippets

Collection of Visual Studio Code snippets for common code patterns.

- [HTML snippets](html.json)

  **esri-get-api**: Add the css and javascript for the Esri jsapi from the CDN. This snippet also stubs out the logic point to a folder that will contain the javascript or typescript files used by the app.

- [JavaScript snippets](javascript.json)

  **esri-require**: Simple require example that loads the Map and MapView modules.

  **esri-create-map**: Create a new Map. Contains placeholders to replace the basemap, container value, zoom and center


- [TypeScript snippets](typescript.json)

  **esri-ts-create-map**: Import the map and map view modules then create a new Map and MapView. Contains placeholders for basemap, center and zoom.

  **esri-ts-create-scene**: Import the map and scene view modules then create a new Scene and Scene view. Contains a placeholder for the basemap

  **esri-ts-create-webmap** Import the WebMap and MapView modules and create a new MapView from a web map id. Contains a placeholder for the web map id and map container.

  **esri-ts-create-webscene** Import the WebScene and SceneView modules and create a new SceneView from a portal item id. Contains a placeholder for the item id and map container.

- [JSON snippets](json.json)

  **esri-tsconfig**: Default tsconfig file

  **esri-tsconfig-basic** : Bare bones tsconfig file

- [TSX snippets](typescriptreact.json)

  **esri-widget-starter**: Basic starter for creating an esri widget. Contains placeholders for the widget name and default css class name.

  **esri-renderable-property** : Add a renderable property. Contains placeholder for the property name.

  **esri-constructor** : Add a constructor

## Resources

- [ArcGIS for JavaScript API Resource Center](http://help.arcgis.com/en/webapi/javascript/arcgis/index.html)
- [Visual Studio Code Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_add-snippets-from-the-marketplace)
- [VS Code Snippet Generator](https://snippet-generator.app/)
- [twitter@esri](http://twitter.com/esri)

## Issues

Find a bug or want to request a new feature? Please let us know by submitting an issue.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](License.txt) file.
