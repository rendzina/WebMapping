// A1136 Web Mapping: Note all the comments in the code
// Code : all-overlays-google.js
var map;

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
	// We are aiming at an approx centerpoint of 532631, 165230 OSGB

	// A useful example is: https://stackoverflow.com/questions/42332441/openlayers-v4-0-1-support-google-maps-javascript-api/42616386#42616386
	var options = {
        layers: [
          new ol.layer.Tile({
            source: new ol.source.TileImage({url: 'http://maps.google.com/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i375060738!3m9!2spl!3sUS!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0'})
          })
        ],
		target: 'map',
		view: new ol.View({
			center: ol.proj.transform(
				ol.extent.getCenter(imageExtent), 'EPSG:27700', 'EPSG:3857'),
			zoom: 11
		}),
	};
  // Remember to edit the server settings below
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

	map = new ol.Map(options);
	map.addLayer(layer_Croydon_POI);
}
