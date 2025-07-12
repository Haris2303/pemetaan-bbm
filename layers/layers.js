var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_2 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_3 = format_ADMINISTRASIKECAMATAN_AR_50K_3.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_3);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_3, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_3,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
    title: 'ADMINISTRASIKECAMATAN_AR_50K<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_0.png" /> Sorong<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_1.png" /> Sorong Barat<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_2.png" /> Sorong Kepulauan<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_3.png" /> Sorong Manoi<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_4.png" /> Sorong Timur<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_5.png" /> Sorong Utara<br />\
    <img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_3_6.png" /> <br />' });
var format_DataLokasiSPBUPertashop_4 = new ol.format.GeoJSON();
var features_DataLokasiSPBUPertashop_4 = format_DataLokasiSPBUPertashop_4.readFeatures(json_DataLokasiSPBUPertashop_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataLokasiSPBUPertashop_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataLokasiSPBUPertashop_4.addFeatures(features_DataLokasiSPBUPertashop_4);
var lyr_DataLokasiSPBUPertashop_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataLokasiSPBUPertashop_4, 
                style: style_DataLokasiSPBUPertashop_4,
                popuplayertitle: 'Data Lokasi SPBU & Pertashop',
                interactive: true,
    title: 'Data Lokasi SPBU & Pertashop<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_0.png" /> pertashop Bambu Kuning<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_1.png" /> Pertashop depan Toko Metro<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_2.png" /> Pertashop Jalan Sungai Kamundan<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_3.png" /> pertashop Jalan Trikora Tampa Garam<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_4.png" /> Pertashop Kilo 8<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_5.png" /> pertashop pasar baru modern rufei<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_6.png" /> SPBU HBM<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_7.png" /> SPBU Jembatan Puri<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_8.png" /> SPBU JL. Ahmad Yani<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_9.png" /> SPBU kampung Baru<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_10.png" /> SPBU kilo 16<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_11.png" /> SPBU Kilo 9<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_12.png" /> SPBU Klaligi<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_13.png" /> SPBU UT KM 13<br />\
    <img src="styles/legend/DataLokasiSPBUPertashop_4_14.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleRoad_1.setVisible(false);lyr_GoogleHybrid_2.setVisible(false);lyr_ADMINISTRASIKECAMATAN_AR_50K_3.setVisible(false);lyr_DataLokasiSPBUPertashop_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleRoad_1,lyr_GoogleHybrid_2,lyr_ADMINISTRASIKECAMATAN_AR_50K_3,lyr_DataLokasiSPBUPertashop_4];
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DataLokasiSPBUPertashop_4.set('fieldAliases', {'Nama': 'Nama', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Lokasi': 'Lokasi', 'Keterangan': 'Keterangan', 'Status': 'Status', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_DataLokasiSPBUPertashop_4.set('fieldImages', {'Nama': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Lokasi': 'TextEdit', 'Keterangan': 'TextEdit', 'Status': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DataLokasiSPBUPertashop_4.set('fieldLabels', {'Nama': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Lokasi': 'inline label - visible with data', 'Keterangan': 'inline label - visible with data', 'Status': 'inline label - visible with data', });
lyr_DataLokasiSPBUPertashop_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});