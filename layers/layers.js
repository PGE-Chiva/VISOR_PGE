var wms_layers = [];

var lyr_Catastro_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://ovc.catastro.meh.es/cartografia/wms/servidorwms.aspx",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Catastro",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Catastro',
                            popuplayertitle: 'Catastro',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Catastro_0, 0]);

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        // Google Satellite base layer (disabled by default)
        var lyr_GoogleSatellite_49 = new ol.layer.Tile({
                    'title': 'Google Satellite',
                    'opacity': 0.600000,
                    'visible': false,
                    source: new ol.source.XYZ({
                    attributions: ' ',
                        url: 'https://mt{0-3}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                    })
                });
var format_ZONIFICACINESTRUCTURAL_2 = new ol.format.GeoJSON();
var features_ZONIFICACINESTRUCTURAL_2 = format_ZONIFICACINESTRUCTURAL_2.readFeatures(json_ZONIFICACINESTRUCTURAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONIFICACINESTRUCTURAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONIFICACINESTRUCTURAL_2.addFeatures(features_ZONIFICACINESTRUCTURAL_2);
var lyr_ZONIFICACINESTRUCTURAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZONIFICACINESTRUCTURAL_2, 
                style: style_ZONIFICACINESTRUCTURAL_2,
                popuplayertitle: 'ZONIFICACIÓN ESTRUCTURAL',
                interactive: true,
    title: 'ZONIFICACIÓN ESTRUCTURAL<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_0.png" /> ZUR-NHT<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_1.png" /> ZUR-RE-A<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_2.png" /> ZUR-RE-B<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_3.png" /> ZND-RE-M<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_4.png" /> ZND-RE-B<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_5.png" /> ZUR-TR<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_6.png" /> ZND-TR<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_7.png" /> ZUR-IN<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_8.png" /> ZND-IN<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_9.png" /> ZRP-AF-I<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_10.png" /> ZRP-NA<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_11.png" /> ZRP-AG<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_12.png" /> ZRP-AF-C<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_13.png" /> ZRP-RP<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_14.png" /> ZRP-MAF<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_15.png" /> ZRC-MAF<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_16.png" /> ZRC-FO<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_17.png" /> ZRC-AG-1<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_18.png" /> ZRC-AG-2<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_19.png" /> ZRC-AG3<br />\
    <img src="styles/legend/ZONIFICACINESTRUCTURAL_2_20.png" /> <br />' });
var format_TrazadoPropuesto_Municipal_3 = new ol.format.GeoJSON();
var features_TrazadoPropuesto_Municipal_3 = format_TrazadoPropuesto_Municipal_3.readFeatures(json_TrazadoPropuesto_Municipal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrazadoPropuesto_Municipal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrazadoPropuesto_Municipal_3.addFeatures(features_TrazadoPropuesto_Municipal_3);
var lyr_TrazadoPropuesto_Municipal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrazadoPropuesto_Municipal_3, 
                style: style_TrazadoPropuesto_Municipal_3,
                popuplayertitle: 'Trazado Propuesto_Municipal',
                interactive: true,
    title: 'Trazado Propuesto_Municipal<br />\
    <img src="styles/legend/TrazadoPropuesto_Municipal_3_0.png" /> Afecciones MIN_122.5<br />\
    <img src="styles/legend/TrazadoPropuesto_Municipal_3_1.png" /> Eje prop<br />\
    <img src="styles/legend/TrazadoPropuesto_Municipal_3_2.png" /> Plataformas viarias<br />\
    <img src="styles/legend/TrazadoPropuesto_Municipal_3_3.png" /> Taludes<br />' });
var format_Proyectado_Fomento_4 = new ol.format.GeoJSON();
var features_Proyectado_Fomento_4 = format_Proyectado_Fomento_4.readFeatures(json_Proyectado_Fomento_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proyectado_Fomento_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proyectado_Fomento_4.addFeatures(features_Proyectado_Fomento_4);
var lyr_Proyectado_Fomento_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Proyectado_Fomento_4, 
                style: style_Proyectado_Fomento_4,
                popuplayertitle: 'Proyectado_Fomento',
                interactive: true,
                title: '<img src="styles/legend/Proyectado_Fomento_4.png" /> Proyectado_Fomento'
            });
var format_EnlaceA3Ribarroja_Trazado_5 = new ol.format.GeoJSON();
var features_EnlaceA3Ribarroja_Trazado_5 = format_EnlaceA3Ribarroja_Trazado_5.readFeatures(json_EnlaceA3Ribarroja_Trazado_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnlaceA3Ribarroja_Trazado_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnlaceA3Ribarroja_Trazado_5.addFeatures(features_EnlaceA3Ribarroja_Trazado_5);
var lyr_EnlaceA3Ribarroja_Trazado_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnlaceA3Ribarroja_Trazado_5, 
                style: style_EnlaceA3Ribarroja_Trazado_5,
                popuplayertitle: 'Enlace A-3 Ribarroja_Trazado',
                interactive: true,
                title: '<img src="styles/legend/EnlaceA3Ribarroja_Trazado_5.png" /> Enlace A-3 Ribarroja_Trazado'
            });
var format_AdecuaCV_424_lineas_6 = new ol.format.GeoJSON();
var features_AdecuaCV_424_lineas_6 = format_AdecuaCV_424_lineas_6.readFeatures(json_AdecuaCV_424_lineas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdecuaCV_424_lineas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdecuaCV_424_lineas_6.addFeatures(features_AdecuaCV_424_lineas_6);
var lyr_AdecuaCV_424_lineas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdecuaCV_424_lineas_6, 
                style: style_AdecuaCV_424_lineas_6,
                popuplayertitle: 'AdecuaCV_424_lineas',
                interactive: true,
                title: '<img src="styles/legend/AdecuaCV_424_lineas_6.png" /> AdecuaCV_424_lineas'
            });
var format_RedNuevasConexionescopiar_7 = new ol.format.GeoJSON();
var features_RedNuevasConexionescopiar_7 = format_RedNuevasConexionescopiar_7.readFeatures(json_RedNuevasConexionescopiar_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedNuevasConexionescopiar_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedNuevasConexionescopiar_7.addFeatures(features_RedNuevasConexionescopiar_7);
var lyr_RedNuevasConexionescopiar_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedNuevasConexionescopiar_7, 
                style: style_RedNuevasConexionescopiar_7,
                popuplayertitle: 'Red Nuevas Conexiones copiar',
                interactive: true,
    title: 'Red Nuevas Conexiones copiar<br />\
    <img src="styles/legend/RedNuevasConexionescopiar_7_0.png" /> Ciclopeatonal<br />\
    <img src="styles/legend/RedNuevasConexionescopiar_7_1.png" /> Motorizado<br />' });
var format_SUsuelourbano_8 = new ol.format.GeoJSON();
var features_SUsuelourbano_8 = format_SUsuelourbano_8.readFeatures(json_SUsuelourbano_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUsuelourbano_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUsuelourbano_8.addFeatures(features_SUsuelourbano_8);
var lyr_SUsuelourbano_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUsuelourbano_8, 
                style: style_SUsuelourbano_8,
                popuplayertitle: 'SU - suelo urbano',
                interactive: true,
                title: '<img src="styles/legend/SUsuelourbano_8.png" /> SU - suelo urbano'
            });
var format_Sueloaobtener_Dotacional_9 = new ol.format.GeoJSON();
var features_Sueloaobtener_Dotacional_9 = format_Sueloaobtener_Dotacional_9.readFeatures(json_Sueloaobtener_Dotacional_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sueloaobtener_Dotacional_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sueloaobtener_Dotacional_9.addFeatures(features_Sueloaobtener_Dotacional_9);
var lyr_Sueloaobtener_Dotacional_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sueloaobtener_Dotacional_9, 
                style: style_Sueloaobtener_Dotacional_9,
                popuplayertitle: 'Suelo a obtener_Dotacional',
                interactive: true,
    title: 'Suelo a obtener_Dotacional<br />\
    <img src="styles/legend/Sueloaobtener_Dotacional_9_0.png" /> El Bosque-Entrepinos_centralid1<br />\
    <img src="styles/legend/Sueloaobtener_Dotacional_9_1.png" /> Jardín Rio Ebro<br />\
    <img src="styles/legend/Sueloaobtener_Dotacional_9_2.png" /> Los Miradores<br />\
    <img src="styles/legend/Sueloaobtener_Dotacional_9_3.png" /> Merendero Vista Alegre<br />\
    <img src="styles/legend/Sueloaobtener_Dotacional_9_4.png" /> Parque Canino "Laika"<br />\
    <img src="styles/legend/Sueloaobtener_Dotacional_9_5.png" /> Parque Cumbres de Calicanto<br />\
    <img src="styles/legend/Sueloaobtener_Dotacional_9_6.png" /> Parque Este (industrial)<br />\
    <img src="styles/legend/Sueloaobtener_Dotacional_9_7.png" /> PE Castillo de Chiva<br />\
    <img src="styles/legend/Sueloaobtener_Dotacional_9_8.png" /> <br />' });
var format_Sueloaobtener_VIALES_10 = new ol.format.GeoJSON();
var features_Sueloaobtener_VIALES_10 = format_Sueloaobtener_VIALES_10.readFeatures(json_Sueloaobtener_VIALES_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sueloaobtener_VIALES_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sueloaobtener_VIALES_10.addFeatures(features_Sueloaobtener_VIALES_10);
var lyr_Sueloaobtener_VIALES_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sueloaobtener_VIALES_10, 
                style: style_Sueloaobtener_VIALES_10,
                popuplayertitle: 'Suelo a obtener_VIALES',
                interactive: true,
    title: 'Suelo a obtener_VIALES<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_0.png" /> AR-R2.1<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_1.png" /> AR-R2.2<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_2.png" /> AR-R2.3<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_3.png" /> AR-R2.4<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_4.png" /> AR-R3<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_5.png" /> AR-R5.1<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_6.png" /> AR-R5.2<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_7.png" /> AR-R5.3<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_8.png" /> AR-T1<br />\
    <img src="styles/legend/Sueloaobtener_VIALES_10_9.png" /> <br />' });
var format_ConformacinAR_11 = new ol.format.GeoJSON();
var features_ConformacinAR_11 = format_ConformacinAR_11.readFeatures(json_ConformacinAR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConformacinAR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConformacinAR_11.addFeatures(features_ConformacinAR_11);
var lyr_ConformacinAR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConformacinAR_11, 
                style: style_ConformacinAR_11,
                popuplayertitle: 'Conformación AR',
                interactive: true,
    title: 'Conformación AR<br />\
    <img src="styles/legend/ConformacinAR_11_0.png" /> AR-IND1<br />\
    <img src="styles/legend/ConformacinAR_11_1.png" /> AR-IND2<br />\
    <img src="styles/legend/ConformacinAR_11_2.png" /> AR-IND3<br />\
    <img src="styles/legend/ConformacinAR_11_3.png" /> AR-IND4<br />\
    <img src="styles/legend/ConformacinAR_11_4.png" /> AR-R1.1<br />\
    <img src="styles/legend/ConformacinAR_11_5.png" /> AR-R1.2<br />\
    <img src="styles/legend/ConformacinAR_11_6.png" /> AR-R1.3<br />\
    <img src="styles/legend/ConformacinAR_11_7.png" /> AR-R2.1<br />\
    <img src="styles/legend/ConformacinAR_11_8.png" /> AR-R2.1b<br />\
    <img src="styles/legend/ConformacinAR_11_9.png" /> AR-R2.2<br />\
    <img src="styles/legend/ConformacinAR_11_10.png" /> AR-R2.2b<br />\
    <img src="styles/legend/ConformacinAR_11_11.png" /> AR-R2.3<br />\
    <img src="styles/legend/ConformacinAR_11_12.png" /> AR-R2.3b<br />\
    <img src="styles/legend/ConformacinAR_11_13.png" /> AR-R2.4<br />\
    <img src="styles/legend/ConformacinAR_11_14.png" /> AR-R3<br />\
    <img src="styles/legend/ConformacinAR_11_15.png" /> AR-R4.1<br />\
    <img src="styles/legend/ConformacinAR_11_16.png" /> AR-R4.2<br />\
    <img src="styles/legend/ConformacinAR_11_17.png" /> AR-R5.1<br />\
    <img src="styles/legend/ConformacinAR_11_18.png" /> AR-R5.2<br />\
    <img src="styles/legend/ConformacinAR_11_19.png" /> AR-R5.3<br />\
    <img src="styles/legend/ConformacinAR_11_20.png" /> AR-T1<br />\
    <img src="styles/legend/ConformacinAR_11_21.png" /> <br />' });
