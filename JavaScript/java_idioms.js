var vg_1 = "idioms/choropleth.vg.json";
vegaEmbed('#vis', vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "idioms/radial_chart.vg.json";
vegaEmbed('#radial_chart', vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "idioms/alcohol_heatmap.vg.json";
vegaEmbed('#alcohol_heatmap', vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "idioms/drug_misuse.vg.json";
vegaEmbed('#drug_heatmap', vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);