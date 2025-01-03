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
                interactive: true,
                title: '<img src="styles/legend/Les_Communes_de_VAR_2.png" /> Les_Communes_de_VAR'
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

lyr_OSMStandard_0.setVisible(true);lyr_Climat_VAR_1.setVisible(true);lyr_Les_Communes_de_VAR_2.setVisible(true);lyr_Dept_VAR_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Climat_VAR_1,lyr_Les_Communes_de_VAR_2,lyr_Dept_VAR_3];
lyr_Climat_VAR_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Climat': 'Climat', 'yiy': 'yiy', });
lyr_Les_Communes_de_VAR_2.set('fieldAliases', {'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'Liste_incendie_81_Nbr': 'Liste_incendie_81_Nbr', 'Liste_incendie_81_Somme_Surf': 'Liste_incendie_81_Somme_Surf', 'Liste_incendie_81_surf_Max': 'Liste_incendie_81_surf_Max', 'Liste_incendie_81_Ratio': 'Liste_incendie_81_Ratio', });
lyr_Dept_VAR_3.set('fieldAliases', {'fid': 'fid', 'CODE_COM': 'CODE_COM', 'INSEE_COM': 'INSEE_COM', 'NOM_COM': 'NOM_COM', 'SUPERFICIE': 'SUPERFICIE', 'POPULATION': 'POPULATION', 'CODE_DEPT': 'CODE_DEPT', 'NOM_DEPT': 'NOM_DEPT', 'CODE_REG': 'CODE_REG', 'NOM_REG': 'NOM_REG', });
lyr_Climat_VAR_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Climat': 'TextEdit', 'yiy': 'TextEdit', });
lyr_Les_Communes_de_VAR_2.set('fieldImages', {'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'Liste_incendie_81_Nbr': 'Range', 'Liste_incendie_81_Somme_Surf': 'TextEdit', 'Liste_incendie_81_surf_Max': 'TextEdit', 'Liste_incendie_81_Ratio': 'TextEdit', });
lyr_Dept_VAR_3.set('fieldImages', {'fid': 'TextEdit', 'CODE_COM': 'TextEdit', 'INSEE_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'POPULATION': 'TextEdit', 'CODE_DEPT': 'TextEdit', 'NOM_DEPT': 'TextEdit', 'CODE_REG': 'TextEdit', 'NOM_REG': 'TextEdit', });
lyr_Climat_VAR_1.set('fieldLabels', {'fid': 'no label', 'DN': 'inline label - always visible', 'Climat': 'inline label - visible with data', 'yiy': 'no label', });
lyr_Les_Communes_de_VAR_2.set('fieldLabels', {'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'Liste_incendie_81_Nbr': 'no label', 'Liste_incendie_81_Somme_Surf': 'no label', 'Liste_incendie_81_surf_Max': 'no label', 'Liste_incendie_81_Ratio': 'no label', });
lyr_Dept_VAR_3.set('fieldLabels', {'fid': 'no label', 'CODE_COM': 'no label', 'INSEE_COM': 'no label', 'NOM_COM': 'no label', 'SUPERFICIE': 'no label', 'POPULATION': 'no label', 'CODE_DEPT': 'no label', 'NOM_DEPT': 'no label', 'CODE_REG': 'no label', 'NOM_REG': 'no label', });
lyr_Dept_VAR_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});