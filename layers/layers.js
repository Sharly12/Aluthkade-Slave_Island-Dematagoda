var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AluthKade_west_1 = new ol.format.GeoJSON();
var features_AluthKade_west_1 = format_AluthKade_west_1.readFeatures(json_AluthKade_west_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AluthKade_west_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AluthKade_west_1.addFeatures(features_AluthKade_west_1);
var lyr_AluthKade_west_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AluthKade_west_1, 
                style: style_AluthKade_west_1,
                popuplayertitle: 'AluthKade_west',
                interactive: true,
                title: '<img src="styles/legend/AluthKade_west_1.png" /> AluthKade_west'
            });
var format_Dematagoda_2 = new ol.format.GeoJSON();
var features_Dematagoda_2 = format_Dematagoda_2.readFeatures(json_Dematagoda_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dematagoda_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dematagoda_2.addFeatures(features_Dematagoda_2);
var lyr_Dematagoda_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dematagoda_2, 
                style: style_Dematagoda_2,
                popuplayertitle: 'Dematagoda',
                interactive: true,
                title: '<img src="styles/legend/Dematagoda_2.png" /> Dematagoda'
            });
var format_slaveIsland_3 = new ol.format.GeoJSON();
var features_slaveIsland_3 = format_slaveIsland_3.readFeatures(json_slaveIsland_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_slaveIsland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_slaveIsland_3.addFeatures(features_slaveIsland_3);
var lyr_slaveIsland_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_slaveIsland_3, 
                style: style_slaveIsland_3,
                popuplayertitle: 'slave Island',
                interactive: true,
                title: '<img src="styles/legend/slaveIsland_3.png" /> slave Island'
            });
var format_Aluthkade_Collection_4 = new ol.format.GeoJSON();
var features_Aluthkade_Collection_4 = format_Aluthkade_Collection_4.readFeatures(json_Aluthkade_Collection_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aluthkade_Collection_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aluthkade_Collection_4.addFeatures(features_Aluthkade_Collection_4);
var lyr_Aluthkade_Collection_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aluthkade_Collection_4, 
                style: style_Aluthkade_Collection_4,
                popuplayertitle: 'Aluthkade_Collection',
                interactive: true,
                title: '<img src="styles/legend/Aluthkade_Collection_4.png" /> Aluthkade_Collection'
            });
var format_Demetagoda_Collection_5 = new ol.format.GeoJSON();
var features_Demetagoda_Collection_5 = format_Demetagoda_Collection_5.readFeatures(json_Demetagoda_Collection_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Demetagoda_Collection_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Demetagoda_Collection_5.addFeatures(features_Demetagoda_Collection_5);
var lyr_Demetagoda_Collection_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Demetagoda_Collection_5, 
                style: style_Demetagoda_Collection_5,
                popuplayertitle: 'Demetagoda_Collection',
                interactive: true,
                title: '<img src="styles/legend/Demetagoda_Collection_5.png" /> Demetagoda_Collection'
            });
var format_Slaveisland_Collection_6 = new ol.format.GeoJSON();
var features_Slaveisland_Collection_6 = format_Slaveisland_Collection_6.readFeatures(json_Slaveisland_Collection_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Slaveisland_Collection_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Slaveisland_Collection_6.addFeatures(features_Slaveisland_Collection_6);
var lyr_Slaveisland_Collection_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Slaveisland_Collection_6, 
                style: style_Slaveisland_Collection_6,
                popuplayertitle: 'Slave island_Collection',
                interactive: true,
                title: '<img src="styles/legend/Slaveisland_Collection_6.png" /> Slave island_Collection'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_AluthKade_west_1.setVisible(true);lyr_Dematagoda_2.setVisible(true);lyr_slaveIsland_3.setVisible(true);lyr_Aluthkade_Collection_4.setVisible(true);lyr_Demetagoda_Collection_5.setVisible(true);lyr_Slaveisland_Collection_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_AluthKade_west_1,lyr_Dematagoda_2,lyr_slaveIsland_3,lyr_Aluthkade_Collection_4,lyr_Demetagoda_Collection_5,lyr_Slaveisland_Collection_6];
