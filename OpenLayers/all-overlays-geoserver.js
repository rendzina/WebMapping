// A1136 Web Mapping: Note all the comments in the code
// Code: all-overlays-geoserver.js
var map, layer_Basemap, layer_Croydon_POI;

function init() {
    // See https://openlayers.org/en/latest/doc/tutorials/raster-reprojection.html  (uses proj4js)
	// Example: http://openlayers.org/en/latest/examples/reprojection-image.html?q=proj4js
	proj4.defs('EPSG:27700', '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 ' +
		'+x_0=400000 +y_0=-100000 +ellps=airy ' +
		'+towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 ' +
		'+units=m +no_defs');
	ol.proj.proj4.register(proj4);
	//var imageExtent = [0, 0, 700000, 1300000]; // whole GB
	var imageExtent = [520000, 150000, 560000, 190000];
	// We are aiming at approx centerpoint of 532631, 165230

	var options = {
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM()
			})
		],
		target: 'map',
		view: new ol.View({
			center: ol.proj.transform(
				ol.extent.getCenter(imageExtent), 'EPSG:27700', 'EPSG:3857'),
			zoom: 11
		}),
	};

	map = new ol.Map(options);
	
  // Remember to edit the settings below
	var wmsSource = new ol.source.ImageWMS({
		url: 'http://50cr004.sims.cranfield.ac.uk:8080/geoserver/wms',
		params: {
			'LAYERS': 'WM:Croydon_POI'
		},
		serverType: 'geoserver',
		crossOrigin: null // see https://gis.stackexchange.com/questions/113693/openlayers-3-cross-origin-request-blocked-the-same-origin-policy-disallows
	});

	var layer_Croydon_POI = new ol.layer.Image({
		source: wmsSource
	});

	map.addLayer(layer_Croydon_POI);

}
