// TODO: Must finish these functionality for the actual assignment
// 1) How to make a tooltip with images so that I could add an image of the circuit layout
// 2) How to add a URL onto the tool tip so that a user can access a wikipedia page regarding the circuit.
// 3) Add a zoom bar so that the user can zoom into the map
// 4) Distinguish places where hamilton won and where verstappen won

const VegaLiteSpec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "width": 800,
    "height": 450,
    "title": "Formula 1 2021 Season Global Racing Locations",
    "projection": {"type": "equirectangular"},
  
    "layer": [
      {
    "data": {
      "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT_3179_S2_2022_Week9/main/docs/js/oceans.json",
      "format": {"type": "topojson", "feature": "oceans"}
    },
    "mark": {"type": "geoshape", "fill": "skyblue"}
  },
  
      {
        "data": {
          "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT_3179_S2_2022_Week9/main/docs/js/output.json",
          "format": {"type": "topojson", "feature": "ne_110m_admin_0_countries"}
        },
        "mark": {"type": "geoshape", "fill": "beige","stroke": "lightgrey"}
      },
      
      {
        "data": {
          "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT_3179_S2_2022_Week9/main/docs/js/output.json",
          "format": {"type": "topojson", "feature": "ne_110m_graticules_30"}
        },
        "mark": {"type": "geoshape","fill":null, "stroke": "white"}
      },
  
  
      {
        "data": {
          "url": "https://raw.githubusercontent.com/KIR007-glitch/FIT_3179_S2_2022_Week9/main/docs/Data/2021_circuits.csv",
            "format":{"type":"csv"}
        },
  
        "mark": {"type": "circle"},
        "encoding": {
          "longitude": {"field": "lng", "type": "quantitative"},
          "latitude": {"field": "lat", "type": "quantitative"},
          "tooltip":[
            {"field":"country","title":"Country"},
            {"field": "location","title":"Location"},
            {"field": "name_x", "title":"Circuit Name"},
            {"field": "round", "title":"Race Number"}
  
            ],
            "size": {"value": 70},
           "color": {"value": "black"},
        }, 
      },
  
    ]
  }

vegaEmbed('#vis', VegaLiteSpec);