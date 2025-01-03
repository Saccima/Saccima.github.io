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
var format_Compte_2_2 = new ol.format.GeoJSON();
var features_Compte_2_2 = format_Compte_2_2.readFeatures(json_Compte_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Compte_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Compte_2_2.addFeatures(features_Compte_2_2);
var lyr_Compte_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Compte_2_2, 
                style: style_Compte_2_2,
                popuplayertitle: 'Compte_2',
                interactive: true,
    title: 'Compte_2<br />\
    <img src="styles/legend/Compte_2_2_0.png" /> 0 - 40<br />\
    <img src="styles/legend/Compte_2_2_1.png" /> 40 - 80<br />\
    <img src="styles/legend/Compte_2_2_2.png" /> 80 - 120<br />\
    <img src="styles/legend/Compte_2_2_3.png" /> 120 - 160<br />\
    <img src="styles/legend/Compte_2_2_4.png" /> 160 - 199<br />'
        });
var format_Dept_VAR_3 = new ol.format.GeoJSON();
var features_Dept_VAR_3 = format_Dept_VAR_3.readFeatures(json_Dept_VAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dept_VAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dept_VAR_3.addFeatures(features_Dept_VAR_3);
var lyr_Dept_VAR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dept_VAR_3, 
                style: style_Dept_VAR_3,
                popuplayertitle: 'Dept_VAR',
                interactive: true,
                title: '<img src="styles/legend/Dept_VAR_3.png" /> Dept_VAR'
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
                popuplayertitle: 'Departement de la zone promethee',
                interactive: true,
                title: '<img src="styles/legend/Departementdelazonepromethee_4.png" /> Departement de la zone promethee'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Climat_VAR_1.setVisible(true);lyr_Compte_2_2.setVisible(true);lyr_Dept_VAR_3.setVisible(true);lyr_Departementdelazonepromethee_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Climat_VAR_1,lyr_Compte_2_2,lyr_Dept_VAR_3,lyr_Departementdelazonepromethee_4];
lyr_Climat_VAR_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Climat': 'Climat', 'yiy': 'yiy', });
lyr_Compte_2_2.set('fieldAliases', {'NOM': 'NOM', 'NUMPOINTS': 'NUMPOINTS', 'Ratio': 'Ratio', });
lyr_Dept_VAR_3.set('fieldAliases', {'fid': 'fid', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Departementdelazonepromethee_4.set('fieldAliases', {'fid': 'fid', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Climat_VAR_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Climat': 'TextEdit', 'yiy': 'TextEdit', });
lyr_Compte_2_2.set('fieldImages', {'NOM': 'TextEdit', 'NUMPOINTS': 'TextEdit', 'Ratio': 'TextEdit', });
lyr_Dept_VAR_3.set('fieldImages', {'fid': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Departementdelazonepromethee_4.set('fieldImages', {'fid': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Climat_VAR_1.set('fieldLabels', {'fid': 'no label', 'DN': 'inline label - always visible', 'Climat': 'inline label - visible with data', 'yiy': 'no label', });
lyr_Compte_2_2.set('fieldLabels', {'NOM': 'no label', 'NUMPOINTS': 'no label', 'Ratio': 'no label', });
lyr_Dept_VAR_3.set('fieldLabels', {'fid': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'header label - visible with data', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Departementdelazonepromethee_4.set('fieldLabels', {'fid': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Departementdelazonepromethee_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});