var format_SectoresSU_12 = new ol.format.GeoJSON();
var features_SectoresSU_12 = format_SectoresSU_12.readFeatures(json_SectoresSU_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectoresSU_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectoresSU_12.addFeatures(features_SectoresSU_12);
var lyr_SectoresSU_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectoresSU_12, 
                style: style_SectoresSU_12,
                popuplayertitle: 'Sectores SU',
                interactive: true,
    title: 'Sectores SU<br />\
    <img src="styles/legend/SectoresSU_12_0.png" /> ZUR-IN<br />\
    <img src="styles/legend/SectoresSU_12_1.png" /> ZUR-RE-A<br />\
    <img src="styles/legend/SectoresSU_12_2.png" /> ZUR-RE-B<br />\
    <img src="styles/legend/SectoresSU_12_3.png" /> ZUR-TR<br />' });
var format_SectoresSUZ_13 = new ol.format.GeoJSON();
var features_SectoresSUZ_13 = format_SectoresSUZ_13.readFeatures(json_SectoresSUZ_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SectoresSUZ_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SectoresSUZ_13.addFeatures(features_SectoresSUZ_13);
var lyr_SectoresSUZ_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SectoresSUZ_13, 
                style: style_SectoresSUZ_13,
                popuplayertitle: 'Sectores SUZ',
                interactive: true,
    title: 'Sectores SUZ<br />\
    <img src="styles/legend/SectoresSUZ_13_0.png" /> ZND-IN<br />\
    <img src="styles/legend/SectoresSUZ_13_1.png" /> ZND-RE-B<br />\
    <img src="styles/legend/SectoresSUZ_13_2.png" /> ZND-RE-M<br />\
    <img src="styles/legend/SectoresSUZ_13_3.png" /> ZND-TER<br />' });
var format_RedDotaciones_EQyZV_14 = new ol.format.GeoJSON();
var features_RedDotaciones_EQyZV_14 = format_RedDotaciones_EQyZV_14.readFeatures(json_RedDotaciones_EQyZV_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedDotaciones_EQyZV_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedDotaciones_EQyZV_14.addFeatures(features_RedDotaciones_EQyZV_14);
var lyr_RedDotaciones_EQyZV_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedDotaciones_EQyZV_14, 
                style: style_RedDotaciones_EQyZV_14,
                popuplayertitle: 'RedDotaciones_EQ y ZV',
                interactive: true,
    title: 'RedDotaciones_EQ y ZV<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_0.png" /> PQA<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_1.png" /> PQD-DEP<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_2.png" /> PQE-CUL<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_3.png" /> PQE-DOC<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_4.png" /> PQI<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_5.png" /> PQI-SEG<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_6.png" /> PCF<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_7.png" /> PQM<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_8.png" /> PQS<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_9.png" /> PQS-ASI<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_10.png" /> PQS-SAN<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_11.png" /> PVP<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_12.png" /> PVJ<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_13.png" /> PVP SNU<br />\
    <img src="styles/legend/RedDotaciones_EQyZV_14_14.png" /> <br />' });
var format_RPFerrocAVE_15 = new ol.format.GeoJSON();
var features_RPFerrocAVE_15 = format_RPFerrocAVE_15.readFeatures(json_RPFerrocAVE_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPFerrocAVE_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPFerrocAVE_15.addFeatures(features_RPFerrocAVE_15);
var lyr_RPFerrocAVE_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPFerrocAVE_15, 
                style: style_RPFerrocAVE_15,
                popuplayertitle: 'RPFerrocAVE',
                interactive: true,
                title: '<img src="styles/legend/RPFerrocAVE_15.png" /> RPFerrocAVE'
            });
var format_RPFerrocarriles_16 = new ol.format.GeoJSON();
var features_RPFerrocarriles_16 = format_RPFerrocarriles_16.readFeatures(json_RPFerrocarriles_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPFerrocarriles_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPFerrocarriles_16.addFeatures(features_RPFerrocarriles_16);
var lyr_RPFerrocarriles_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPFerrocarriles_16, 
                style: style_RPFerrocarriles_16,
                popuplayertitle: 'RPFerrocarriles',
                interactive: true,
                title: '<img src="styles/legend/RPFerrocarriles_16.png" /> RPFerrocarriles'
            });
var format_RPCarreteras_17 = new ol.format.GeoJSON();
var features_RPCarreteras_17 = format_RPCarreteras_17.readFeatures(json_RPCarreteras_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPCarreteras_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPCarreteras_17.addFeatures(features_RPCarreteras_17);
var lyr_RPCarreteras_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPCarreteras_17, 
                style: style_RPCarreteras_17,
                popuplayertitle: 'RP Carreteras',
                interactive: true,
                title: '<img src="styles/legend/RPCarreteras_17.png" /> RP Carreteras'
            });
var format_RPnuevasconexiones_18 = new ol.format.GeoJSON();
var features_RPnuevasconexiones_18 = format_RPnuevasconexiones_18.readFeatures(json_RPnuevasconexiones_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPnuevasconexiones_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPnuevasconexiones_18.addFeatures(features_RPnuevasconexiones_18);
var lyr_RPnuevasconexiones_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPnuevasconexiones_18, 
                style: style_RPnuevasconexiones_18,
                popuplayertitle: 'RP nuevas conexiones',
                interactive: true,
                title: '<img src="styles/legend/RPnuevasconexiones_18.png" /> RP nuevas conexiones'
            });
var format_Pozosagua_19 = new ol.format.GeoJSON();
var features_Pozosagua_19 = format_Pozosagua_19.readFeatures(json_Pozosagua_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pozosagua_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pozosagua_19.addFeatures(features_Pozosagua_19);
var lyr_Pozosagua_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pozosagua_19, 
                style: style_Pozosagua_19,
                popuplayertitle: 'Pozos agua',
                interactive: true,
                title: '<img src="styles/legend/Pozosagua_19.png" /> Pozos agua'
            });
var format_Perimetroproteccin300m_20 = new ol.format.GeoJSON();
var features_Perimetroproteccin300m_20 = format_Perimetroproteccin300m_20.readFeatures(json_Perimetroproteccin300m_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetroproteccin300m_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetroproteccin300m_20.addFeatures(features_Perimetroproteccin300m_20);
var lyr_Perimetroproteccin300m_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetroproteccin300m_20, 
                style: style_Perimetroproteccin300m_20,
                popuplayertitle: 'Perimetro protección 300m',
                interactive: true,
                title: '<img src="styles/legend/Perimetroproteccin300m_20.png" /> Perimetro protección 300m'
            });
var format_Puntosabastecimientoagua_21 = new ol.format.GeoJSON();
var features_Puntosabastecimientoagua_21 = format_Puntosabastecimientoagua_21.readFeatures(json_Puntosabastecimientoagua_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosabastecimientoagua_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosabastecimientoagua_21.addFeatures(features_Puntosabastecimientoagua_21);
var lyr_Puntosabastecimientoagua_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntosabastecimientoagua_21, 
                style: style_Puntosabastecimientoagua_21,
                popuplayertitle: 'Puntos abastecimiento agua',
                interactive: true,
                title: '<img src="styles/legend/Puntosabastecimientoagua_21.png" /> Puntos abastecimiento agua'
            });
var format_AreaafeccinCementerio_22 = new ol.format.GeoJSON();
var features_AreaafeccinCementerio_22 = format_AreaafeccinCementerio_22.readFeatures(json_AreaafeccinCementerio_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaafeccinCementerio_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaafeccinCementerio_22.addFeatures(features_AreaafeccinCementerio_22);
var lyr_AreaafeccinCementerio_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaafeccinCementerio_22, 
                style: style_AreaafeccinCementerio_22,
                popuplayertitle: 'Area afección Cementerio',
                interactive: true,
                title: '<img src="styles/legend/AreaafeccinCementerio_22.png" /> Area afección Cementerio'
            });
var format_DerechosMineros_23 = new ol.format.GeoJSON();
var features_DerechosMineros_23 = format_DerechosMineros_23.readFeatures(json_DerechosMineros_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DerechosMineros_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DerechosMineros_23.addFeatures(features_DerechosMineros_23);
var lyr_DerechosMineros_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DerechosMineros_23, 
                style: style_DerechosMineros_23,
                popuplayertitle: 'DerechosMineros',
                interactive: true,
                title: '<img src="styles/legend/DerechosMineros_23.png" /> DerechosMineros'
            });
var format_Ferroc_AristaExplanacion_24 = new ol.format.GeoJSON();
var features_Ferroc_AristaExplanacion_24 = format_Ferroc_AristaExplanacion_24.readFeatures(json_Ferroc_AristaExplanacion_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferroc_AristaExplanacion_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferroc_AristaExplanacion_24.addFeatures(features_Ferroc_AristaExplanacion_24);
var lyr_Ferroc_AristaExplanacion_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferroc_AristaExplanacion_24, 
                style: style_Ferroc_AristaExplanacion_24,
                popuplayertitle: 'Ferroc_AristaExplanacion',
                interactive: true,
                title: '<img src="styles/legend/Ferroc_AristaExplanacion_24.png" /> Ferroc_AristaExplanacion'
            });
var format_Ferroc_linCERCANIAS_25 = new ol.format.GeoJSON();
var features_Ferroc_linCERCANIAS_25 = format_Ferroc_linCERCANIAS_25.readFeatures(json_Ferroc_linCERCANIAS_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferroc_linCERCANIAS_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferroc_linCERCANIAS_25.addFeatures(features_Ferroc_linCERCANIAS_25);
var lyr_Ferroc_linCERCANIAS_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferroc_linCERCANIAS_25, 
                style: style_Ferroc_linCERCANIAS_25,
                popuplayertitle: 'Ferroc_linCERCANIAS',
                interactive: true,
                title: '<img src="styles/legend/Ferroc_linCERCANIAS_25.png" /> Ferroc_linCERCANIAS'
            });
var format_Ferroc_plataformaAVE_26 = new ol.format.GeoJSON();
var features_Ferroc_plataformaAVE_26 = format_Ferroc_plataformaAVE_26.readFeatures(json_Ferroc_plataformaAVE_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferroc_plataformaAVE_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferroc_plataformaAVE_26.addFeatures(features_Ferroc_plataformaAVE_26);
var lyr_Ferroc_plataformaAVE_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferroc_plataformaAVE_26, 
                style: style_Ferroc_plataformaAVE_26,
                popuplayertitle: 'Ferroc_plataformaAVE',
                interactive: true,
                title: '<img src="styles/legend/Ferroc_plataformaAVE_26.png" /> Ferroc_plataformaAVE'
            });
var format_Ferroc_linAVE_27 = new ol.format.GeoJSON();
var features_Ferroc_linAVE_27 = format_Ferroc_linAVE_27.readFeatures(json_Ferroc_linAVE_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferroc_linAVE_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferroc_linAVE_27.addFeatures(features_Ferroc_linAVE_27);
var lyr_Ferroc_linAVE_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferroc_linAVE_27, 
                style: style_Ferroc_linAVE_27,
                popuplayertitle: 'Ferroc_linAVE',
                interactive: true,
                title: '<img src="styles/legend/Ferroc_linAVE_27.png" /> Ferroc_linAVE'
            });
var format_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28 = new ol.format.GeoJSON();
var features_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28 = format_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28.readFeatures(json_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28.addFeatures(features_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28);
var lyr_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28, 
                style: style_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28,
                popuplayertitle: 'Transporte Enerias_Servicios e instalaciones - Serveis i instal·lacions ',
                interactive: true,
    title: 'Transporte Enerias_Servicios e instalaciones - Serveis i instal·lacions <br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_0.png" /> CONDUCCION DE ABASTECIMIENTO<br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_1.png" /> LINEA ELECTRICA<br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_2.png" /> TUBERIA SUPERFICIAL<br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_3.png" /> TUBERIA SUBTERRANEA<br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_4.png" /> LINEA ELECTRICA ALTA TENSION<br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_5.png" /> PISTA DE AEROPUERTO. AERODROMO<br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_6.png" /> ANDEN<br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_7.png" /> PUERTO, MUELLE, EMBARCADERO, PANTALAN<br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_8.png" /> PISTA DE COMPETICION<br />\
    <img src="styles/legend/TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28_9.png" /> CINTA TRANSPORTADORA<br />' });
var format_ServidGasoducto_29 = new ol.format.GeoJSON();
var features_ServidGasoducto_29 = format_ServidGasoducto_29.readFeatures(json_ServidGasoducto_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServidGasoducto_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidGasoducto_29.addFeatures(features_ServidGasoducto_29);
var lyr_ServidGasoducto_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidGasoducto_29, 
                style: style_ServidGasoducto_29,
                popuplayertitle: 'ServidGasoducto',
                interactive: true,
                title: '<img src="styles/legend/ServidGasoducto_29.png" /> ServidGasoducto'
            });
var format_ServidElectrica_30 = new ol.format.GeoJSON();
var features_ServidElectrica_30 = format_ServidElectrica_30.readFeatures(json_ServidElectrica_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ServidElectrica_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServidElectrica_30.addFeatures(features_ServidElectrica_30);
var lyr_ServidElectrica_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServidElectrica_30, 
                style: style_ServidElectrica_30,
                popuplayertitle: 'ServidElectrica',
                interactive: true,
                title: '<img src="styles/legend/ServidElectrica_30.png" /> ServidElectrica'
            });
