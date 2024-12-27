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
var format_Compte_1 = new ol.format.GeoJSON();
var features_Compte_1 = format_Compte_1.readFeatures(json_Compte_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Compte_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Compte_1.addFeatures(features_Compte_1);
var lyr_Compte_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Compte_1, 
                style: style_Compte_1,
                popuplayertitle: 'Compte',
                interactive: true,
    title: 'Compte<br />\
    <img src="styles/legend/Compte_1_0.png" /> 0 - 40<br />\
    <img src="styles/legend/Compte_1_1.png" /> 40 - 80<br />\
    <img src="styles/legend/Compte_1_2.png" /> 80 - 120<br />\
    <img src="styles/legend/Compte_1_3.png" /> 120 - 160<br />\
    <img src="styles/legend/Compte_1_4.png" /> 160 - 199<br />'
        });
var format_Les_Communes_de_VAR_2 = new ol.format.GeoJSON();
var features_Les_Communes_de_VAR_2 = format_Les_Communes_de_VAR_2.readFeatures(json_Les_Communes_de_VAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Les_Communes_de_VAR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Les_Communes_de_VAR_2.addFeatures(features_Les_Communes_de_VAR_2);
var lyr_Les_Communes_de_VAR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Les_Communes_de_VAR_2, 
                style: style_Les_Communes_de_VAR_2,
                popuplayertitle: 'Les_Communes_de_VAR',
                interactive: false,
                title: '<img src="styles/legend/Les_Communes_de_VAR_2.png" /> Les_Communes_de_VAR'
            });
var format_Climat_VAR_3 = new ol.format.GeoJSON();
var features_Climat_VAR_3 = format_Climat_VAR_3.readFeatures(json_Climat_VAR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Climat_VAR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Climat_VAR_3.addFeatures(features_Climat_VAR_3);
var lyr_Climat_VAR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Climat_VAR_3, 
                style: style_Climat_VAR_3,
                popuplayertitle: 'Climat_VAR',
                interactive: true,
    title: 'Climat_VAR<br />\
    <img src="styles/legend/Climat_VAR_3_0.png" /> 0<br />\
    <img src="styles/legend/Climat_VAR_3_1.png" /> 1<br />'
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
                interactive: false,
                title: '<img src="styles/legend/Dept_VAR_4.png" /> Dept_VAR'
            });
var format_Departementdelazonepromethee_5 = new ol.format.GeoJSON();
var features_Departementdelazonepromethee_5 = format_Departementdelazonepromethee_5.readFeatures(json_Departementdelazonepromethee_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departementdelazonepromethee_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departementdelazonepromethee_5.addFeatures(features_Departementdelazonepromethee_5);
var lyr_Departementdelazonepromethee_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departementdelazonepromethee_5, 
                style: style_Departementdelazonepromethee_5,
                popuplayertitle: 'Departement de la zone promethee',
                interactive: false,
                title: '<img src="styles/legend/Departementdelazonepromethee_5.png" /> Departement de la zone promethee'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Compte_1.setVisible(true);lyr_Les_Communes_de_VAR_2.setVisible(true);lyr_Climat_VAR_3.setVisible(true);lyr_Dept_VAR_4.setVisible(true);lyr_Departementdelazonepromethee_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Compte_1,lyr_Les_Communes_de_VAR_2,lyr_Climat_VAR_3,lyr_Dept_VAR_4,lyr_Departementdelazonepromethee_5];
lyr_Compte_1.set('fieldAliases', {'NOM': 'NOM', 'NUMPOINTS_': 'NUMPOINTS_', 'Ratio': 'Ratio', });
lyr_Les_Communes_de_VAR_2.set('fieldAliases', {'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'Liste_incendie_81_Nbr': 'Liste_incendie_81_Nbr', 'Liste_incendie_81_Somme_Surf': 'Liste_incendie_81_Somme_Surf', 'Liste_incendie_81_surf_Max': 'Liste_incendie_81_surf_Max', 'Liste_incendie_81_Ratio': 'Liste_incendie_81_Ratio', });
lyr_Climat_VAR_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Climat': 'Climat', 'yiy': 'yiy', });
lyr_Dept_VAR_4.set('fieldAliases', {'fid': 'fid', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Departementdelazonepromethee_5.set('fieldAliases', {'fid': 'fid', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Compte_1.set('fieldImages', {'NOM': 'TextEdit', 'NUMPOINTS_': 'TextEdit', 'Ratio': 'TextEdit', });
lyr_Les_Communes_de_VAR_2.set('fieldImages', {'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'Liste_incendie_81_Nbr': 'Range', 'Liste_incendie_81_Somme_Surf': 'TextEdit', 'Liste_incendie_81_surf_Max': 'TextEdit', 'Liste_incendie_81_Ratio': 'TextEdit', });
lyr_Climat_VAR_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Climat': 'TextEdit', 'yiy': 'TextEdit', });
lyr_Dept_VAR_4.set('fieldImages', {'fid': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Departementdelazonepromethee_5.set('fieldImages', {'fid': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Compte_1.set('fieldLabels', {'NOM': 'no label', 'NUMPOINTS_': 'no label', 'Ratio': 'inline label - visible with data', });
lyr_Les_Communes_de_VAR_2.set('fieldLabels', {'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'Liste_incendie_81_Nbr': 'no label', 'Liste_incendie_81_Somme_Surf': 'no label', 'Liste_incendie_81_surf_Max': 'no label', 'Liste_incendie_81_Ratio': 'no label', });
lyr_Climat_VAR_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'Climat': 'inline label - always visible', 'yiy': 'no label', });
lyr_Dept_VAR_4.set('fieldLabels', {'fid': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Departementdelazonepromethee_5.set('fieldLabels', {'fid': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Departementdelazonepromethee_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});