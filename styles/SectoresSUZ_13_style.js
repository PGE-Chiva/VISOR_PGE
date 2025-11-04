var size = 0;
var placement = 'point';
function categories_SectoresSUZ_13(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'ZND-IN':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(103,118,236,1.0)', lineDash: [2.508,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZND-RE-B':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,127,127,1.0)', lineDash: [2.508,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZND-RE-M':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,77,77,1.0)', lineDash: [2.508,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZND-TER':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(242,133,29,1.0)', lineDash: [2.508,5.016], lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_SectoresSUZ_13 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Zon_Suelo");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Nom Sector") !== null && resolution > 0 && resolution < 5) {
        labelText = String(feature.get("Nom Sector"));
    }
    
    var style = categories_SectoresSUZ_13(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