var format_LinEdificacion_31 = new ol.format.GeoJSON();
var features_LinEdificacion_31 = format_LinEdificacion_31.readFeatures(json_LinEdificacion_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinEdificacion_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinEdificacion_31.addFeatures(features_LinEdificacion_31);
var lyr_LinEdificacion_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinEdificacion_31, 
                style: style_LinEdificacion_31,
                popuplayertitle: 'LinEdificacion',
                interactive: true,
                title: '<img src="styles/legend/LinEdificacion_31.png" /> LinEdificacion'
            });
var format_LinProteccion_32 = new ol.format.GeoJSON();
var features_LinProteccion_32 = format_LinProteccion_32.readFeatures(json_LinProteccion_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinProteccion_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinProteccion_32.addFeatures(features_LinProteccion_32);
var lyr_LinProteccion_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinProteccion_32, 
                style: style_LinProteccion_32,
                popuplayertitle: 'LinProteccion',
                interactive: true,
                title: '<img src="styles/legend/LinProteccion_32.png" /> LinProteccion'
            });
var format_LinServidumbre_33 = new ol.format.GeoJSON();
var features_LinServidumbre_33 = format_LinServidumbre_33.readFeatures(json_LinServidumbre_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinServidumbre_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinServidumbre_33.addFeatures(features_LinServidumbre_33);
var lyr_LinServidumbre_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinServidumbre_33, 
                style: style_LinServidumbre_33,
                popuplayertitle: 'LinServidumbre',
                interactive: true,
                title: '<img src="styles/legend/LinServidumbre_33.png" /> LinServidumbre'
            });
var format_LinDominioPublico_34 = new ol.format.GeoJSON();
var features_LinDominioPublico_34 = format_LinDominioPublico_34.readFeatures(json_LinDominioPublico_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LinDominioPublico_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LinDominioPublico_34.addFeatures(features_LinDominioPublico_34);
var lyr_LinDominioPublico_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LinDominioPublico_34, 
                style: style_LinDominioPublico_34,
                popuplayertitle: 'LinDominioPublico',
                interactive: true,
                title: '<img src="styles/legend/LinDominioPublico_34.png" /> LinDominioPublico'
            });
var format_BarrancosRiberas_35 = new ol.format.GeoJSON();
var features_BarrancosRiberas_35 = format_BarrancosRiberas_35.readFeatures(json_BarrancosRiberas_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BarrancosRiberas_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarrancosRiberas_35.addFeatures(features_BarrancosRiberas_35);
var lyr_BarrancosRiberas_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarrancosRiberas_35, 
                style: style_BarrancosRiberas_35,
                popuplayertitle: 'Barrancos Riberas',
                interactive: true,
                title: '<img src="styles/legend/BarrancosRiberas_35.png" /> Barrancos Riberas'
            });
var format_FlujopreferenteSNCZI_36 = new ol.format.GeoJSON();
var features_FlujopreferenteSNCZI_36 = format_FlujopreferenteSNCZI_36.readFeatures(json_FlujopreferenteSNCZI_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlujopreferenteSNCZI_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlujopreferenteSNCZI_36.addFeatures(features_FlujopreferenteSNCZI_36);
var lyr_FlujopreferenteSNCZI_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlujopreferenteSNCZI_36, 
                style: style_FlujopreferenteSNCZI_36,
                popuplayertitle: 'Flujo preferente SNCZI',
                interactive: true,
    title: 'Flujo preferente SNCZI<br />\
    <img src="styles/legend/FlujopreferenteSNCZI_36_0.png" /> Barrancos de Poyo y Saleta<br />\
    <img src="styles/legend/FlujopreferenteSNCZI_36_1.png" /> Rambla del Poyo, Barranco de Picassent y otros<br />\
    <img src="styles/legend/FlujopreferenteSNCZI_36_2.png" /> <br />' });
var format_DPHCartogrSNCZI_37 = new ol.format.GeoJSON();
var features_DPHCartogrSNCZI_37 = format_DPHCartogrSNCZI_37.readFeatures(json_DPHCartogrSNCZI_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DPHCartogrSNCZI_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DPHCartogrSNCZI_37.addFeatures(features_DPHCartogrSNCZI_37);
var lyr_DPHCartogrSNCZI_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DPHCartogrSNCZI_37, 
                style: style_DPHCartogrSNCZI_37,
                popuplayertitle: 'DPH Cartogr SNCZI',
                interactive: true,
    title: 'DPH Cartogr SNCZI<br />\
    <img src="styles/legend/DPHCartogrSNCZI_37_0.png" /> Dominio Púbico Hidraúlico<br />\
    <img src="styles/legend/DPHCartogrSNCZI_37_1.png" /> Zona de Policía (100m)<br />\
    <img src="styles/legend/DPHCartogrSNCZI_37_2.png" /> Zona de Servidumbre (5m)<br />\
    <img src="styles/legend/DPHCartogrSNCZI_37_3.png" /> <br />' });
var format_BICs_BRLs_38 = new ol.format.GeoJSON();
var features_BICs_BRLs_38 = format_BICs_BRLs_38.readFeatures(json_BICs_BRLs_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BICs_BRLs_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BICs_BRLs_38.addFeatures(features_BICs_BRLs_38);
var lyr_BICs_BRLs_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BICs_BRLs_38, 
                style: style_BICs_BRLs_38,
                popuplayertitle: 'BICs_BRLs',
                interactive: true,
    title: 'BICs_BRLs<br />\
    <img src="styles/legend/BICs_BRLs_38_0.png" /> BIC<br />\
    <img src="styles/legend/BICs_BRLs_38_1.png" /> BIC-Yacim?<br />\
    <img src="styles/legend/BICs_BRLs_38_2.png" /> BIC-Yacimi<br />\
    <img src="styles/legend/BICs_BRLs_38_3.png" /> BRL<br />\
    <img src="styles/legend/BICs_BRLs_38_4.png" /> <br />' });
var format_ViasPecuarias_39 = new ol.format.GeoJSON();
var features_ViasPecuarias_39 = format_ViasPecuarias_39.readFeatures(json_ViasPecuarias_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViasPecuarias_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViasPecuarias_39.addFeatures(features_ViasPecuarias_39);
var lyr_ViasPecuarias_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ViasPecuarias_39, 
                style: style_ViasPecuarias_39,
                popuplayertitle: 'Vias Pecuarias',
                interactive: true,
                title: '<img src="styles/legend/ViasPecuarias_39.png" /> Vias Pecuarias'
            });
var format_PATFOR_40 = new ol.format.GeoJSON();
var features_PATFOR_40 = format_PATFOR_40.readFeatures(json_PATFOR_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PATFOR_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATFOR_40.addFeatures(features_PATFOR_40);
var lyr_PATFOR_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PATFOR_40, 
                style: style_PATFOR_40,
                popuplayertitle: 'PATFOR',
                interactive: true,
                title: '<img src="styles/legend/PATFOR_40.png" /> PATFOR'
            });
var format_MontesCatalogados_41 = new ol.format.GeoJSON();
var features_MontesCatalogados_41 = format_MontesCatalogados_41.readFeatures(json_MontesCatalogados_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MontesCatalogados_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MontesCatalogados_41.addFeatures(features_MontesCatalogados_41);
var lyr_MontesCatalogados_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MontesCatalogados_41, 
                style: style_MontesCatalogados_41,
                popuplayertitle: 'Montes Catalogados',
                interactive: true,
                title: '<img src="styles/legend/MontesCatalogados_41.png" /> Montes Catalogados'
            });
var format_EspacioNaturalSimadelasPalomas_42 = new ol.format.GeoJSON();
var features_EspacioNaturalSimadelasPalomas_42 = format_EspacioNaturalSimadelasPalomas_42.readFeatures(json_EspacioNaturalSimadelasPalomas_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspacioNaturalSimadelasPalomas_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspacioNaturalSimadelasPalomas_42.addFeatures(features_EspacioNaturalSimadelasPalomas_42);
var lyr_EspacioNaturalSimadelasPalomas_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspacioNaturalSimadelasPalomas_42, 
                style: style_EspacioNaturalSimadelasPalomas_42,
                popuplayertitle: 'Espacio Natural-Sima de las Palomas',
                interactive: true,
                title: '<img src="styles/legend/EspacioNaturalSimadelasPalomas_42.png" /> Espacio Natural-Sima de las Palomas'
            });
var format_Microreservas_43 = new ol.format.GeoJSON();
var features_Microreservas_43 = format_Microreservas_43.readFeatures(json_Microreservas_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Microreservas_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Microreservas_43.addFeatures(features_Microreservas_43);
var lyr_Microreservas_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Microreservas_43, 
                style: style_Microreservas_43,
                popuplayertitle: 'Microreservas',
                interactive: true,
                title: '<img src="styles/legend/Microreservas_43.png" /> Microreservas'
            });
var format_CastillodeChivaPlanEspecialdeProteccin_44 = new ol.format.GeoJSON();
var features_CastillodeChivaPlanEspecialdeProteccin_44 = format_CastillodeChivaPlanEspecialdeProteccin_44.readFeatures(json_CastillodeChivaPlanEspecialdeProteccin_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CastillodeChivaPlanEspecialdeProteccin_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CastillodeChivaPlanEspecialdeProteccin_44.addFeatures(features_CastillodeChivaPlanEspecialdeProteccin_44);
var lyr_CastillodeChivaPlanEspecialdeProteccin_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CastillodeChivaPlanEspecialdeProteccin_44, 
                style: style_CastillodeChivaPlanEspecialdeProteccin_44,
                popuplayertitle: 'Castillo de Chiva-Plan Especial de Protección',
                interactive: true,
    title: 'Castillo de Chiva-Plan Especial de Protección<br />\
    <img src="styles/legend/CastillodeChivaPlanEspecialdeProteccin_44_0.png" /> Delimitacion BIC<br />\
    <img src="styles/legend/CastillodeChivaPlanEspecialdeProteccin_44_1.png" /> Ámbito PE<br />\
    <img src="styles/legend/CastillodeChivaPlanEspecialdeProteccin_44_2.png" /> <br />' });
var format_PEDelimitacionNHT_45 = new ol.format.GeoJSON();
var features_PEDelimitacionNHT_45 = format_PEDelimitacionNHT_45.readFeatures(json_PEDelimitacionNHT_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEDelimitacionNHT_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEDelimitacionNHT_45.addFeatures(features_PEDelimitacionNHT_45);
var lyr_PEDelimitacionNHT_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEDelimitacionNHT_45, 
                style: style_PEDelimitacionNHT_45,
                popuplayertitle: 'PE Delimitacion NHT',
                interactive: true,
                title: '<img src="styles/legend/PEDelimitacionNHT_45.png" /> PE Delimitacion NHT'
            });
var format_PlaneamientoVigente_46 = new ol.format.GeoJSON();
var features_PlaneamientoVigente_46 = format_PlaneamientoVigente_46.readFeatures(json_PlaneamientoVigente_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlaneamientoVigente_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlaneamientoVigente_46.addFeatures(features_PlaneamientoVigente_46);
var lyr_PlaneamientoVigente_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlaneamientoVigente_46, 
                style: style_PlaneamientoVigente_46,
                popuplayertitle: 'Planeamiento Vigente',
                interactive: true,
    title: 'Planeamiento Vigente<br />\
    <img src="styles/legend/PlaneamientoVigente_46_0.png" /> ZUR-NHT<br />\
    <img src="styles/legend/PlaneamientoVigente_46_1.png" /> ZUR-RE-AD<br />\
    <img src="styles/legend/PlaneamientoVigente_46_2.png" /> ZUR-RE-BD<br />\
    <img src="styles/legend/PlaneamientoVigente_46_3.png" /> ZND-RE-BD<br />\
    <img src="styles/legend/PlaneamientoVigente_46_4.png" /> ZUR-IN<br />\
    <img src="styles/legend/PlaneamientoVigente_46_5.png" /> ZUR-TR<br />\
    <img src="styles/legend/PlaneamientoVigente_46_6.png" /> ZND-IN<br />\
    <img src="styles/legend/PlaneamientoVigente_46_7.png" /> ZRP-CR<br />\
    <img src="styles/legend/PlaneamientoVigente_46_8.png" /> ZRP-DP<br />\
    <img src="styles/legend/PlaneamientoVigente_46_9.png" /> ZRP-NA-MU<br />\
    <img src="styles/legend/PlaneamientoVigente_46_10.png" /> ZRP-RP<br />\
    <img src="styles/legend/PlaneamientoVigente_46_11.png" /> ZRP-AG<br />\
    <img src="styles/legend/PlaneamientoVigente_46_12.png" /> ZRC-AG<br />' });
