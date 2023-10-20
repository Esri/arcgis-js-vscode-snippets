# arcgis-js-vscode-snippets

Visual Studio Code extension that contains a collection of snippets for common code patterns with [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/).


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  

- [Get started](#get-started)
  - [Prerequisites](#prerequisites)
  - [Usage](#usage)
  - [Configuration](#configuration)
- [Snippets available](#snippets-available)
  - [HTML snippets](#html-snippets)
  - [JavaScript snippets](#javascript-snippets)
  - [TypeScript snippets](#typescript-snippets)
  - [JSON snippets](#json-snippets)
  - [TSX snippets](#tsx-snippets)
- [Community snippets](#community-snippets)
- [Issues](#issues)
- [Contributing](#contributing)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Get started

### Prerequisites

To use this extension you will need to install:
1. [Visual Studio Code](https://code.visualstudio.com/download) (version 1.35 or higher).
2. The extension. There are two possibilities:
    - From the [Visual Studio Code marketplace](https://marketplace.visualstudio.com/items?itemName=Esri.arcgis-maps-sdk-js-snippets).
    - Using the ***[Install from VSIX](https://code.visualstudio.com/docs/editor/extension-marketplace#_install-from-a-vsix)*** command in Visual Studio Code then import the [arcgis-jsapi-snippets-1.0.0.vsix](./arcgis-jsapi-snippets-1.0.0.vsix) file.

### Usage

After installing, there are two ways to use it:

**Option 1**) Using [built-in VS Code Intellisense](https://code.visualstudio.com/docs/languages/javascript#_intellisense):
1. Create an empty project with an empty `index.js` file.
2. Start typing one the prefix of one the [available code snippets](#snippets-available). (e.g. `elev`).
3. Select the snippet by pressing `Tab` or `Enter` key.
4. If there are values highlighted in gray, you can move between them using `Tab` (forward) and `Shift+Tab` (backwards).

<img src="./images/code-snippets.gif" width="400px" alt="Intelissense demo"/>

> **Troubleshooting:**<br>
> If the Intellisense doesn't work:
> - Make sure to have `"editor.tabCompletion": "on"` in the settings (`Preferences` > `Open Settings(JSON)`)
> - If pressing Tab doesn't work then you might have several snippets with the same prefix. Press `Ctrl-Space` (`Cmd-Space` on mac) to select the one you need.
>
> Read more about this feature in the official [VSCode documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets).

---

**Option 2**) Installing the [Snippet Viewer](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.snippets-viewer) extension

This extension adds a new option to the activity bar that lets you quickly browse and insert built-in and custom snippets:

<img src="./images/snippets-viewer.gif" width="700px" alt="Intelissense demo"/>

## Snippets available

### [HTML snippets](snippets/html.json)

| Prefix | Description                                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| getApi | Add the CSS and JavaScript for the Esri ArcGIS Maps SDK for JavaScript from the CDN. This snippet also stubs out the package paths. |
| calcite| Add the CSS and JavaScript for the Esri Calcite Design System from the CDN. |

### [JavaScript snippets](snippets/javascript.json)

| Prefix                 | Description                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| require                | Load the Map and MapView modules using require 
| requireApiKeys                | Load the config, Map and MapView modules using require require                                                                                                                                                                 |
| MapViewMap                    | Create 2D MapView using a Map                                                                                                                      |
| SceneViewMap                  | Create 3D SceneView using a Map.                                                                                                                |
| MapViewWebMap                 | Create 2D map using a WebMap and a portalItem.                                                                                                              |
| SceneViewWebScene               | Create 3D map using a WebScene and a portalItem..                                                                                                         |
| addLayerFromPortalItem | Add a new layer to the map using a portal item id. Contains a placeholder for the portal item id.                                                                                                             |
| simpleRendererProps                 | Renders all features in a Layer with one Symbol. This snippet is usually used to set the property \"renderer\" of a FeatureLayer, SceneLayer, MapImageLayer, CSVLayer, GeoJSONLayer, OGCFeatureLayer, WFSLayer, or StreamLayer..                                                                                                                                            |
| uniqueValueRendererProps            | Generate a unique value renderer. This snippet is usually used to set the property \"renderer\" of a FeatureLayer, SceneLayer, MapImageLayer, CSVLayer, GeoJSONLayer, OGCFeatureLayer, WFSLayer, StreamLayer, ImageryLayer, or ImageryTileLayer                     |
| classBreaksRendererProps            | Generate a ClassBreaksRenderer. This snippet is usually used to set the property \"renderer\" of a FeatureLayer, SceneLayer, MapImageLayer, CSVLayer, GeoJSONLayer, OGCFeatureLayer, WFSLayer, StreamLayer, ImageryLayer, or ImageryTileLayer. |
| sizeVisualVariableProps                | Set size of features based on a numeric value. Creates a SizeVariable with 2 size stops. The axis property is only used in 3D. This snippet is usually used to set the property \"visualVariables[]\" of a renderer.                            |
| colorVarProps               | Generate a ColorVariable with 2 color stops. Used to visualize features along a continuous color ramp based on the values of a numeric attribute field or an expression. This snippet is usually used to set the property \"visualVariables[]\" of a renderer class.                                                               |
| featureReductionClusterProps          | Generates the configuration for clustering in a MapView. This should be set on layers containing point geometry. This snippet is usually used to set the property \"featureReduction\" of a FeatureLayer, CSVLayer, GeoJSONLayer, WFSLayer, or OGCFeatureLayer geometry.                                                                                              |
| LabelClass2D             | Creates the labelingInfo for labels in a layer for 2D maps. It in normally used in the property \"labelingInfo[]\" of a FeatureLayer, CSVLayer, GeoJSONLayer, StreamLayer, OGCFeatureLayer, or WFSLayer in 2D MapViews.                                                                                                                                                             |
| LabelClass3D             | Creates the labelingInfo for labels in a layer for 3D maps. It is normally used in the property \"labelingInfo[]\" of a FeatureLayer, SceneLayer or any layyer with that property within a SceneView.                                                                                                                                                           |
| simpleMarkerSymbolProps                    | Create a SimpleMarkerSymbol for rendering 2D Point geometries with a simple shape and color in either a MapView or a SceneView, but for 3D it is recommended to use PointSymbol3D. This snippet is usually used to set the property \"symbol\" of renderers or individual graphics..                                                                                                                                    |
| pictureMarkerSymbolProps                    | Create a PictureMarkerSymbol, allowing custom image-based markers for points on maps.                                                                                                                                                                   |
| simpleLineSymbolProps                   | Create a SimpleLineSymbol for rendering 2D polyline geometries in a 2D or 3D view, but for 3D it is recommended to use LineSymbol3D. It can be used in several properties like \"symbol\" of renderers or individual graphics, but also \"outline\" of marker and fill symbols.                                                                                                                        |
| simpleFillSymbolProps                    | Create a SimpleFillSymbol for rendering 2D polygon geometries in a 2D or 3D view, but for 3D it is recommended to use PolygonSymbol3D. It can be filled with a solid color, or a pattern. This snippet is usually used to set the property \"symbol\" of renderers or individual graphics..                                                                                                                                      |
| pictureFillSymbolProps                    | CPictureFillSymbol uses an image in a repeating pattern to symbolize polygon features in a 2D MapView. patterns for polygons. This snippet is usually used to set the property \"symbol\" of renderers or individual graphics.                                                                                                                                                                     |
| pointSymbol3dIconProps                   | Generate PointSymbol3D with a IconSymbol3DLayer in a SceneView. Available shapes: circle, square, cross, x, kite, and triangle. This snippet is usually used to set the property \"symbol\" of renderers or individual graphics.                                                                                          |
| lineSymbol3DProps                   | Generate LineSymbol3D with a LineSymbol3DLayer in a SceneView. This snippet is usually used to set the property \"symbol\" of renderers or individual graphics.                                                                                                     |
| lineSymbol3DPathProps                   | Generate LineSymbol3D with a PathSymbol3DLayer. Renders Polyline geometries by extruding a 2D profile along the line. This snippet is usually used to set the property \"symbol\" of renderers or individual graphics.                                               |
| meshSymbol3DProps                   | Generate MeshSymbol3D with a FillSymbol3DLayer in a SceneLayer in a SceneView. This snippet is usually used to set the property \"symbol\" of renderers or individual graphics.                                                                         |
| waterSymbol3dLayerProps                  | WaterSymbol3DLayer is used to render Polygon geometries as realistic, animated water surfaces, therefore it can only be used inside a PolygonSymbol3D. This snippet is usually used to set the property \"symbol\" of renderers or individual graphics.                                                                                  |
| polygonSymbol3DExtrudeProps                | Generate PolygonSymbol3D with a ExtrudeSymbol3DLayer to be used in a SceneView.  It render polygon geometries by extruding them upward from the ground, creating a 3D volumetric object. This snippet is usually used to set the property \"symbol\" of renderers or individual graphics.                                                                                     |                                                                                                            |
| edges3DProps                  | Add edge rendering visualization to existing symbols. Can only be applied to \"edges\" property of FillSymbol3DLayer on MeshSymbol3D or ExtrudeSymbol3DLayer on PolygonSymbol3D.                               |
| callout3DSmallProps           | Generates a Callout3D with a verticalOffset for a city scale level and the callout property. They should be set on the property \"callout\" of PointSymbol3D or LabelSymbol3D.                   |
| callout3DLargeProps           | Generates a Callout3D with a verticalOffset for a world scale level and the callout property. They should be set on the property \"callout\" of PointSymbol3D or LabelSymbol3D.                  |
| elevationInfoProps          | Specifies how features are placed on the vertical axis (z). This snippets should be used to set the property \"elevationInfo\" of a FeatureLayer, CSVLayer, WFSLayer, SceneLayer, StreamLayer, GeoJSONLayer, IntegratedMeshLayer, etc.                                                                           |
| sceneViewEnvironmentProps             | Creates an environment object for changing the background of a scene. This snippet is usually used to set the property \"environment\" of the SceneView.                                                                |
| basemapsWithAPIKeys           | List all available map styles to be used without API keys. Use of these basemaps requires an ArcGIS Developer subscription or a valid ArcGIS Online organizational subscription                   |
| basemapsWithoutAPIKeys           | List all available map styles to be used without API keys. Use of these basemaps requires an ArcGIS Developer subscription or a valid ArcGIS Online organizational subscription                   |

### [TypeScript snippets](snippets/typescript.json)

| Prefix                 | Description                                                                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| map                    | Import the map and map view modules then create a new Map and MapView. Contains placeholders for basemap, center and zoom.                                                                                   |
| scene                  | Import the map and scene view modules then create a new Scene and Scene view. Contains a placeholder for the basemap                                                                                         |
| webmap                 | Import the WebMap and MapView modules and create a new MapView from a web map id. Contains a placeholder for the web map id and map container.                                                               |
| webscene               | Import the WebScene and SceneView modules and create a new SceneView from a portal item id. Contains a placeholder for the item id and map container.                                                        |
| addLayerFromPortalItem | Add a new layer to the map from an ArcGIS Online or Enterprise portal item. Contains a placeholder for the portal item id.                                                                                   |
| simple                 | Generates a SimpleRenderer. Contains a placeholder for the symbol.                                                                                                                                           |
| uniqueValue            | Generates a UniqueValueRenderer. Contains a placeholder for the field, the symbol and it generates a uniqueValueInfos array with placeholers for value, symbol and label for the legend.                     |
| classBreaks            | Generates a ClassBreaksRenderer. Contains a placeholder for the field, the default symbol and it generates a classBreakInfos array with placeholers for minValue, maxValue, symbol and label for the legend. |
| dotDensity            | Generates a DotDensityRenderer. Contains a placeholder for the dotValue, the unit, the field, the color and the label. |
| sizeVar                | Creates a SizeVariable with 2 size stops. The axis property is only used in 3D. It contains placeholders for field, normalizationField, the legend title and the size stop values.                           |
| colorVar               | Creates a ColorVariable with 2 color stops. It contains placeholders for field, normalizationField, the legend title and the color stop values.                                                              |
| clusterConfig          | Generates the configuration for clustering in a MapView. This should be set on layers containing point geometry.                                                                                             |
| labeling2d             | Creates the labelingInfo for labels in a MapView.                                                                                                                                                            |
| labeling3d             | Creates the labelingInfo for labels in a SceneView.                                                                                                                                                          |
| sms                    | Creates a SimpleMarkerSymbol in a MapView. Contains placeholder for style.                                                                                                                                   |
| pms                    | Creates a PictureMarkerSymbol in a MapView.                                                                                                                                                                  |
| sls                    | Creates a SimpleLineSymbol in a MapView. Contains placeholder for style, cap and join.                                                                                                                       |
| sfs                    | Creates a SimpleFillSymbol in a MapView. Contains placeholder for style.                                                                                                                                     |
| pfs                    | Creates a PictureFillSymbol in a MapView.                                                                                                                                                                    |
| iconPoint3d                   | Creates a PointSymbol3D with IconSymbol3DLayer in a SceneView. Contains placeholders for primitive, color and size.                                                                                          |
| objectPoint3d                 | Creates a PointSymbol3D with ObjectSymbol3DLayer in a SceneView. Contains placeholders for primitive, color, height, depth and width.                                                                        |
| line3d                   | Creates a LineSymbol3D with a LineSymbol3DLayer in a SceneView. Contains placeholders for color and size.                                                                                                    |
| path3d                  | Creates a LineSymbol3D with a PathSymbol3DLayer in a SceneView. Contains placeholders for profile, color, width, height, join, cap, anchor and profileRotation.                                              |
| fillPolygon3d                   | Creates a PolygonSymbol3D with a FillSymbol3DLayer in a SceneView. Contains placeholders for style, material color and outline color.                                                                        |
| waterSymbol3dLayer                  | Creates a PolygonSymbol3D with a WaterSymbol3DLayer in a SceneView. Contains placeholder for waterbodySize and waveStrength.                                                                                 |
| extrudePolygon3d                | Creates a PolygonSymbol3D with an ExtrudeSymbol3DLayer in a SceneView. Contains placeholders for material color and size.                                                                                    |
| fillMesh3d             | Creates a MeshSymbol3D with a FillSymbol3DLayer in a SceneView. Contains placeholder for color.                                                                                                              |
| sketchEdges            | Creates SketchEdges3D that can be applied to a FillSymbol3DLayer. Contains placeholders for the color, the size and the extensionLength.                                                                     |
| soildEdges             | Creates SolidEdges3D that can be applied to a FillSymbol3DLayer. Contains placeholders for the color and the size.                                                                                           |
| calloutSmall           | Generates the verticalOffset for a city scale level and the callout property. They should be set on PointSymbol3D or LabelSymbol3D. Contains placeholders for size, color and border color.                  |
| calloutLarge           | Generates the verticalOffset for a globe scale level and the callout property. They should be set on PointSymbol3D or LabelSymbol3D. Contains placeholders for size, color and border color.                 |
| elevationInfo          | Creates an object for elevationInfo to be set on layers. Contains placeholders for mode, offset, arcade driven expression and unit.                                                                          |
| sceneBackground             | Creates an environment object for changing the background of a scene. It should be set on a SceneView and it contains a placeholder for color.                                                               |


### [JSON snippets](snippets/json.json)

| Prefix        | Description           |
| ------------- | --------------------- |
| tsconfig      | Default tsconfig file |
| tsconfigBasic | Simple tsconfig file  |


### [TSX snippets](snippets/typescriptreact.json)

| Prefix             | Description                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| widgetStarter      | Basic starter for creating an esri widget. Contains placeholders for the widget name and default CSS class name. |
| renderableProperty | Add a renderable property. Contains placeholder for the property name.                                           |
| constructor        | Add a constructor        
|reactmap             | Create a react map or scene component                                                                           |

## Community snippets

* [github.com/hhkaos/esri-vscode-snippets](https://github.com/hhkaos/esri-vscode-snippets#readme)

## Issues

If something isn't working the way you expected, please take a look at [previously logged issues](https://github.com/Esri/arcgis-js-vscode-snippets/issues/) first. Have you found a new bug? Want to request an enhancement to an existing snippet? Suggest a new snippet or tool? [Open a new issue](https://github.com/Esri/arcgis-js-vscode-snippets/issues/new/choose), we'd love to hear from you.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](./CONTRIBUTING.md).

### Additional resources

To learn more about **general use of code snippets in Visual Studio Code** read [Visual Studio official documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_create-your-own-snippets).

If you create your own custom code snippets to work with the ArcGIS Maps SDK for JavaScript, please consider [contributing to this repository](#contributing) or join [other developers sharing their snippets](#community-snippets).

## License

Copyright 2023 Esri

The snippets are licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [license.txt](License.txt) file.

Information on the ArcGIS Maps SDK for JavaScript licensing can be found here: https://developers.arcgis.com/javascript/latest/guide/licensing/.

