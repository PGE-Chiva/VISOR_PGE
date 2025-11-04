var size = 0;
var placement = 'point';
function categories_Sueloaobtener_Dotacional_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'El Bosque-Entrepinos_centralid1':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,0.9215686274509803)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Jardín Rio Ebro':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,0.9215686274509803)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Los Miradores':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,0.9215686274509803)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Merendero Vista Alegre':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,0.9215686274509803)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Parque Canino "Laika"':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,0.9215686274509803)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Parque Cumbres de Calicanto':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,0.9215686274509803)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Parque Este (industrial)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,0.9215686274509803)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PE Castillo de Chiva':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,0.9215686274509803)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(130,130,130,0.9215686274509803)', lineDash: [4.56,2.28], lineCap: 'butt', lineJoin: 'miter', width: 2.28}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Sueloaobtener_Dotacional_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Nombre");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Nombre") !== null && resolution > 0 && resolution < 5) {
        labelText = String(feature.get("Nombre"));
    }
    
    var style = categories_Sueloaobtener_Dotacional_9(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
