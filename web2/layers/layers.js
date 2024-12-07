var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ClimatBouchesduRhone_1 = new ol.format.GeoJSON();
var features_ClimatBouchesduRhone_1 = format_ClimatBouchesduRhone_1.readFeatures(json_ClimatBouchesduRhone_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClimatBouchesduRhone_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClimatBouchesduRhone_1.addFeatures(features_ClimatBouchesduRhone_1);
var lyr_ClimatBouchesduRhone_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClimatBouchesduRhone_1, 
                style: style_ClimatBouchesduRhone_1,
                popuplayertitle: "Climat Bouches du Rhone",
                interactive: true,
    title: 'Climat Bouches du Rhone<br />\
    <img src="styles/legend/ClimatBouchesduRhone_1_0.png" /> 0<br />\
    <img src="styles/legend/ClimatBouchesduRhone_1_1.png" /> 1<br />\
    <img src="styles/legend/ClimatBouchesduRhone_1_2.png" /> <br />'
        });
var format_CommunesduBouchesduRhone_2 = new ol.format.GeoJSON();
var features_CommunesduBouchesduRhone_2 = format_CommunesduBouchesduRhone_2.readFeatures(json_CommunesduBouchesduRhone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesduBouchesduRhone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesduBouchesduRhone_2.addFeatures(features_CommunesduBouchesduRhone_2);
var lyr_CommunesduBouchesduRhone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesduBouchesduRhone_2, 
                style: style_CommunesduBouchesduRhone_2,
                popuplayertitle: "Communes du Bouches du Rhone",
                interactive: true,
                title: '<img src="styles/legend/CommunesduBouchesduRhone_2.png" /> Communes du Bouches du Rhone'
            });
var format_Climat_Departemental_3 = new ol.format.GeoJSON();
var features_Climat_Departemental_3 = format_Climat_Departemental_3.readFeatures(json_Climat_Departemental_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Climat_Departemental_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Climat_Departemental_3.addFeatures(features_Climat_Departemental_3);
var lyr_Climat_Departemental_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Climat_Departemental_3, 
                style: style_Climat_Departemental_3,
                popuplayertitle: "Climat_Departemental",
                interactive: true,
    title: 'Climat_Departemental<br />\
    <img src="styles/legend/Climat_Departemental_3_0.png" /> 1 - 2<br />\
    <img src="styles/legend/Climat_Departemental_3_1.png" /> 2 - 3<br />\
    <img src="styles/legend/Climat_Departemental_3_2.png" /> 3 - 4<br />\
    <img src="styles/legend/Climat_Departemental_3_3.png" /> 4 - 5<br />\
    <img src="styles/legend/Climat_Departemental_3_4.png" /> 5 - 6<br />\
    <img src="styles/legend/Climat_Departemental_3_5.png" /> 6 - 7<br />\
    <img src="styles/legend/Climat_Departemental_3_6.png" /> 7 - 8<br />\
    <img src="styles/legend/Climat_Departemental_3_7.png" /> 8 - 9<br />'
        });
var format_Departementdelazonepromethee_4 = new ol.format.GeoJSON();
var features_Departementdelazonepromethee_4 = format_Departementdelazonepromethee_4.readFeatures(json_Departementdelazonepromethee_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departementdelazonepromethee_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departementdelazonepromethee_4.addFeatures(features_Departementdelazonepromethee_4);
var lyr_Departementdelazonepromethee_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departementdelazonepromethee_4, 
                style: style_Departementdelazonepromethee_4,
                popuplayertitle: "Departement de la zone promethee",
                interactive: true,
                title: '<img src="styles/legend/Departementdelazonepromethee_4.png" /> Departement de la zone promethee'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ClimatBouchesduRhone_1.setVisible(true);lyr_CommunesduBouchesduRhone_2.setVisible(true);lyr_Climat_Departemental_3.setVisible(true);lyr_Departementdelazonepromethee_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_ClimatBouchesduRhone_1,lyr_CommunesduBouchesduRhone_2,lyr_Climat_Departemental_3,lyr_Departementdelazonepromethee_4];
lyr_ClimatBouchesduRhone_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Climat': 'Climat', 'yiy': 'yiy', });
lyr_CommunesduBouchesduRhone_2.set('fieldAliases', {'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'STATUT': 'STATUT', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_ARR': 'CODE_ARR', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Climat_Departemental_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Climat': 'Climat', 'yiy': 'yiy', });
lyr_Departementdelazonepromethee_4.set('fieldAliases', {'fid': 'fid', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_ClimatBouchesduRhone_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Climat': 'TextEdit', 'yiy': 'TextEdit', });
lyr_CommunesduBouchesduRhone_2.set('fieldImages', {'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'STATUT': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_ARR': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Climat_Departemental_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Climat': 'TextEdit', 'yiy': 'TextEdit', });
lyr_Departementdelazonepromethee_4.set('fieldImages', {'fid': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_ClimatBouchesduRhone_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Climat': 'no label', 'yiy': 'no label', });
lyr_CommunesduBouchesduRhone_2.set('fieldLabels', {'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'STATUT': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_ARR': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Climat_Departemental_3.set('fieldLabels', {'fid': 'no label', 'DN': 'inline label - visible with data', 'Climat': 'no label', 'yiy': 'no label', });
lyr_Departementdelazonepromethee_4.set('fieldLabels', {'fid': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'inline label - visible with data', 'POPULATION': 'inline label - visible with data', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'inline label - visible with data', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Departementdelazonepromethee_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});