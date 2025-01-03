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
var format_Dept_VAR_1 = new ol.format.GeoJSON();
var features_Dept_VAR_1 = format_Dept_VAR_1.readFeatures(json_Dept_VAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dept_VAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dept_VAR_1.addFeatures(features_Dept_VAR_1);
var lyr_Dept_VAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dept_VAR_1, 
                style: style_Dept_VAR_1,
                popuplayertitle: 'Dept_VAR',
                interactive: true,
                title: '<img src="styles/legend/Dept_VAR_1.png" /> Dept_VAR'
            });
var format_Climat_Departemental_2 = new ol.format.GeoJSON();
var features_Climat_Departemental_2 = format_Climat_Departemental_2.readFeatures(json_Climat_Departemental_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Climat_Departemental_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Climat_Departemental_2.addFeatures(features_Climat_Departemental_2);
var lyr_Climat_Departemental_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Climat_Departemental_2, 
                style: style_Climat_Departemental_2,
                popuplayertitle: 'Climat_Departemental',
                interactive: true,
    title: 'Climat_Departemental<br />\
    <img src="styles/legend/Climat_Departemental_2_0.png" /> 0<br />\
    <img src="styles/legend/Climat_Departemental_2_1.png" /> 1<br />'
        });
var format_Departementdelazonepromethee_3 = new ol.format.GeoJSON();
var features_Departementdelazonepromethee_3 = format_Departementdelazonepromethee_3.readFeatures(json_Departementdelazonepromethee_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departementdelazonepromethee_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departementdelazonepromethee_3.addFeatures(features_Departementdelazonepromethee_3);
var lyr_Departementdelazonepromethee_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departementdelazonepromethee_3, 
                style: style_Departementdelazonepromethee_3,
                popuplayertitle: 'Departement de la zone promethee',
                interactive: true,
                title: '<img src="styles/legend/Departementdelazonepromethee_3.png" /> Departement de la zone promethee'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Dept_VAR_1.setVisible(true);lyr_Climat_Departemental_2.setVisible(true);lyr_Departementdelazonepromethee_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Dept_VAR_1,lyr_Climat_Departemental_2,lyr_Departementdelazonepromethee_3];
lyr_Dept_VAR_1.set('fieldAliases', {'fid': 'fid', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Climat_Departemental_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Climat': 'Climat', 'yiy': 'yiy', });
lyr_Departementdelazonepromethee_3.set('fieldAliases', {'fid': 'fid', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Dept_VAR_1.set('fieldImages', {'fid': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Climat_Departemental_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Climat': 'TextEdit', 'yiy': 'TextEdit', });
lyr_Departementdelazonepromethee_3.set('fieldImages', {'fid': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Dept_VAR_1.set('fieldLabels', {'fid': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Climat_Departemental_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Climat': 'no label', 'yiy': 'no label', });
lyr_Departementdelazonepromethee_3.set('fieldLabels', {'fid': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Departementdelazonepromethee_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});