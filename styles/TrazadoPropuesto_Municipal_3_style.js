var size = 0;
var placement = 'point';
function categories_TrazadoPropuesto_Municipal_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Afecciones MIN_122.5':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(135,135,137,1.0)', lineDash: [3.04,1.52], lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Eje prop':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(132,129,132,1.0)', lineDash: [3.04,1.52], lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Plataformas viarias':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(193,195,192,1.0)', lineDash: [3.04,1.52], lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Taludes':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(135,135,137,1.0)', lineDash: [3.04,1.52], lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_TrazadoPropuesto_Municipal_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Layer");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_TrazadoPropuesto_Municipal_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