var format_DANA2024ZonasInundadasHuellaInundacion_47 = new ol.format.GeoJSON();
var features_DANA2024ZonasInundadasHuellaInundacion_47 = format_DANA2024ZonasInundadasHuellaInundacion_47.readFeatures(json_DANA2024ZonasInundadasHuellaInundacion_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANA2024ZonasInundadasHuellaInundacion_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANA2024ZonasInundadasHuellaInundacion_47.addFeatures(features_DANA2024ZonasInundadasHuellaInundacion_47);
var lyr_DANA2024ZonasInundadasHuellaInundacion_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANA2024ZonasInundadasHuellaInundacion_47, 
                style: style_DANA2024ZonasInundadasHuellaInundacion_47,
                popuplayertitle: 'DANA2024.Zonas Inundadas. Huella Inundacion',
                interactive: true,
                title: '<img src="styles/legend/DANA2024ZonasInundadasHuellaInundacion_47.png" /> DANA2024.Zonas Inundadas. Huella Inundacion'
            });
var format_LmiteTrminoMunicipalChiva_48 = new ol.format.GeoJSON();
var features_LmiteTrminoMunicipalChiva_48 = format_LmiteTrminoMunicipalChiva_48.readFeatures(json_LmiteTrminoMunicipalChiva_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmiteTrminoMunicipalChiva_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmiteTrminoMunicipalChiva_48.addFeatures(features_LmiteTrminoMunicipalChiva_48);
var lyr_LmiteTrminoMunicipalChiva_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteTrminoMunicipalChiva_48, 
                style: style_LmiteTrminoMunicipalChiva_48,
                popuplayertitle: 'Límite Término Municipal Chiva',
                interactive: true,
                title: '<img src="styles/legend/LmiteTrminoMunicipalChiva_48.png" /> Límite Término Municipal Chiva'
            });
var group_RegistroDANA2024 = new ol.layer.Group({
                                layers: [lyr_DANA2024ZonasInundadasHuellaInundacion_47,],
                                fold: 'open',
                                title: 'Registro DANA 2024'});
// Include Registro DANA 2024 inside INFORMACIÓN (legend only)
var group_INFORMACIN = new ol.layer.Group({
                                layers: [lyr_PlaneamientoVigente_46, group_RegistroDANA2024],
                                fold: 'open',
                                title: 'INFORMACIÓN'});
var group_PROTECCIONES = new ol.layer.Group({
                                layers: [lyr_BICs_BRLs_38,lyr_ViasPecuarias_39,lyr_PATFOR_40,lyr_MontesCatalogados_41,lyr_EspacioNaturalSimadelasPalomas_42,lyr_Microreservas_43,lyr_CastillodeChivaPlanEspecialdeProteccin_44,lyr_PEDelimitacionNHT_45,],
                                fold: 'close',
                                title: 'PROTECCIONES'});
var group_CAUCESyRIBERAS = new ol.layer.Group({
                                layers: [lyr_BarrancosRiberas_35,lyr_FlujopreferenteSNCZI_36,lyr_DPHCartogrSNCZI_37,],
                                fold: 'close',
                                title: 'CAUCES y RIBERAS'});
// AFECCIONES TERRITORIALES will contain several subgroups (legend nesting)
var group_AFECCIONESTERRITORIALES = new ol.layer.Group({
                                layers: [lyr_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28,lyr_ServidGasoducto_29,lyr_ServidElectrica_30,lyr_LinEdificacion_31,lyr_LinProteccion_32,lyr_LinServidumbre_33,lyr_LinDominioPublico_34,],
                                fold: 'close',
                                title: 'AFECCIONES TERRITORIALES'});
var group_Ferrocarriles = new ol.layer.Group({
                                layers: [lyr_Ferroc_AristaExplanacion_24,lyr_Ferroc_linCERCANIAS_25,lyr_Ferroc_plataformaAVE_26,lyr_Ferroc_linAVE_27,],
                                fold: 'open',
                                title: 'Ferrocarriles'});
var group_Otrasafecciones = new ol.layer.Group({
                                layers: [lyr_Pozosagua_19,lyr_Perimetroproteccin300m_20,lyr_Puntosabastecimientoagua_21,lyr_AreaafeccinCementerio_22,lyr_DerechosMineros_23,],
                                fold: 'open',
                                title: 'Otras afecciones'});
// Nest CAUCES y RIBERAS, Ferrocarriles and Otras afecciones inside AFECCIONES TERRITORIALES
group_AFECCIONESTERRITORIALES.getLayers().push(group_CAUCESyRIBERAS);
group_AFECCIONESTERRITORIALES.getLayers().push(group_Ferrocarriles);
group_AFECCIONESTERRITORIALES.getLayers().push(group_Otrasafecciones);
var group_REDPRIMARIA = new ol.layer.Group({
                                layers: [lyr_RedDotaciones_EQyZV_14,lyr_RPFerrocAVE_15,lyr_RPFerrocarriles_16,lyr_RPCarreteras_17,lyr_RPnuevasconexiones_18,],
                                fold: 'open',
                                title: 'RED PRIMARIA'});
var group_CLASIFICACIN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CLASIFICACIÓN'});
var group_SECTORES = new ol.layer.Group({
                                layers: [lyr_SectoresSU_12,lyr_SectoresSUZ_13,],
                                fold: 'close',
                                title: 'SECTORES'});
var group_REASDEREPARTO = new ol.layer.Group({
                                layers: [lyr_RedNuevasConexionescopiar_7,lyr_SUsuelourbano_8,lyr_Sueloaobtener_Dotacional_9,lyr_Sueloaobtener_VIALES_10,lyr_ConformacinAR_11,],
                                fold: 'close',
                                title: 'ÁREAS DE REPARTO'});
var group_PROYECTOSDEINFRAESTRUCTURAVIARIA = new ol.layer.Group({
                                layers: [lyr_TrazadoPropuesto_Municipal_3,lyr_Proyectado_Fomento_4,lyr_EnlaceA3Ribarroja_Trazado_5,lyr_AdecuaCV_424_lineas_6,],
                                fold: 'close',
                                title: 'PROYECTOS DE INFRAESTRUCTURA VIARIA'});

