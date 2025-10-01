# Change Log

All notable changes to the "arcgis-jsapi-snippets" extension will be documented in this file.

## [Version 1.0.0]

- Initial release

## [Version 1.1.0]

- Added versions 4.13 and 4.14 to the list of versions for the getAPI snippet.

## [Version 1.1.1]

- Add latest versions to the getAPI snippet
- Fix typo in package.json
- Update tsconfig snippet to include `importHelpers` and `moduleResolution`

## [Version 1.1.2]

- Updates JavaScript and TypeScript files with new snippets for `SimpleMarkerSymbol`, `PictureMarkerSymbol`, `SimpleLineSymbol`, `SimpleFillSymbol`, `PictureFillSymbol`, `WaterSymbol3DLayer` and `FeatureReductionCluster`
- Added new `pattern` property on `FillSymbol3DLayer` in both JavaScript and TypeScript snippets
- Fixed missing comma in JavaScript `edges` snippet
- Added latest versions to the getAPI snippet

## [Version 1.1.3]

- Adding `basemapStyle` snippet
- Added latest versions to the getAPI snippet

## [Version 1.1.4]

- Added React Map snippet
- Added Calcite snippet
- Added latest versions to the getAPI snippet

## [Version 1.1.5]

- Removed Calcite snippet
- Added `requireApiKeys` snippet
- Added `basemapsWithoutAPIKeys` snippet
- New prefixes added to existing snippets to match conventions:
  - `map` -> `MapViewMap`
  - `scene` -> `SceneViewMap`
  - `webmap` -> `MapViewWebMap`
  - `webscene` -> `SceneViewWebScene`
  - `simpleRenderer` -> `simpleRendererProps`
  - `uniqueValueRenderer` -> `uniqueValueRendererProps`
  - `classBreaksRenderer` -> `classBreaksRendererProps`
  - `sizeVar` -> `sizeVisualVariableProps`
  - `colorVar` -> `colorVarProps`
  - `clusterConfig` -> `featureReductionClusterProps`
  - `labeling2d` -> `LabelClass2D`
  - `labeling3d` -> `LabelClass3D`
  - `simpleMarkerSymbol` -> `simpleMarkerSymbolProps`
  - `pictureMarkerSymbol` -> `pictureMarkerSymbolProps`
  - `simpleLineSymbol` -> `simpleLineSymbolProps`
  - `simpleFillSymbol` -> `simpleFillSymbolProps`
  - `pictureFillSymbol` -> `pictureFillSymbolProps`
  - `icon` -> `pointSymbol3dIconProps`
  - `line` -> `lineSymbol3DProps`
  - `path3d` -> `lineSymbol3DPathProps`
  - `fillMesh3d` -> `fillMesh3dProps, meshSymbol3DProps`
  - `waterSymbol3dLayer` -> `waterSymbol3dLayerProps`
  - `extrudePolygon3d` -> `polygonSymbol3DExtrudeProps`
  - `edges` -> `edges3DProps`
  - `calloutSmall` -> `callout3DSmallProps`
  - `calloutLarge` -> `callout3DLargeProps`
  - `elevationInfo` -> `elevationInfoProps`
  - `background` -> `sceneViewEnvironmentProps`
  - `basemapStyle` -> `basemapsWithAPIKeys`

## [Version 1.1.6]

- Added `searchWidget` snippet
- Added `searchWidgetWithCustomSources` snippet
- Added `searchWidgetWithSources` snippet

## [Version 1.1.7]

- Added `CircleGeometry` snippet
- Added `ExtentGeometry` snippet
- Added `MeshGeometry` snippet
- Added `MultipointGeometry` snippet
- Added `PointGeometry` snippet
- Added `PolylineGeometry` snippet
- Added `PolygonGeometry` snippet
- Added `SpatialReferenceGeometry` snippet
- Updated the getApi snippet to use the selected version for both the css and javascript to prevent having to choose the same version twice.
- Added `getApiPlusComponents` snippet.
- Added `addArcgisMapComponent`snippet
