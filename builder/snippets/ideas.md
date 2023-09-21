Ideas for snippets:

- [JSAPI reference & Guides & samples](https://developers.arcgis.com/javascript/latest/)
- [Documentation guides & tutorials](https://developers.arcgis.com/documentation/mapping-apis-and-services/)
- Esri netherlands
- Developer Support web

**Snippet types:**

- Config
- Programming patterns
- Contructros & JSON Objects (Autocast)
- Enums
- Programming patterns: (watch, fromJSON, ...)

-> https://hhkaos.github.io/vscode-snippets-builder/#

---

# Basics

Config ArcGIS API Key -> esriConfig.apiKey
Map -> map <- add: ground: "world-elevation"?
Load a new MapView (2D) -> mapView
CreateWebMap -> webmap
Load a new Graphic -> graphic
Load a new SceneView (3D) -> SceneView
CreateWebScene -> webscene
SpatialReference constructor props -> spatialReference
Disable view navigation -> disableNavigation
View constraints -> limitViewExtent

# Layers

Load a new FeatureLayer -> featureLayer
Load a new GeoJSONLayer -> geojsonLayer
Load a new GraphicLayer -> graphicLayer
Find layer by name -> findLayer
Recover clicked geometries -> hitTest
Create FeatureLayer with client-side -> featureLayerCS
(Feature|CSV|GeoJSON)Layer -> queryLayer
(Feature|CSV|GeoJSON|Scene|Stream)LayerView -> queryLayerView
When layer the instance is created -> layerWhen
Load queryable layer -> load(Feature|CSV|GeoJSON|...)Layer <-- ??
FeatureEffect constructor props -> featureEffect
Load tile layer (VectorTileLayer, TileLayer, ..)
?? featureReductionCluster

# Renderers

symbols/SimpleRenderer -> simpleRenderer
UniqueValueRenderer -> uniqueValueRenderer
ClassBreaksRenderer -> classBreaksRenderer
Generate a DictionaryRenderer -> dictionaryRenderer
Generate a DotDensity Renderer -> dotDensity
HeatmapRenderer -> heatmapRenderer
Init renderer from JSON -> rendererFromJSON
Init renderer using utils -> rendererJsonUtils.fromJSON

# Symbols

SimpleMarkerSymbol -> simpleMarkerSymbol
PictureFillSymbol -> pictureFillSymbol
SimpleLineSymbol-> simpleLineSymbol
SimpleFillSymbol -> simpleFillSymbol
CIMSymbol -> https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-CIMSymbol.html
WebStyleSymbol -> https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-WebStyleSymbol.html
TextSymbol -> https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-TextSymbol.html
WaterSymbol3DLayer -> waterSymbol3dLayer
Init symbol from JSON -> symbolFromJSON
Init symbol using utils -> symbolJsonUtils.fromJSON

# Popups

PopupTemplate constructor props -> popupTemplate
FieldInfo constructor props -> fieldInfo
ExpressionInfo constructor props -> expressionInfo
ActionButton constructor props -> actionButton
Capture custom action click -> popupActionListener
TextContent constructor props -> popupTextContent
MediaContent constructor props -> popupMediaContent
FieldsContent constructor props -> popupFieldsContent
AttachmentsContent constructor props -> popupAttachmentsContent
CustomContent constructor props -> popupCustomContent
Charts constructor props -> chartMediaInfo
ImageMediaInfo constructor props -> imageMediaInfo

# Geometries

Point constructor props -> pointGeometry
Polyline constructor props -> polylineGeometry
Polygon constructor props -> polygonGeometry
Circle constructor props -> circleGeometry
Convert 4326 => 3857 -> geographicToWebMercator
Convert 3857 => 4326 -> webMercatorToGeographic
Init geometry from JSON -> geometryFromJSON
Init geometry using JsonUtils -> geometryJsonUtils.fromJSON

?? extentGeometry
?? multipointGeometry
?? meshGeometry

# Widgets

Sketch widget -> sketch
Search widget -> search
ElevationProfile - elevationProfile
Swipe -> swipe
FeatureForm
Directions
BasemapGallery

# Tasks ??

# SmartMapping

# rest

# Miscelanea

Detect WebGL support -> webgl

async/await function() =