// Default visibility: keep only OpenStreetMap and ZONIFICACIÓN ESTRUCTURAL visible on load
lyr_Catastro_0.setVisible(false);
lyr_OpenStreetMap_1.setVisible(true);
lyr_ZONIFICACINESTRUCTURAL_2.setVisible(true);
lyr_TrazadoPropuesto_Municipal_3.setVisible(false);
lyr_Proyectado_Fomento_4.setVisible(false);
lyr_EnlaceA3Ribarroja_Trazado_5.setVisible(false);
lyr_AdecuaCV_424_lineas_6.setVisible(false);
lyr_RedNuevasConexionescopiar_7.setVisible(false);
lyr_SUsuelourbano_8.setVisible(false);
lyr_Sueloaobtener_Dotacional_9.setVisible(false);
lyr_Sueloaobtener_VIALES_10.setVisible(false);
lyr_ConformacinAR_11.setVisible(false);
lyr_SectoresSU_12.setVisible(false);
lyr_SectoresSUZ_13.setVisible(false);
lyr_RedDotaciones_EQyZV_14.setVisible(false);
lyr_RPFerrocAVE_15.setVisible(false);
lyr_RPFerrocarriles_16.setVisible(false);
lyr_RPCarreteras_17.setVisible(false);
lyr_RPnuevasconexiones_18.setVisible(false);
lyr_Pozosagua_19.setVisible(false);
lyr_Perimetroproteccin300m_20.setVisible(false);
lyr_Puntosabastecimientoagua_21.setVisible(false);
lyr_AreaafeccinCementerio_22.setVisible(false);
lyr_DerechosMineros_23.setVisible(false);
lyr_Ferroc_AristaExplanacion_24.setVisible(false);
lyr_Ferroc_linCERCANIAS_25.setVisible(false);
lyr_Ferroc_plataformaAVE_26.setVisible(false);
lyr_Ferroc_linAVE_27.setVisible(false);
lyr_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28.setVisible(false);
lyr_ServidGasoducto_29.setVisible(false);
lyr_ServidElectrica_30.setVisible(false);
lyr_LinEdificacion_31.setVisible(false);
lyr_LinProteccion_32.setVisible(false);
lyr_LinServidumbre_33.setVisible(false);
lyr_LinDominioPublico_34.setVisible(false);
lyr_BarrancosRiberas_35.setVisible(false);
lyr_FlujopreferenteSNCZI_36.setVisible(false);
lyr_DPHCartogrSNCZI_37.setVisible(false);
lyr_BICs_BRLs_38.setVisible(false);
lyr_ViasPecuarias_39.setVisible(false);
lyr_PATFOR_40.setVisible(false);
lyr_MontesCatalogados_41.setVisible(false);
lyr_EspacioNaturalSimadelasPalomas_42.setVisible(false);
lyr_Microreservas_43.setVisible(false);
lyr_CastillodeChivaPlanEspecialdeProteccin_44.setVisible(false);
lyr_PEDelimitacionNHT_45.setVisible(false);
lyr_PlaneamientoVigente_46.setVisible(false);
lyr_DANA2024ZonasInundadasHuellaInundacion_47.setVisible(false);
lyr_LmiteTrminoMunicipalChiva_48.setVisible(true);
lyr_GoogleSatellite_49.setVisible(false);
// Top-level layers list: we moved some groups into others so remove them from top-level
var layersList = [
    // Google Satellite as background: first in the layers array so it is drawn below others
    lyr_GoogleSatellite_49,
    lyr_Catastro_0,
    lyr_OpenStreetMap_1,
    lyr_ZONIFICACINESTRUCTURAL_2,
    group_PROYECTOSDEINFRAESTRUCTURAVIARIA,
    group_REASDEREPARTO,
    group_SECTORES,
    group_REDPRIMARIA,
    group_AFECCIONESTERRITORIALES,
    group_PROTECCIONES,
    group_INFORMACIN,
    lyr_LmiteTrminoMunicipalChiva_48
];
lyr_ZONIFICACINESTRUCTURAL_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Clas Actua': 'Clas Actua', 'Clas_Suelo': 'Clas_Suelo', 'Nombre': 'Nombre', 'Consolidad': 'Consolidad', 'Uso': 'Uso', 'Regulacion': 'Regulacion', 'Zon_Suelo': 'Zon_Suelo', 'Coment urb': 'Coment urb', 'urb-calif': 'urb-calif', 'CPM': 'CPM', 'Superfic C': 'Superfic C', 'Municipio': 'Municipio', 'Descri_zon': 'Descri_zon', });
lyr_TrazadoPropuesto_Municipal_3.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_Proyectado_Fomento_4.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_EnlaceA3Ribarroja_Trazado_5.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_AdecuaCV_424_lineas_6.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', });
lyr_RedNuevasConexionescopiar_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Clase': 'Clase', 'Tramo': 'Tramo', 'Alternativ': 'Alternativ', });
lyr_SUsuelourbano_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Clas Actua': 'Clas Actua', 'Clas_Suelo': 'Clas_Suelo', 'Nombre': 'Nombre', 'Consolidad': 'Consolidad', 'Uso': 'Uso', 'Regulacion': 'Regulacion', 'Zon_Suelo': 'Zon_Suelo', 'Coment urb': 'Coment urb', 'urb-calif': 'urb-calif', 'CPM': 'CPM', 'Superfic C': 'Superfic C', 'Municipio': 'Municipio', 'Descri_zon': 'Descri_zon', });
lyr_Sueloaobtener_Dotacional_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Clas Actua': 'Clas Actua', 'Clas_Suelo': 'Clas_Suelo', 'Nombre': 'Nombre', 'Uso': 'Uso', 'Zon_Suelo': 'Zon_Suelo', 'Superfic C': 'Superfic C', 'Dotac': 'Dotac', 'Localizac': 'Localizac', });
lyr_Sueloaobtener_VIALES_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Clase': 'Clase', 'Tramo': 'Tramo', 'LONG': 'LONG', 'Adscrito a': 'Adscrito a', });
lyr_ConformacinAR_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Clas_Suelo': 'Clas_Suelo', 'Nombre': 'Nombre', 'Uso': 'Uso', 'Zon_Suelo': 'Zon_Suelo', 'Superfic C': 'Superfic C', 'Nom Sector': 'Nom Sector', 'AR': 'AR', });
lyr_SectoresSU_12.set('fieldAliases', {'id': 'id', 'Clas Actua': 'Clas Actua', 'Clas_Suelo': 'Clas_Suelo', 'Superficie': 'Superficie', 'Nombre': 'Nombre', 'Consolidad': 'Consolidad', 'Uso': 'Uso', 'Regulacion': 'Regulacion', 'Zon_Suelo': 'Zon_Suelo', 'Coment urb': 'Coment urb', 'urb-calif': 'urb-calif', 'CPM': 'CPM', 'Superfic C': 'Superfic C', 'Municipio': 'Municipio', 'Descri_zon': 'Descri_zon', 'Nombre Sec': 'Nombre Sec', 'Aprobado': 'Aprobado', 'Edificabil': 'Edificabil', 'Superf amb': 'Superf amb', 'OE-Sec_Zon': 'OE-Sec_Zon', 'OP-UE pend': 'OP-UE pend', 'PlaneamAsu': 'PlaneamAsu', 'Uso-estado': 'Uso-estado', });
lyr_SectoresSUZ_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Clas Actua': 'Clas Actua', 'Clas_Suelo': 'Clas_Suelo', 'Nombre': 'Nombre', 'Consolidad': 'Consolidad', 'Uso': 'Uso', 'Regulacion': 'Regulacion', 'Zon_Suelo': 'Zon_Suelo', 'Coment urb': 'Coment urb', 'urb-calif': 'urb-calif', 'CPM': 'CPM', 'Superfic C': 'Superfic C', 'Municipio': 'Municipio', 'Nom Sector': 'Nom Sector', });
lyr_RedDotaciones_EQyZV_14.set('fieldAliases', {'qc_id': 'qc_id', 'clas_suelo': 'clas_suelo', 'nombre': 'nombre', 'uso': 'uso', 'zon_suelo': 'zon_suelo', 'superfic c': 'superfic c', 'dotac': 'dotac', });
lyr_RPFerrocAVE_15.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'Nombre': 'Nombre', });
lyr_RPFerrocarriles_16.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'Nombre': 'Nombre', });
lyr_RPCarreteras_17.set('fieldAliases', {'modificado': 'modificado', 'n_plat': 'n_plat', 'length': 'length', 'long': 'long', 'nom_ant': 'nom_ant', 'nom_act': 'nom_act', 'nom_fut': 'nom_fut', 'tit_ant': 'tit_ant', 'tit_act': 'tit_act', 'tit_fut': 'tit_fut', 'tipus_ant': 'tipus_ant', 'tipus_act': 'tipus_act', 'tipus_fut': 'tipus_fut', 'lleg_act': 'lleg_act', 'lleg_fut': 'lleg_fut', 'rotonda': 'rotonda', 'sentidos': 'sentidos', 'sec_cons': 'sec_cons', 'tunel': 'tunel', 'id_tunel': 'id_tunel', 'lleg_wms': 'lleg_wms', 'fecha_mod': 'fecha_mod', 'fecha_ent': 'fecha_ent', 'fecha_sal': 'fecha_sal', 'act': 'act', 'gran_cap': 'gran_cap', 'tipus_des': 'tipus_des', 'tit_des': 'tit_des', 'tunel_des': 'tunel_des', 'rotond_des': 'rotond_des', 'shape_Leng': 'shape_Leng', });
lyr_RPnuevasconexiones_18.set('fieldAliases', {'id': 'id', 'Clase': 'Clase', 'Tramo': 'Tramo', 'Alternativ': 'Alternativ', });
lyr_Pozosagua_19.set('fieldAliases', {'id': 'id', });
lyr_Perimetroproteccin300m_20.set('fieldAliases', {'n orden': 'n orden', 'x': 'x', 'y': 'y', 'Tipo': 'Tipo', 'Clave': 'Clave', });
lyr_Puntosabastecimientoagua_21.set('fieldAliases', {'n orden': 'n orden', 'x': 'x', 'y': 'y', 'Tipo': 'Tipo', 'Clave': 'Clave', });
lyr_AreaafeccinCementerio_22.set('fieldAliases', {'id': 'id', 'Clas Actua': 'Clas Actua', 'Clas_Suelo': 'Clas_Suelo', 'Superficie': 'Superficie', 'Nombre': 'Nombre', 'Consolidad': 'Consolidad', 'Uso': 'Uso', 'Regulacion': 'Regulacion', 'Zon_Suelo': 'Zon_Suelo', 'Coment urb': 'Coment urb', 'urb-calif': 'urb-calif', 'CPM': 'CPM', 'Superfic C': 'Superfic C', 'Municipio': 'Municipio', 'Descripcio': 'Descripcio', 'Dotac': 'Dotac', 'Descr_dot': 'Descr_dot', });
lyr_DerechosMineros_23.set('fieldAliases', {'Nombre': 'Nombre', 'Empresa': 'Empresa', 'Organismo': 'Organismo', 'Sit. Gral': 'Sit. Gral', 'Tipo': 'Tipo', 'Fraccion': 'Fraccion', 'N Registro': 'N Registro', 'Sustancia': 'Sustancia', 'Superficie': 'Superficie', 'Uds': 'Uds', 'Seccion': 'Seccion', });
lyr_Ferroc_AristaExplanacion_24.set('fieldAliases', {'id': 'id', });
lyr_Ferroc_linCERCANIAS_25.set('fieldAliases', {'id': 'id', });
lyr_Ferroc_plataformaAVE_26.set('fieldAliases', {'id': 'id', });
lyr_Ferroc_linAVE_27.set('fieldAliases', {'id': 'id', });
lyr_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28.set('fieldAliases', {'ficha': 'ficha', 'clave_top': 'clave_top', 'texto': 'texto', });
lyr_ServidGasoducto_29.set('fieldAliases', {'dxf_layer': 'dxf_layer', 'shape_Leng': 'shape_Leng', });
lyr_ServidElectrica_30.set('fieldAliases', {'ficha': 'ficha', 'clave_top': 'clave_top', 'texto': 'texto', });
lyr_LinEdificacion_31.set('fieldAliases', {'id': 'id', });
lyr_LinProteccion_32.set('fieldAliases', {'modificado': 'modificado', 'n_plat': 'n_plat', 'length': 'length', 'long': 'long', 'nom_ant': 'nom_ant', 'nom_act': 'nom_act', 'nom_fut': 'nom_fut', 'tit_ant': 'tit_ant', 'tit_act': 'tit_act', 'tit_fut': 'tit_fut', 'tipus_ant': 'tipus_ant', 'tipus_act': 'tipus_act', 'tipus_fut': 'tipus_fut', 'lleg_act': 'lleg_act', 'lleg_fut': 'lleg_fut', 'rotonda': 'rotonda', 'sentidos': 'sentidos', 'sec_cons': 'sec_cons', 'tunel': 'tunel', 'id_tunel': 'id_tunel', 'lleg_wms': 'lleg_wms', 'fecha_mod': 'fecha_mod', 'fecha_ent': 'fecha_ent', 'fecha_sal': 'fecha_sal', 'act': 'act', 'gran_cap': 'gran_cap', 'tramo_imd': 'tramo_imd', 'tipus_des': 'tipus_des', 'tit_des': 'tit_des', 'tunel_des': 'tunel_des', 'rotond_des': 'rotond_des', 'shape_Leng': 'shape_Leng', });
lyr_LinServidumbre_33.set('fieldAliases', {'id': 'id', });
lyr_LinDominioPublico_34.set('fieldAliases', {'id': 'id', });
lyr_BarrancosRiberas_35.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', });
lyr_FlujopreferenteSNCZI_36.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Cauce': 'Cauce', 'Caudal (m3': 'Caudal (m3', 'Clave expe': 'Clave expe', 'Demarcaci�': 'Demarcaci�', 'Documento': 'Documento', 'Escala rep': 'Escala rep', 'Estudio': 'Estudio', 'Fecha docu': 'Fecha docu', 'Id. Demarc': 'Id. Demarc', 'Id. Zona': 'Id. Zona', 'Longitud (': 'Longitud (', 'Método hi': 'Método hi', 'Método _1': 'Método _1', 'Nombre zon': 'Nombre zon', 'Organismo': 'Organismo', 'Precisión': 'Precisión', 'Tipo estud': 'Tipo estud', 'Tipo zona': 'Tipo zona', });
lyr_DPHCartogrSNCZI_37.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID_ZONA': 'ID_ZONA', 'ZONA': 'ZONA', 'TIPO_ZONA': 'TIPO_ZONA', 'RIO': 'RIO', 'LONG_KM': 'LONG_KM', 'HIPOTESIS': 'HIPOTESIS', 'HIDROLOGIA': 'HIDROLOGIA', 'PRECISION': 'PRECISION', 'HIDRAUL': 'HIDRAUL', 'ESTUDIO': 'ESTUDIO', 'TIPO_EST': 'TIPO_EST', 'ESCALA_REP': 'ESCALA_REP', 'DOCUMENTO': 'DOCUMENTO', 'FECHA': 'FECHA', 'ORGANISMO': 'ORGANISMO', 'CLAVE_EXPE': 'CLAVE_EXPE', 'DEMARCACIO': 'DEMARCACIO', 'ID_DEMAR': 'ID_DEMAR', 'Q_M3_S': 'Q_M3_S', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BICs_BRLs_38.set('fieldAliases', {'id': 'id', 'Secc/Catal': 'Secc/Catal', 'Denominaci': 'Denominaci', 'Tipo': 'Tipo', 'IGPCV': 'IGPCV', 'GVA': 'GVA', });
lyr_ViasPecuarias_39.set('fieldAliases', {'cod1': 'cod1', 'cod2': 'cod2', 'cod3': 'cod3', 'cod4': 'cod4', 'cod_vp': 'cod_vp', 'tipo_vp': 'tipo_vp', 'aproba_1': 'aproba_1', 'aproba_2': 'aproba_2', 'boe_1': 'boe_1', 'boe_2': 'boe_2', 'bop_1': 'bop_1', 'bop_2': 'bop_2', 'dogv_1': 'dogv_1', 'dogv_2': 'dogv_2', 'provincia': 'provincia', 'munic_1': 'munic_1', 'munic_2': 'munic_2', 'deslinde': 'deslinde', 'mojon': 'mojon', 'legal_1': 'legal_1', 'legal_2': 'legal_2', 'neces': 'neces', 'nomb_vp': 'nomb_vp', 'obser_vp': 'obser_vp', 'long_c_1': 'long_c_1', 'long_c_2': 'long_c_2', 'sup_vp_1': 'sup_vp_1', 'sup_vp_2': 'sup_vp_2', 'tipo_leyen': 'tipo_leyen', 'long_desli': 'long_desli', 'revisado': 'revisado', 'hyperlink': 'hyperlink', 'shape_Leng': 'shape_Leng', });
lyr_PATFOR_40.set('fieldAliases', {'produc': 'produc', 'aridez': 'aridez', 'cabecera': 'cabecera', 'monte': 'monte', 'sup_ha': 'sup_ha', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_MontesCatalogados_41.set('fieldAliases', {'texto': 'texto', 'num_up': 'num_up', 'etiquetas': 'etiquetas', 'denominaci': 'denominaci', 'tipo': 'tipo', 'df': 'df', 'deslinde': 'deslinde', 'amojonamie': 'amojonamie', 'perimetro': 'perimetro', 'hectareas': 'hectareas', 'sumasuperf': 'sumasuperf', 'municipio': 'municipio', 'cup': 'cup', 'area_del_c': 'area_del_c', 'superfbase': 'superfbase', 'porn_afecc': 'porn_afecc', 'carpeta': 'carpeta', 'carpetacma': 'carpetacma', 'pertenen_1': 'pertenen_1', 'escan_expd': 'escan_expd', 'infor_resu': 'infor_resu', 'num_consul': 'num_consul', 'arbolfn3': 'arbolfn3', 'info_res_a': 'info_res_a', 'revis_cart': 'revis_cart', 'comar_cast': 'comar_cast', 'comar_val': 'comar_val', 'provincia': 'provincia', 'rev_comple': 'rev_comple', 'pertenen_2': 'pertenen_2', 'denomdesl': 'denomdesl', 'etiquekml': 'etiquekml', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_EspacioNaturalSimadelasPalomas_42.set('fieldAliases', {'nombre': 'nombre', 'municipio': 'municipio', 'comarca': 'comarca', 'provincia': 'provincia', 'z': 'z', 'coord__utm': 'coord__utm', 'x_coord': 'x_coord', 'y_coord': 'y_coord', 'decreto': 'decreto', 'dogv': 'dogv', 'fecha': 'fecha', 'correccion': 'correccion', 'id': 'id', 'nom_ficha': 'nom_ficha', 'x_50': 'x_50', 'y_50': 'y_50', 'leg_link': 'leg_link', 'localid': 'localid', 'namespace': 'namespace', 'legfoudate': 'legfoudate', 'titledoc': 'titledoc', 'datedoc': 'datedoc', 'urldoc': 'urldoc', 'desigschem': 'desigschem', 'designatio': 'designatio', 'percentage': 'percentage', 'language': 'language', 'namestatus': 'namestatus', 'nativeness': 'nativeness', 'pronunciat': 'pronunciat', 'sourcename': 'sourcename', 'text': 'text', 'script': 'script', 'siteprotec': 'siteprotec', 'designat_1': 'designat_1', 'datedoc_co': 'datedoc_co', 'datedoc__1': 'datedoc__1', 'desigsch_1': 'desigsch_1', 'versionid': 'versionid', });
lyr_Microreservas_43.set('fieldAliases', {'nombre': 'nombre', 'hect_web': 'hect_web', 'provincia': 'provincia', 'municipio': 'municipio', 'dogv_decla': 'dogv_decla', 'titularita': 'titularita', 'perim_geo': 'perim_geo', 'area_geo': 'area_geo', 'hect_geo': 'hect_geo', 'hect_ofi': 'hect_ofi', 'leg_link': 'leg_link', 'dogv_corre': 'dogv_corre', 'ficha_link': 'ficha_link', 'ficha_li_1': 'ficha_li_1', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_CastillodeChivaPlanEspecialdeProteccin_44.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_': 'areaValue_', 'beginLifes': 'beginLifes', 'endLifespa': 'endLifespa', 'localId': 'localId', 'namespace': 'namespace', 'label': 'label', 'nationalCa': 'nationalCa', 'pos': 'pos', });
lyr_PEDelimitacionNHT_45.set('fieldAliases', {'Layer': 'Layer', 'Text': 'Text', 'Superf C': 'Superf C', });
lyr_PlaneamientoVigente_46.set('fieldAliases', {'cpm': 'cpm', 'municipio': 'municipio', 'expediente': 'expediente', 'descripcio': 'descripcio', 'clas_suelo': 'clas_suelo', 'zon_suelo': 'zon_suelo', 'contenido': 'contenido', 'text_': 'text_', 'FID': 'FID', 'Superficie': 'Superficie', 'Superf C': 'Superf C', });
lyr_DANA2024ZonasInundadasHuellaInundacion_47.set('fieldAliases', {'id': 'id', 'descripcio': 'descripcio', 'area_ha': 'area_ha', 'datestamp': 'datestamp', });
lyr_LmiteTrminoMunicipalChiva_48.set('fieldAliases', {'FID': 'FID', 'Superficie': 'Superficie', 'Superf C': 'Superf C', });
lyr_ZONIFICACINESTRUCTURAL_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Clas Actua': 'TextEdit', 'Clas_Suelo': 'TextEdit', 'Nombre': 'TextEdit', 'Consolidad': 'TextEdit', 'Uso': 'TextEdit', 'Regulacion': 'TextEdit', 'Zon_Suelo': 'TextEdit', 'Coment urb': 'TextEdit', 'urb-calif': 'TextEdit', 'CPM': 'TextEdit', 'Superfic C': 'TextEdit', 'Municipio': 'TextEdit', 'Descri_zon': 'TextEdit', });
lyr_TrazadoPropuesto_Municipal_3.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_Proyectado_Fomento_4.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_EnlaceA3Ribarroja_Trazado_5.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_AdecuaCV_424_lineas_6.set('fieldImages', {'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', });
lyr_RedNuevasConexionescopiar_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Clase': 'TextEdit', 'Tramo': 'TextEdit', 'Alternativ': 'TextEdit', });
lyr_SUsuelourbano_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Clas Actua': 'TextEdit', 'Clas_Suelo': 'TextEdit', 'Nombre': 'TextEdit', 'Consolidad': 'TextEdit', 'Uso': 'TextEdit', 'Regulacion': 'TextEdit', 'Zon_Suelo': 'TextEdit', 'Coment urb': 'TextEdit', 'urb-calif': 'TextEdit', 'CPM': 'TextEdit', 'Superfic C': 'TextEdit', 'Municipio': 'TextEdit', 'Descri_zon': 'TextEdit', });
lyr_Sueloaobtener_Dotacional_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Clas Actua': 'TextEdit', 'Clas_Suelo': 'TextEdit', 'Nombre': 'TextEdit', 'Uso': 'TextEdit', 'Zon_Suelo': 'TextEdit', 'Superfic C': 'TextEdit', 'Dotac': 'TextEdit', 'Localizac': 'TextEdit', });
lyr_Sueloaobtener_VIALES_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Clase': 'TextEdit', 'Tramo': 'TextEdit', 'LONG': 'TextEdit', 'Adscrito a': 'TextEdit', });
lyr_ConformacinAR_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'Clas_Suelo': 'TextEdit', 'Nombre': 'TextEdit', 'Uso': 'TextEdit', 'Zon_Suelo': 'TextEdit', 'Superfic C': 'TextEdit', 'Nom Sector': 'TextEdit', 'AR': 'TextEdit', });
lyr_SectoresSU_12.set('fieldImages', {'id': 'TextEdit', 'Clas Actua': 'TextEdit', 'Clas_Suelo': 'TextEdit', 'Superficie': 'TextEdit', 'Nombre': 'TextEdit', 'Consolidad': 'TextEdit', 'Uso': 'TextEdit', 'Regulacion': 'TextEdit', 'Zon_Suelo': 'TextEdit', 'Coment urb': 'TextEdit', 'urb-calif': 'TextEdit', 'CPM': 'TextEdit', 'Superfic C': 'TextEdit', 'Municipio': 'TextEdit', 'Descri_zon': 'TextEdit', 'Nombre Sec': 'TextEdit', 'Aprobado': 'TextEdit', 'Edificabil': 'TextEdit', 'Superf amb': 'TextEdit', 'OE-Sec_Zon': 'TextEdit', 'OP-UE pend': 'TextEdit', 'PlaneamAsu': 'TextEdit', 'Uso-estado': 'TextEdit', });
lyr_SectoresSUZ_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Clas Actua': 'TextEdit', 'Clas_Suelo': 'TextEdit', 'Nombre': 'TextEdit', 'Consolidad': 'TextEdit', 'Uso': 'TextEdit', 'Regulacion': 'TextEdit', 'Zon_Suelo': 'TextEdit', 'Coment urb': 'TextEdit', 'urb-calif': 'TextEdit', 'CPM': 'TextEdit', 'Superfic C': 'TextEdit', 'Municipio': 'TextEdit', 'Nom Sector': 'TextEdit', });
lyr_RedDotaciones_EQyZV_14.set('fieldImages', {'qc_id': 'TextEdit', 'clas_suelo': 'TextEdit', 'nombre': 'TextEdit', 'uso': 'TextEdit', 'zon_suelo': 'TextEdit', 'superfic c': 'TextEdit', 'dotac': 'TextEdit', });
lyr_RPFerrocAVE_15.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_RPFerrocarriles_16.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_RPCarreteras_17.set('fieldImages', {'modificado': 'TextEdit', 'n_plat': 'TextEdit', 'length': 'TextEdit', 'long': 'TextEdit', 'nom_ant': 'TextEdit', 'nom_act': 'TextEdit', 'nom_fut': 'TextEdit', 'tit_ant': 'Range', 'tit_act': 'Range', 'tit_fut': 'Range', 'tipus_ant': 'TextEdit', 'tipus_act': 'TextEdit', 'tipus_fut': 'TextEdit', 'lleg_act': 'TextEdit', 'lleg_fut': 'TextEdit', 'rotonda': 'Range', 'sentidos': 'Range', 'sec_cons': 'TextEdit', 'tunel': 'Range', 'id_tunel': 'TextEdit', 'lleg_wms': 'TextEdit', 'fecha_mod': 'DateTime', 'fecha_ent': 'DateTime', 'fecha_sal': 'DateTime', 'act': 'Range', 'gran_cap': 'Range', 'tipus_des': 'TextEdit', 'tit_des': 'TextEdit', 'tunel_des': 'TextEdit', 'rotond_des': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_RPnuevasconexiones_18.set('fieldImages', {'id': 'TextEdit', 'Clase': 'TextEdit', 'Tramo': 'TextEdit', 'Alternativ': 'TextEdit', });
lyr_Pozosagua_19.set('fieldImages', {'id': 'TextEdit', });
lyr_Perimetroproteccin300m_20.set('fieldImages', {'n orden': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Tipo': 'TextEdit', 'Clave': 'TextEdit', });
lyr_Puntosabastecimientoagua_21.set('fieldImages', {'n orden': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Tipo': 'TextEdit', 'Clave': 'TextEdit', });
lyr_AreaafeccinCementerio_22.set('fieldImages', {'id': 'TextEdit', 'Clas Actua': 'TextEdit', 'Clas_Suelo': 'TextEdit', 'Superficie': 'TextEdit', 'Nombre': 'TextEdit', 'Consolidad': 'TextEdit', 'Uso': 'TextEdit', 'Regulacion': 'TextEdit', 'Zon_Suelo': 'TextEdit', 'Coment urb': 'TextEdit', 'urb-calif': 'TextEdit', 'CPM': 'TextEdit', 'Superfic C': 'TextEdit', 'Municipio': 'TextEdit', 'Descripcio': 'TextEdit', 'Dotac': 'TextEdit', 'Descr_dot': 'TextEdit', });
lyr_DerechosMineros_23.set('fieldImages', {'Nombre': 'TextEdit', 'Empresa': 'TextEdit', 'Organismo': 'TextEdit', 'Sit. Gral': 'TextEdit', 'Tipo': 'TextEdit', 'Fraccion': 'TextEdit', 'N Registro': 'TextEdit', 'Sustancia': 'TextEdit', 'Superficie': 'TextEdit', 'Uds': 'TextEdit', 'Seccion': 'TextEdit', });
lyr_Ferroc_AristaExplanacion_24.set('fieldImages', {'id': '', });
lyr_Ferroc_linCERCANIAS_25.set('fieldImages', {'id': '', });
lyr_Ferroc_plataformaAVE_26.set('fieldImages', {'id': '', });
lyr_Ferroc_linAVE_27.set('fieldImages', {'id': '', });
lyr_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28.set('fieldImages', {'ficha': 'TextEdit', 'clave_top': 'TextEdit', 'texto': 'TextEdit', });
lyr_ServidGasoducto_29.set('fieldImages', {'dxf_layer': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_ServidElectrica_30.set('fieldImages', {'ficha': 'TextEdit', 'clave_top': 'TextEdit', 'texto': 'TextEdit', });
lyr_LinEdificacion_31.set('fieldImages', {'id': 'TextEdit', });
lyr_LinProteccion_32.set('fieldImages', {'modificado': 'TextEdit', 'n_plat': 'TextEdit', 'length': 'TextEdit', 'long': 'TextEdit', 'nom_ant': 'TextEdit', 'nom_act': 'TextEdit', 'nom_fut': 'TextEdit', 'tit_ant': 'Range', 'tit_act': 'Range', 'tit_fut': 'Range', 'tipus_ant': 'TextEdit', 'tipus_act': 'TextEdit', 'tipus_fut': 'TextEdit', 'lleg_act': 'TextEdit', 'lleg_fut': 'TextEdit', 'rotonda': 'Range', 'sentidos': 'Range', 'sec_cons': 'TextEdit', 'tunel': 'Range', 'id_tunel': 'TextEdit', 'lleg_wms': 'TextEdit', 'fecha_mod': 'DateTime', 'fecha_ent': 'DateTime', 'fecha_sal': 'DateTime', 'act': 'Range', 'gran_cap': 'Range', 'tramo_imd': 'TextEdit', 'tipus_des': 'TextEdit', 'tit_des': 'TextEdit', 'tunel_des': 'TextEdit', 'rotond_des': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_LinServidumbre_33.set('fieldImages', {'id': 'TextEdit', });
lyr_LinDominioPublico_34.set('fieldImages', {'id': 'TextEdit', });
lyr_BarrancosRiberas_35.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', });
lyr_FlujopreferenteSNCZI_36.set('fieldImages', {'name': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Cauce': 'TextEdit', 'Caudal (m3': 'TextEdit', 'Clave expe': 'TextEdit', 'Demarcaci�': 'TextEdit', 'Documento': 'TextEdit', 'Escala rep': 'TextEdit', 'Estudio': 'TextEdit', 'Fecha docu': 'TextEdit', 'Id. Demarc': 'TextEdit', 'Id. Zona': 'TextEdit', 'Longitud (': 'TextEdit', 'Método hi': 'TextEdit', 'Método _1': 'TextEdit', 'Nombre zon': 'TextEdit', 'Organismo': 'TextEdit', 'Precisión': 'TextEdit', 'Tipo estud': 'TextEdit', 'Tipo zona': 'TextEdit', });
lyr_DPHCartogrSNCZI_37.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID_ZONA': 'TextEdit', 'ZONA': 'TextEdit', 'TIPO_ZONA': 'TextEdit', 'RIO': 'TextEdit', 'LONG_KM': 'TextEdit', 'HIPOTESIS': 'TextEdit', 'HIDROLOGIA': 'TextEdit', 'PRECISION': 'TextEdit', 'HIDRAUL': 'TextEdit', 'ESTUDIO': 'TextEdit', 'TIPO_EST': 'TextEdit', 'ESCALA_REP': 'TextEdit', 'DOCUMENTO': 'TextEdit', 'FECHA': 'TextEdit', 'ORGANISMO': 'TextEdit', 'CLAVE_EXPE': 'TextEdit', 'DEMARCACIO': 'TextEdit', 'ID_DEMAR': 'TextEdit', 'Q_M3_S': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BICs_BRLs_38.set('fieldImages', {'id': 'TextEdit', 'Secc/Catal': 'TextEdit', 'Denominaci': 'TextEdit', 'Tipo': 'TextEdit', 'IGPCV': 'TextEdit', 'GVA': 'TextEdit', });
lyr_ViasPecuarias_39.set('fieldImages', {'cod1': 'TextEdit', 'cod2': 'TextEdit', 'cod3': 'TextEdit', 'cod4': 'TextEdit', 'cod_vp': 'TextEdit', 'tipo_vp': 'TextEdit', 'aproba_1': 'TextEdit', 'aproba_2': 'TextEdit', 'boe_1': 'TextEdit', 'boe_2': 'TextEdit', 'bop_1': 'TextEdit', 'bop_2': 'TextEdit', 'dogv_1': 'TextEdit', 'dogv_2': 'TextEdit', 'provincia': 'TextEdit', 'munic_1': 'TextEdit', 'munic_2': 'TextEdit', 'deslinde': 'TextEdit', 'mojon': 'TextEdit', 'legal_1': 'TextEdit', 'legal_2': 'TextEdit', 'neces': 'TextEdit', 'nomb_vp': 'TextEdit', 'obser_vp': 'TextEdit', 'long_c_1': 'TextEdit', 'long_c_2': 'TextEdit', 'sup_vp_1': 'TextEdit', 'sup_vp_2': 'TextEdit', 'tipo_leyen': 'TextEdit', 'long_desli': 'TextEdit', 'revisado': 'TextEdit', 'hyperlink': 'TextEdit', 'shape_Leng': 'TextEdit', });
lyr_PATFOR_40.set('fieldImages', {'produc': 'TextEdit', 'aridez': 'TextEdit', 'cabecera': 'TextEdit', 'monte': 'TextEdit', 'sup_ha': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_MontesCatalogados_41.set('fieldImages', {'texto': 'TextEdit', 'num_up': 'TextEdit', 'etiquetas': 'TextEdit', 'denominaci': 'TextEdit', 'tipo': 'TextEdit', 'df': 'TextEdit', 'deslinde': 'TextEdit', 'amojonamie': 'TextEdit', 'perimetro': 'TextEdit', 'hectareas': 'TextEdit', 'sumasuperf': 'TextEdit', 'municipio': 'TextEdit', 'cup': 'TextEdit', 'area_del_c': 'TextEdit', 'superfbase': 'TextEdit', 'porn_afecc': 'TextEdit', 'carpeta': 'TextEdit', 'carpetacma': 'TextEdit', 'pertenen_1': 'TextEdit', 'escan_expd': 'TextEdit', 'infor_resu': 'TextEdit', 'num_consul': 'TextEdit', 'arbolfn3': 'TextEdit', 'info_res_a': 'TextEdit', 'revis_cart': 'TextEdit', 'comar_cast': 'TextEdit', 'comar_val': 'TextEdit', 'provincia': 'TextEdit', 'rev_comple': 'TextEdit', 'pertenen_2': 'TextEdit', 'denomdesl': 'TextEdit', 'etiquekml': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_EspacioNaturalSimadelasPalomas_42.set('fieldImages', {'nombre': '', 'municipio': '', 'comarca': '', 'provincia': '', 'z': '', 'coord__utm': '', 'x_coord': '', 'y_coord': '', 'decreto': '', 'dogv': '', 'fecha': '', 'correccion': '', 'id': '', 'nom_ficha': '', 'x_50': '', 'y_50': '', 'leg_link': '', 'localid': '', 'namespace': '', 'legfoudate': '', 'titledoc': '', 'datedoc': '', 'urldoc': '', 'desigschem': '', 'designatio': '', 'percentage': '', 'language': '', 'namestatus': '', 'nativeness': '', 'pronunciat': '', 'sourcename': '', 'text': '', 'script': '', 'siteprotec': '', 'designat_1': '', 'datedoc_co': '', 'datedoc__1': '', 'desigsch_1': '', 'versionid': '', });
lyr_Microreservas_43.set('fieldImages', {'nombre': 'TextEdit', 'hect_web': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'dogv_decla': 'TextEdit', 'titularita': 'TextEdit', 'perim_geo': 'TextEdit', 'area_geo': 'TextEdit', 'hect_geo': 'TextEdit', 'hect_ofi': 'TextEdit', 'leg_link': 'TextEdit', 'dogv_corre': 'TextEdit', 'ficha_link': 'TextEdit', 'ficha_li_1': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_CastillodeChivaPlanEspecialdeProteccin_44.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'TextEdit', 'areaValue_': 'TextEdit', 'beginLifes': 'TextEdit', 'endLifespa': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'label': 'TextEdit', 'nationalCa': 'TextEdit', 'pos': 'TextEdit', });
lyr_PEDelimitacionNHT_45.set('fieldImages', {'Layer': 'TextEdit', 'Text': 'TextEdit', 'Superf C': 'TextEdit', });
lyr_PlaneamientoVigente_46.set('fieldImages', {'cpm': 'TextEdit', 'municipio': 'TextEdit', 'expediente': 'TextEdit', 'descripcio': 'TextEdit', 'clas_suelo': 'TextEdit', 'zon_suelo': 'TextEdit', 'contenido': 'TextEdit', 'text_': 'TextEdit', 'FID': 'Range', 'Superficie': 'TextEdit', 'Superf C': 'TextEdit', });
lyr_DANA2024ZonasInundadasHuellaInundacion_47.set('fieldImages', {'id': 'TextEdit', 'descripcio': 'TextEdit', 'area_ha': 'TextEdit', 'datestamp': 'TextEdit', });
lyr_LmiteTrminoMunicipalChiva_48.set('fieldImages', {'FID': 'TextEdit', 'Superficie': 'TextEdit', 'Superf C': 'TextEdit', });
lyr_ZONIFICACINESTRUCTURAL_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Clas Actua': 'inline label - visible with data', 'Clas_Suelo': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Consolidad': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Regulacion': 'inline label - visible with data', 'Zon_Suelo': 'inline label - visible with data', 'Coment urb': 'inline label - visible with data', 'urb-calif': 'inline label - visible with data', 'CPM': 'inline label - visible with data', 'Superfic C': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Descri_zon': 'inline label - visible with data', });
lyr_TrazadoPropuesto_Municipal_3.set('fieldLabels', {'Layer': 'inline label - visible with data', 'PaperSpace': 'inline label - visible with data', 'SubClasses': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'EntityHand': 'inline label - visible with data', 'Text': 'inline label - visible with data', });
lyr_Proyectado_Fomento_4.set('fieldLabels', {'Layer': 'inline label - visible with data', 'PaperSpace': 'inline label - visible with data', 'SubClasses': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'EntityHand': 'inline label - visible with data', 'Text': 'inline label - visible with data', });
lyr_EnlaceA3Ribarroja_Trazado_5.set('fieldLabels', {'Layer': 'inline label - visible with data', 'PaperSpace': 'inline label - visible with data', 'SubClasses': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'EntityHand': 'inline label - visible with data', 'Text': 'inline label - visible with data', });
lyr_AdecuaCV_424_lineas_6.set('fieldLabels', {'Layer': 'inline label - visible with data', 'PaperSpace': 'inline label - visible with data', 'SubClasses': 'inline label - visible with data', 'Linetype': 'inline label - visible with data', 'EntityHand': 'inline label - visible with data', 'Text': 'inline label - visible with data', });
lyr_RedNuevasConexionescopiar_7.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Clase': 'inline label - visible with data', 'Tramo': 'inline label - visible with data', 'Alternativ': 'inline label - visible with data', });
lyr_SUsuelourbano_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Clas Actua': 'inline label - visible with data', 'Clas_Suelo': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Consolidad': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Regulacion': 'inline label - visible with data', 'Zon_Suelo': 'inline label - visible with data', 'Coment urb': 'inline label - visible with data', 'urb-calif': 'inline label - visible with data', 'CPM': 'inline label - visible with data', 'Superfic C': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Descri_zon': 'inline label - visible with data', });
lyr_Sueloaobtener_Dotacional_9.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Clas Actua': 'inline label - visible with data', 'Clas_Suelo': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Zon_Suelo': 'inline label - visible with data', 'Superfic C': 'inline label - visible with data', 'Dotac': 'inline label - visible with data', 'Localizac': 'inline label - visible with data', });
lyr_Sueloaobtener_VIALES_10.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Clase': 'inline label - visible with data', 'Tramo': 'inline label - visible with data', 'LONG': 'inline label - visible with data', 'Adscrito a': 'inline label - visible with data', });
lyr_ConformacinAR_11.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Clas_Suelo': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Zon_Suelo': 'inline label - visible with data', 'Superfic C': 'inline label - visible with data', 'Nom Sector': 'inline label - visible with data', 'AR': 'inline label - visible with data', });
lyr_SectoresSU_12.set('fieldLabels', {'id': 'inline label - visible with data', 'Clas Actua': 'inline label - visible with data', 'Clas_Suelo': 'inline label - visible with data', 'Superficie': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Consolidad': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Regulacion': 'inline label - visible with data', 'Zon_Suelo': 'inline label - visible with data', 'Coment urb': 'inline label - visible with data', 'urb-calif': 'inline label - visible with data', 'CPM': 'inline label - visible with data', 'Superfic C': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Descri_zon': 'inline label - visible with data', 'Nombre Sec': 'inline label - visible with data', 'Aprobado': 'inline label - visible with data', 'Edificabil': 'inline label - visible with data', 'Superf amb': 'inline label - visible with data', 'OE-Sec_Zon': 'inline label - visible with data', 'OP-UE pend': 'inline label - visible with data', 'PlaneamAsu': 'inline label - visible with data', 'Uso-estado': 'inline label - visible with data', });
lyr_SectoresSUZ_13.set('fieldLabels', {'fid': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Clas Actua': 'inline label - visible with data', 'Clas_Suelo': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Consolidad': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Regulacion': 'inline label - visible with data', 'Zon_Suelo': 'inline label - visible with data', 'Coment urb': 'inline label - visible with data', 'urb-calif': 'inline label - visible with data', 'CPM': 'inline label - visible with data', 'Superfic C': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Nom Sector': 'inline label - visible with data', });
lyr_RedDotaciones_EQyZV_14.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'clas_suelo': 'inline label - visible with data', 'nombre': 'inline label - visible with data', 'uso': 'inline label - visible with data', 'zon_suelo': 'inline label - visible with data', 'superfic c': 'inline label - visible with data', 'dotac': 'inline label - visible with data', });
lyr_RPFerrocAVE_15.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', });
lyr_RPFerrocarriles_16.set('fieldLabels', {'qc_id': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', });
lyr_RPCarreteras_17.set('fieldLabels', {'modificado': 'inline label - visible with data', 'n_plat': 'inline label - visible with data', 'length': 'inline label - visible with data', 'long': 'inline label - visible with data', 'nom_ant': 'inline label - visible with data', 'nom_act': 'inline label - visible with data', 'nom_fut': 'inline label - visible with data', 'tit_ant': 'inline label - visible with data', 'tit_act': 'inline label - visible with data', 'tit_fut': 'inline label - visible with data', 'tipus_ant': 'inline label - visible with data', 'tipus_act': 'inline label - visible with data', 'tipus_fut': 'inline label - visible with data', 'lleg_act': 'inline label - visible with data', 'lleg_fut': 'inline label - visible with data', 'rotonda': 'inline label - visible with data', 'sentidos': 'inline label - visible with data', 'sec_cons': 'inline label - visible with data', 'tunel': 'inline label - visible with data', 'id_tunel': 'inline label - visible with data', 'lleg_wms': 'inline label - visible with data', 'fecha_mod': 'inline label - visible with data', 'fecha_ent': 'inline label - visible with data', 'fecha_sal': 'inline label - visible with data', 'act': 'inline label - visible with data', 'gran_cap': 'inline label - visible with data', 'tipus_des': 'inline label - visible with data', 'tit_des': 'inline label - visible with data', 'tunel_des': 'inline label - visible with data', 'rotond_des': 'inline label - visible with data', 'shape_Leng': 'inline label - visible with data', });
lyr_RPnuevasconexiones_18.set('fieldLabels', {'id': 'inline label - visible with data', 'Clase': 'inline label - visible with data', 'Tramo': 'inline label - visible with data', 'Alternativ': 'inline label - visible with data', });
lyr_Pozosagua_19.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Perimetroproteccin300m_20.set('fieldLabels', {'n orden': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Clave': 'inline label - visible with data', });
lyr_Puntosabastecimientoagua_21.set('fieldLabels', {'n orden': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Clave': 'inline label - visible with data', });
lyr_AreaafeccinCementerio_22.set('fieldLabels', {'id': 'inline label - visible with data', 'Clas Actua': 'inline label - visible with data', 'Clas_Suelo': 'inline label - visible with data', 'Superficie': 'inline label - visible with data', 'Nombre': 'inline label - visible with data', 'Consolidad': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Regulacion': 'inline label - visible with data', 'Zon_Suelo': 'inline label - visible with data', 'Coment urb': 'inline label - visible with data', 'urb-calif': 'inline label - visible with data', 'CPM': 'inline label - visible with data', 'Superfic C': 'inline label - visible with data', 'Municipio': 'inline label - visible with data', 'Descripcio': 'inline label - visible with data', 'Dotac': 'inline label - visible with data', 'Descr_dot': 'inline label - visible with data', });
lyr_DerechosMineros_23.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'Empresa': 'inline label - visible with data', 'Organismo': 'inline label - visible with data', 'Sit. Gral': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Fraccion': 'inline label - visible with data', 'N Registro': 'inline label - visible with data', 'Sustancia': 'inline label - visible with data', 'Superficie': 'inline label - visible with data', 'Uds': 'inline label - visible with data', 'Seccion': 'inline label - visible with data', });
lyr_Ferroc_AristaExplanacion_24.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Ferroc_linCERCANIAS_25.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Ferroc_plataformaAVE_26.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Ferroc_linAVE_27.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_TransporteEnerias_ServicioseinstalacionesServeisiinstallacions_28.set('fieldLabels', {'ficha': 'inline label - visible with data', 'clave_top': 'inline label - visible with data', 'texto': 'inline label - visible with data', });
lyr_ServidGasoducto_29.set('fieldLabels', {'dxf_layer': 'inline label - visible with data', 'shape_Leng': 'inline label - visible with data', });
lyr_ServidElectrica_30.set('fieldLabels', {'ficha': 'inline label - visible with data', 'clave_top': 'inline label - visible with data', 'texto': 'inline label - visible with data', });
lyr_LinEdificacion_31.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_LinProteccion_32.set('fieldLabels', {'modificado': 'inline label - visible with data', 'n_plat': 'inline label - visible with data', 'length': 'inline label - visible with data', 'long': 'inline label - visible with data', 'nom_ant': 'inline label - visible with data', 'nom_act': 'inline label - visible with data', 'nom_fut': 'inline label - visible with data', 'tit_ant': 'inline label - visible with data', 'tit_act': 'inline label - visible with data', 'tit_fut': 'inline label - visible with data', 'tipus_ant': 'inline label - visible with data', 'tipus_act': 'inline label - visible with data', 'tipus_fut': 'inline label - visible with data', 'lleg_act': 'inline label - visible with data', 'lleg_fut': 'inline label - visible with data', 'rotonda': 'inline label - visible with data', 'sentidos': 'inline label - visible with data', 'sec_cons': 'inline label - visible with data', 'tunel': 'inline label - visible with data', 'id_tunel': 'inline label - visible with data', 'lleg_wms': 'inline label - visible with data', 'fecha_mod': 'inline label - visible with data', 'fecha_ent': 'inline label - visible with data', 'fecha_sal': 'inline label - visible with data', 'act': 'inline label - visible with data', 'gran_cap': 'inline label - visible with data', 'tramo_imd': 'inline label - visible with data', 'tipus_des': 'inline label - visible with data', 'tit_des': 'inline label - visible with data', 'tunel_des': 'inline label - visible with data', 'rotond_des': 'inline label - visible with data', 'shape_Leng': 'inline label - visible with data', });
lyr_LinServidumbre_33.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_LinDominioPublico_34.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_BarrancosRiberas_35.set('fieldLabels', {'id': 'inline label - visible with data', 'nombre': 'inline label - visible with data', });
lyr_FlujopreferenteSNCZI_36.set('fieldLabels', {'name': 'inline label - visible with data', 'folders': 'inline label - visible with data', 'descriptio': 'inline label - visible with data', 'altitude': 'inline label - visible with data', 'alt_mode': 'inline label - visible with data', 'time_begin': 'inline label - visible with data', 'time_end': 'inline label - visible with data', 'time_when': 'inline label - visible with data', 'Cauce': 'inline label - visible with data', 'Caudal (m3': 'inline label - visible with data', 'Clave expe': 'inline label - visible with data', 'Demarcaci�': 'inline label - visible with data', 'Documento': 'inline label - visible with data', 'Escala rep': 'inline label - visible with data', 'Estudio': 'inline label - visible with data', 'Fecha docu': 'inline label - visible with data', 'Id. Demarc': 'inline label - visible with data', 'Id. Zona': 'inline label - visible with data', 'Longitud (': 'inline label - visible with data', 'Método hi': 'inline label - visible with data', 'Método _1': 'inline label - visible with data', 'Nombre zon': 'inline label - visible with data', 'Organismo': 'inline label - visible with data', 'Precisión': 'inline label - visible with data', 'Tipo estud': 'inline label - visible with data', 'Tipo zona': 'inline label - visible with data', });
lyr_DPHCartogrSNCZI_37.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'ID_ZONA': 'inline label - visible with data', 'ZONA': 'inline label - visible with data', 'TIPO_ZONA': 'inline label - visible with data', 'RIO': 'inline label - visible with data', 'LONG_KM': 'inline label - visible with data', 'HIPOTESIS': 'inline label - visible with data', 'HIDROLOGIA': 'inline label - visible with data', 'PRECISION': 'inline label - visible with data', 'HIDRAUL': 'inline label - visible with data', 'ESTUDIO': 'inline label - visible with data', 'TIPO_EST': 'inline label - visible with data', 'ESCALA_REP': 'inline label - visible with data', 'DOCUMENTO': 'inline label - visible with data', 'FECHA': 'inline label - visible with data', 'ORGANISMO': 'inline label - visible with data', 'CLAVE_EXPE': 'inline label - visible with data', 'DEMARCACIO': 'inline label - visible with data', 'ID_DEMAR': 'inline label - visible with data', 'Q_M3_S': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_BICs_BRLs_38.set('fieldLabels', {'id': 'inline label - visible with data', 'Secc/Catal': 'inline label - visible with data', 'Denominaci': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'IGPCV': 'inline label - visible with data', 'GVA': 'inline label - visible with data', });
lyr_ViasPecuarias_39.set('fieldLabels', {'cod1': 'inline label - visible with data', 'cod2': 'inline label - visible with data', 'cod3': 'inline label - visible with data', 'cod4': 'inline label - visible with data', 'cod_vp': 'inline label - visible with data', 'tipo_vp': 'inline label - visible with data', 'aproba_1': 'inline label - visible with data', 'aproba_2': 'inline label - visible with data', 'boe_1': 'inline label - visible with data', 'boe_2': 'inline label - visible with data', 'bop_1': 'inline label - visible with data', 'bop_2': 'inline label - visible with data', 'dogv_1': 'inline label - visible with data', 'dogv_2': 'inline label - visible with data', 'provincia': 'inline label - visible with data', 'munic_1': 'inline label - visible with data', 'munic_2': 'inline label - visible with data', 'deslinde': 'inline label - visible with data', 'mojon': 'inline label - visible with data', 'legal_1': 'inline label - visible with data', 'legal_2': 'inline label - visible with data', 'neces': 'inline label - visible with data', 'nomb_vp': 'inline label - visible with data', 'obser_vp': 'inline label - visible with data', 'long_c_1': 'inline label - visible with data', 'long_c_2': 'inline label - visible with data', 'sup_vp_1': 'inline label - visible with data', 'sup_vp_2': 'inline label - visible with data', 'tipo_leyen': 'inline label - visible with data', 'long_desli': 'inline label - visible with data', 'revisado': 'inline label - visible with data', 'hyperlink': 'inline label - visible with data', 'shape_Leng': 'inline label - visible with data', });
lyr_PATFOR_40.set('fieldLabels', {'produc': 'inline label - visible with data', 'aridez': 'inline label - visible with data', 'cabecera': 'inline label - visible with data', 'monte': 'inline label - visible with data', 'sup_ha': 'inline label - visible with data', 'shape_Leng': 'inline label - visible with data', 'shape_Area': 'inline label - visible with data', });
lyr_MontesCatalogados_41.set('fieldLabels', {'texto': 'inline label - visible with data', 'num_up': 'inline label - visible with data', 'etiquetas': 'inline label - visible with data', 'denominaci': 'inline label - visible with data', 'tipo': 'inline label - visible with data', 'df': 'inline label - visible with data', 'deslinde': 'inline label - visible with data', 'amojonamie': 'inline label - visible with data', 'perimetro': 'inline label - visible with data', 'hectareas': 'inline label - visible with data', 'sumasuperf': 'inline label - visible with data', 'municipio': 'inline label - visible with data', 'cup': 'inline label - visible with data', 'area_del_c': 'inline label - visible with data', 'superfbase': 'inline label - visible with data', 'porn_afecc': 'inline label - visible with data', 'carpeta': 'inline label - visible with data', 'carpetacma': 'inline label - visible with data', 'pertenen_1': 'inline label - visible with data', 'escan_expd': 'inline label - visible with data', 'infor_resu': 'inline label - visible with data', 'num_consul': 'inline label - visible with data', 'arbolfn3': 'inline label - visible with data', 'info_res_a': 'inline label - visible with data', 'revis_cart': 'inline label - visible with data', 'comar_cast': 'inline label - visible with data', 'comar_val': 'inline label - visible with data', 'provincia': 'inline label - visible with data', 'rev_comple': 'inline label - visible with data', 'pertenen_2': 'inline label - visible with data', 'denomdesl': 'inline label - visible with data', 'etiquekml': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_EspacioNaturalSimadelasPalomas_42.set('fieldLabels', {'nombre': 'inline label - visible with data', 'municipio': 'inline label - visible with data', 'comarca': 'inline label - visible with data', 'provincia': 'inline label - visible with data', 'z': 'inline label - visible with data', 'coord__utm': 'inline label - visible with data', 'x_coord': 'inline label - visible with data', 'y_coord': 'inline label - visible with data', 'decreto': 'inline label - visible with data', 'dogv': 'inline label - visible with data', 'fecha': 'inline label - visible with data', 'correccion': 'inline label - visible with data', 'id': 'inline label - visible with data', 'nom_ficha': 'inline label - visible with data', 'x_50': 'inline label - visible with data', 'y_50': 'inline label - visible with data', 'leg_link': 'inline label - visible with data', 'localid': 'inline label - visible with data', 'namespace': 'inline label - visible with data', 'legfoudate': 'inline label - visible with data', 'titledoc': 'inline label - visible with data', 'datedoc': 'inline label - visible with data', 'urldoc': 'inline label - visible with data', 'desigschem': 'inline label - visible with data', 'designatio': 'inline label - visible with data', 'percentage': 'inline label - visible with data', 'language': 'inline label - visible with data', 'namestatus': 'inline label - visible with data', 'nativeness': 'inline label - visible with data', 'pronunciat': 'inline label - visible with data', 'sourcename': 'inline label - visible with data', 'text': 'inline label - visible with data', 'script': 'inline label - visible with data', 'siteprotec': 'inline label - visible with data', 'designat_1': 'inline label - visible with data', 'datedoc_co': 'inline label - visible with data', 'datedoc__1': 'inline label - visible with data', 'desigsch_1': 'inline label - visible with data', 'versionid': 'inline label - visible with data', });
lyr_Microreservas_43.set('fieldLabels', {'nombre': 'inline label - visible with data', 'hect_web': 'inline label - visible with data', 'provincia': 'inline label - visible with data', 'municipio': 'inline label - visible with data', 'dogv_decla': 'inline label - visible with data', 'titularita': 'inline label - visible with data', 'perim_geo': 'inline label - visible with data', 'area_geo': 'inline label - visible with data', 'hect_geo': 'inline label - visible with data', 'hect_ofi': 'inline label - visible with data', 'leg_link': 'inline label - visible with data', 'dogv_corre': 'inline label - visible with data', 'ficha_link': 'inline label - visible with data', 'ficha_li_1': 'inline label - visible with data', 'shape_Leng': 'inline label - visible with data', 'shape_Area': 'inline label - visible with data', });
lyr_CastillodeChivaPlanEspecialdeProteccin_44.set('fieldLabels', {'gml_id': 'inline label - visible with data', 'areaValue': 'inline label - visible with data', 'areaValue_': 'inline label - visible with data', 'beginLifes': 'inline label - visible with data', 'endLifespa': 'inline label - visible with data', 'localId': 'inline label - visible with data', 'namespace': 'inline label - visible with data', 'label': 'inline label - visible with data', 'nationalCa': 'inline label - visible with data', 'pos': 'inline label - visible with data', });
lyr_PEDelimitacionNHT_45.set('fieldLabels', {'Layer': 'inline label - visible with data', 'Text': 'inline label - visible with data', 'Superf C': 'inline label - visible with data', });
lyr_PlaneamientoVigente_46.set('fieldLabels', {'cpm': 'no label', 'municipio': 'no label', 'expediente': 'no label', 'descripcio': 'no label', 'clas_suelo': 'no label', 'zon_suelo': 'no label', 'contenido': 'no label', 'text_': 'no label', 'FID': 'no label', 'Superficie': 'no label', 'Superf C': 'no label', });
lyr_DANA2024ZonasInundadasHuellaInundacion_47.set('fieldLabels', {'id': 'inline label - visible with data', 'descripcio': 'inline label - visible with data', 'area_ha': 'inline label - visible with data', 'datestamp': 'inline label - visible with data', });
lyr_LmiteTrminoMunicipalChiva_48.set('fieldLabels', {'FID': 'inline label - visible with data', 'Superficie': 'inline label - visible with data', 'Superf C': 'inline label - visible with data', });
lyr_LmiteTrminoMunicipalChiva_48.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});