lyr_AluthKade_west_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_Dematagoda_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_slaveIsland_3.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'DSD_C': 'DSD_C', 'GND_N': 'GND_N', 'GND_NO': 'GND_NO', 'GND_C': 'GND_C', 'PROVINCE_C': 'PROVINCE_C', 'DISTRICT_C': 'DISTRICT_C', 'GN_UID': 'GN_UID', 'OID_': 'OID_', 'UID_DIST_D': 'UID_DIST_D', 'TOT_POP': 'TOT_POP', 'RANK_POP': 'RANK_POP', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'RATIOSEX': 'RATIOSEX', 'RANK_SR': 'RANK_SR', '0TO14': '0TO14', '15TO59': '15TO59', 'OVER60': 'OVER60', 'RATIODEPEN': 'RATIODEPEN', 'RANK_DR': 'RANK_DR', 'BUDDHIST': 'BUDDHIST', 'HINDU': 'HINDU', 'ISLAM': 'ISLAM', 'ROMANCATHO': 'ROMANCATHO', 'OTHERCHRIS': 'OTHERCHRIS', 'OTHERELIGI': 'OTHERELIGI', 'SINHALESE': 'SINHALESE', 'SRILANKATA': 'SRILANKATA', 'INDIANTAMI': 'INDIANTAMI', 'SRILANKAMO': 'SRILANKAMO', 'OTHERETHGR': 'OTHERETHGR', 'NAME_DIST_': 'NAME_DIST_', 'NUM_GN': 'NUM_GN', 'Area': 'Area', });
lyr_Aluthkade_Collection_4.set('fieldAliases', {'id': 'id', 'temp_1': 'temp_1', 'rh_1': 'rh_1', 'temp_2': 'temp_2', 'rh_2': 'rh_2', 'temp_3': 'temp_3', 'rh_3': 'rh_3', 'avg_temp': 'avg_temp', 'avg_rh': 'avg_rh', 'Date': 'Date', 'Time': 'Time', 'longitude/X': 'longitude/X', 'latitude/y': 'latitude/y', });
lyr_Demetagoda_Collection_5.set('fieldAliases', {'id': 'id', 'temp_1': 'temp_1', 'rh_1': 'rh_1', 'temp_2': 'temp_2', 'rh_2': 'rh_2', 'temp_3': 'temp_3', 'rh_3': 'rh_3', 'avg_temp': 'avg_temp', 'avg_rh': 'avg_rh', 'Date': 'Date', 'Time': 'Time', 'longitude/X': 'longitude/X', 'latitude/Y': 'latitude/Y', });
lyr_Slaveisland_Collection_6.set('fieldAliases', {'id': 'id', 'temp_1': 'temp_1', 'rh_1': 'rh_1', 'temp_2': 'temp_2', 'rh_2': 'rh_2', 'temp_3': 'temp_3', 'rh_3': 'rh_3', 'avg_temp': 'avg_temp', 'avg_rh': 'avg_rh', 'Date': 'Date', 'Time': 'Time', 'longitude/x': 'longitude/x', 'latitude/y': 'latitude/y', });
lyr_AluthKade_west_1.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_Dematagoda_2.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_slaveIsland_3.set('fieldImages', {'PROVINCE_N': '', 'DISTRICT_N': '', 'DSD_N': '', 'DSD_C': '', 'GND_N': '', 'GND_NO': '', 'GND_C': '', 'PROVINCE_C': '', 'DISTRICT_C': '', 'GN_UID': '', 'OID_': '', 'UID_DIST_D': '', 'TOT_POP': '', 'RANK_POP': '', 'MALE': '', 'FEMALE': '', 'RATIOSEX': '', 'RANK_SR': '', '0TO14': '', '15TO59': '', 'OVER60': '', 'RATIODEPEN': '', 'RANK_DR': '', 'BUDDHIST': '', 'HINDU': '', 'ISLAM': '', 'ROMANCATHO': '', 'OTHERCHRIS': '', 'OTHERELIGI': '', 'SINHALESE': '', 'SRILANKATA': '', 'INDIANTAMI': '', 'SRILANKAMO': '', 'OTHERETHGR': '', 'NAME_DIST_': '', 'NUM_GN': '', 'Area': '', });
lyr_Aluthkade_Collection_4.set('fieldImages', {'id': 'Range', 'temp_1': 'TextEdit', 'rh_1': 'TextEdit', 'temp_2': 'TextEdit', 'rh_2': 'TextEdit', 'temp_3': 'TextEdit', 'rh_3': 'TextEdit', 'avg_temp': 'TextEdit', 'avg_rh': 'TextEdit', 'Date': 'TextEdit', 'Time': 'TextEdit', 'longitude/X': 'TextEdit', 'latitude/y': 'TextEdit', });
lyr_Demetagoda_Collection_5.set('fieldImages', {'id': 'Range', 'temp_1': 'TextEdit', 'rh_1': 'TextEdit', 'temp_2': 'TextEdit', 'rh_2': 'TextEdit', 'temp_3': 'TextEdit', 'rh_3': 'TextEdit', 'avg_temp': 'TextEdit', 'avg_rh': 'TextEdit', 'Date': 'TextEdit', 'Time': 'TextEdit', 'longitude/X': 'TextEdit', 'latitude/Y': 'TextEdit', });
lyr_Slaveisland_Collection_6.set('fieldImages', {'id': 'Range', 'temp_1': 'TextEdit', 'rh_1': 'TextEdit', 'temp_2': 'TextEdit', 'rh_2': 'TextEdit', 'temp_3': 'TextEdit', 'rh_3': 'TextEdit', 'avg_temp': 'TextEdit', 'avg_rh': 'TextEdit', 'Date': 'TextEdit', 'Time': 'TextEdit', 'longitude/x': 'TextEdit', 'latitude/y': 'TextEdit', });
lyr_AluthKade_west_1.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'hidden field', 'DSD_C': 'hidden field', 'GND_N': 'inline label - always visible', 'GND_NO': 'hidden field', 'GND_C': 'hidden field', 'PROVINCE_C': 'hidden field', 'DISTRICT_C': 'hidden field', 'GN_UID': 'hidden field', 'OID_': 'hidden field', 'UID_DIST_D': 'hidden field', 'TOT_POP': 'hidden field', 'RANK_POP': 'hidden field', 'MALE': 'hidden field', 'FEMALE': 'hidden field', 'RATIOSEX': 'hidden field', 'RANK_SR': 'hidden field', '0TO14': 'hidden field', '15TO59': 'hidden field', 'OVER60': 'hidden field', 'RATIODEPEN': 'hidden field', 'RANK_DR': 'hidden field', 'BUDDHIST': 'hidden field', 'HINDU': 'hidden field', 'ISLAM': 'hidden field', 'ROMANCATHO': 'hidden field', 'OTHERCHRIS': 'hidden field', 'OTHERELIGI': 'hidden field', 'SINHALESE': 'hidden field', 'SRILANKATA': 'hidden field', 'INDIANTAMI': 'hidden field', 'SRILANKAMO': 'hidden field', 'OTHERETHGR': 'hidden field', 'NAME_DIST_': 'hidden field', 'NUM_GN': 'hidden field', 'Area': 'hidden field', });
lyr_Dematagoda_2.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'hidden field', 'DSD_C': 'hidden field', 'GND_N': 'inline label - always visible', 'GND_NO': 'hidden field', 'GND_C': 'hidden field', 'PROVINCE_C': 'hidden field', 'DISTRICT_C': 'hidden field', 'GN_UID': 'hidden field', 'OID_': 'hidden field', 'UID_DIST_D': 'hidden field', 'TOT_POP': 'hidden field', 'RANK_POP': 'hidden field', 'MALE': 'hidden field', 'FEMALE': 'hidden field', 'RATIOSEX': 'hidden field', 'RANK_SR': 'hidden field', '0TO14': 'hidden field', '15TO59': 'hidden field', 'OVER60': 'hidden field', 'RATIODEPEN': 'hidden field', 'RANK_DR': 'hidden field', 'BUDDHIST': 'hidden field', 'HINDU': 'hidden field', 'ISLAM': 'hidden field', 'ROMANCATHO': 'hidden field', 'OTHERCHRIS': 'hidden field', 'OTHERELIGI': 'hidden field', 'SINHALESE': 'hidden field', 'SRILANKATA': 'hidden field', 'INDIANTAMI': 'hidden field', 'SRILANKAMO': 'hidden field', 'OTHERETHGR': 'hidden field', 'NAME_DIST_': 'hidden field', 'NUM_GN': 'hidden field', 'Area': 'hidden field', });
lyr_slaveIsland_3.set('fieldLabels', {'PROVINCE_N': 'inline label - always visible', 'DISTRICT_N': 'inline label - always visible', 'DSD_N': 'hidden field', 'DSD_C': 'hidden field', 'GND_N': 'inline label - always visible', 'GND_NO': 'hidden field', 'GND_C': 'hidden field', 'PROVINCE_C': 'hidden field', 'DISTRICT_C': 'hidden field', 'GN_UID': 'hidden field', 'OID_': 'hidden field', 'UID_DIST_D': 'hidden field', 'TOT_POP': 'hidden field', 'RANK_POP': 'hidden field', 'MALE': 'hidden field', 'FEMALE': 'hidden field', 'RATIOSEX': 'hidden field', 'RANK_SR': 'hidden field', '0TO14': 'hidden field', '15TO59': 'hidden field', 'OVER60': 'hidden field', 'RATIODEPEN': 'hidden field', 'RANK_DR': 'hidden field', 'BUDDHIST': 'hidden field', 'HINDU': 'hidden field', 'ISLAM': 'hidden field', 'ROMANCATHO': 'hidden field', 'OTHERCHRIS': 'hidden field', 'OTHERELIGI': 'hidden field', 'SINHALESE': 'hidden field', 'SRILANKATA': 'hidden field', 'INDIANTAMI': 'hidden field', 'SRILANKAMO': 'hidden field', 'OTHERETHGR': 'hidden field', 'NAME_DIST_': 'hidden field', 'NUM_GN': 'hidden field', 'Area': 'hidden field', });
lyr_Aluthkade_Collection_4.set('fieldLabels', {'id': 'inline label - always visible', 'temp_1': 'inline label - always visible', 'rh_1': 'inline label - always visible', 'temp_2': 'inline label - always visible', 'rh_2': 'inline label - always visible', 'temp_3': 'inline label - always visible', 'rh_3': 'inline label - always visible', 'avg_temp': 'inline label - always visible', 'avg_rh': 'inline label - always visible', 'Date': 'inline label - always visible', 'Time': 'inline label - always visible', 'longitude/X': 'inline label - always visible', 'latitude/y': 'inline label - always visible', });
lyr_Demetagoda_Collection_5.set('fieldLabels', {'id': 'inline label - always visible', 'temp_1': 'inline label - always visible', 'rh_1': 'inline label - always visible', 'temp_2': 'inline label - always visible', 'rh_2': 'inline label - always visible', 'temp_3': 'inline label - always visible', 'rh_3': 'inline label - always visible', 'avg_temp': 'inline label - always visible', 'avg_rh': 'inline label - always visible', 'Date': 'inline label - always visible', 'Time': 'inline label - always visible', 'longitude/X': 'inline label - always visible', 'latitude/Y': 'inline label - always visible', });
lyr_Slaveisland_Collection_6.set('fieldLabels', {'id': 'inline label - always visible', 'temp_1': 'inline label - always visible', 'rh_1': 'inline label - always visible', 'temp_2': 'inline label - always visible', 'rh_2': 'inline label - always visible', 'temp_3': 'inline label - always visible', 'rh_3': 'inline label - always visible', 'avg_temp': 'inline label - always visible', 'avg_rh': 'inline label - always visible', 'Date': 'inline label - always visible', 'Time': 'inline label - always visible', 'longitude/x': 'inline label - always visible', 'latitude/y': 'inline label - always visible', });
lyr_Slaveisland_Collection_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});