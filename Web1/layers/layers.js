var wms_layers = [];


        var lyr_2gisMap_0 = new ol.layer.Tile({
            'title': '2gis Map',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1.1'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Detection_dessites_Relief_2 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Detection_des sites_Relief',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Detection_dessites_Relief_2.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5271972.595503, -2157415.051253, 5276175.440614, -2155226.319419]
                            })
                        });
var lyr_Classification_Relief_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Classification_Relief',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Classification_Relief_3.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [5271972.595503, -2157415.051253, 5276175.440614, -2155226.319419]
                            })
                        });
var format_Courbesdeniveaux_4 = new ol.format.GeoJSON();
var features_Courbesdeniveaux_4 = format_Courbesdeniveaux_4.readFeatures(json_Courbesdeniveaux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbesdeniveaux_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbesdeniveaux_4.addFeatures(features_Courbesdeniveaux_4);
var lyr_Courbesdeniveaux_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbesdeniveaux_4, 
                style: style_Courbesdeniveaux_4,
                popuplayertitle: 'Courbes de niveaux',
                interactive: true,
                title: '<img src="styles/legend/Courbesdeniveaux_4.png" /> Courbes de niveaux'
            });
var format_Lessitesafosses_2_Relief_5 = new ol.format.GeoJSON();
var features_Lessitesafosses_2_Relief_5 = format_Lessitesafosses_2_Relief_5.readFeatures(json_Lessitesafosses_2_Relief_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lessitesafosses_2_Relief_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lessitesafosses_2_Relief_5.addFeatures(features_Lessitesafosses_2_Relief_5);
var lyr_Lessitesafosses_2_Relief_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lessitesafosses_2_Relief_5, 
                style: style_Lessitesafosses_2_Relief_5,
                popuplayertitle: 'Les sites a fosses_2_Relief',
                interactive: true,
                title: '<img src="styles/legend/Lessitesafosses_2_Relief_5.png" /> Les sites a fosses_2_Relief'
            });

lyr_2gisMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Detection_dessites_Relief_2.setVisible(true);lyr_Classification_Relief_3.setVisible(true);lyr_Courbesdeniveaux_4.setVisible(true);lyr_Lessitesafosses_2_Relief_5.setVisible(true);
var layersList = [lyr_2gisMap_0,lyr_GoogleSatellite_1,lyr_Detection_dessites_Relief_2,lyr_Classification_Relief_3,lyr_Courbesdeniveaux_4,lyr_Lessitesafosses_2_Relief_5];
lyr_Courbesdeniveaux_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Lessitesafosses_2_Relief_5.set('fieldAliases', {'id': 'id', });
lyr_Courbesdeniveaux_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Lessitesafosses_2_Relief_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Courbesdeniveaux_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_Lessitesafosses_2_Relief_5.set('fieldLabels', {'id': 'no label', });
lyr_Lessitesafosses_2_Relief_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});