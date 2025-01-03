var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Climat_VAR_1 = new ol.format.GeoJSON();
var features_Climat_VAR_1 = format_Climat_VAR_1.readFeatures(json_Climat_VAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Climat_VAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Climat_VAR_1.addFeatures(features_Climat_VAR_1);
var lyr_Climat_VAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Climat_VAR_1, 
                style: style_Climat_VAR_1,
                popuplayertitle: 'Climat_VAR',
                interactive: true,
    title: 'Climat_VAR<br />\
    <img src="styles/legend/Climat_VAR_1_0.png" /> 0<br />\
    <img src="styles/legend/Climat_VAR_1_1.png" /> 1<br />'
        });
var format_Courbedeniveau_2_2 = new ol.format.GeoJSON();
var features_Courbedeniveau_2_2 = format_Courbedeniveau_2_2.readFeatures(json_Courbedeniveau_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbedeniveau_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbedeniveau_2_2.addFeatures(features_Courbedeniveau_2_2);
var lyr_Courbedeniveau_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbedeniveau_2_2, 
                style: style_Courbedeniveau_2_2,
                popuplayertitle: 'Courbe de niveau_2',
                interactive: true,
                title: '<img src="styles/legend/Courbedeniveau_2_2.png" /> Courbe de niveau_2'
            });
var format_Courbedeniveau_1_3 = new ol.format.GeoJSON();
var features_Courbedeniveau_1_3 = format_Courbedeniveau_1_3.readFeatures(json_Courbedeniveau_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Courbedeniveau_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Courbedeniveau_1_3.addFeatures(features_Courbedeniveau_1_3);
var lyr_Courbedeniveau_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Courbedeniveau_1_3, 
                style: style_Courbedeniveau_1_3,
                popuplayertitle: 'Courbe de niveau_1',
                interactive: true,
                title: '<img src="styles/legend/Courbedeniveau_1_3.png" /> Courbe de niveau_1'
            });
var format_Dept_VAR_4 = new ol.format.GeoJSON();
var features_Dept_VAR_4 = format_Dept_VAR_4.readFeatures(json_Dept_VAR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dept_VAR_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dept_VAR_4.addFeatures(features_Dept_VAR_4);
var lyr_Dept_VAR_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dept_VAR_4, 
                style: style_Dept_VAR_4,
                popuplayertitle: 'Dept_VAR',
                interactive: true,
                title: '<img src="styles/legend/Dept_VAR_4.png" /> Dept_VAR'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Climat_VAR_1.setVisible(true);lyr_Courbedeniveau_2_2.setVisible(true);lyr_Courbedeniveau_1_3.setVisible(true);lyr_Dept_VAR_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Climat_VAR_1,lyr_Courbedeniveau_2_2,lyr_Courbedeniveau_1_3,lyr_Dept_VAR_4];
lyr_Climat_VAR_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Climat': 'Climat', 'yiy': 'yiy', });
lyr_Courbedeniveau_2_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Courbedeniveau_1_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_Dept_VAR_4.set('fieldAliases', {'fid': 'fid', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Climat_VAR_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Climat': 'TextEdit', 'yiy': 'TextEdit', });
lyr_Courbedeniveau_2_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Courbedeniveau_1_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Dept_VAR_4.set('fieldImages', {'fid': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Climat_VAR_1.set('fieldLabels', {'fid': 'no label', 'DN': 'inline label - always visible', 'Climat': 'inline label - visible with data', 'yiy': 'no label', });
lyr_Courbedeniveau_2_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'header label - visible with data', });
lyr_Courbedeniveau_1_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'header label - always visible', });
lyr_Dept_VAR_4.set('fieldLabels', {'fid': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'header label - visible with data', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Dept_VAR_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});