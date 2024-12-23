var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Detectiondessites_1 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Detection des sites',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Detectiondessites_1.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5248303.533676, -2139691.646620, 5254230.817887, -2135428.542278]
                            })
                        });
var lyr_Classification_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Classification',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Classification_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5248303.533676, -2139691.646620, 5254230.817887, -2135428.542278]
                            })
                        });
var format_Lessitesafosses_D1_3 = new ol.format.GeoJSON();
var features_Lessitesafosses_D1_3 = format_Lessitesafosses_D1_3.readFeatures(json_Lessitesafosses_D1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lessitesafosses_D1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lessitesafosses_D1_3.addFeatures(features_Lessitesafosses_D1_3);
var lyr_Lessitesafosses_D1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lessitesafosses_D1_3, 
                style: style_Lessitesafosses_D1_3,
                popuplayertitle: 'Les sites a fosses_D1',
                interactive: true,
                title: '<img src="styles/legend/Lessitesafosses_D1_3.png" /> Les sites a fosses_D1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Detectiondessites_1.setVisible(true);lyr_Classification_2.setVisible(true);lyr_Lessitesafosses_D1_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Detectiondessites_1,lyr_Classification_2,lyr_Lessitesafosses_D1_3];
lyr_Lessitesafosses_D1_3.set('fieldAliases', {'id': 'id', });
lyr_Lessitesafosses_D1_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Lessitesafosses_D1_3.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Lessitesafosses_D1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});