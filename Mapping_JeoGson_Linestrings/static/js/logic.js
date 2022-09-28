
// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles//{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});


// We create the dark view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  light: light
};

// Accesing the Toronto airline route GeoJson URL
let torontoData = "https://raw.githubusercontent.com/oscarpena96/Mapping_Earthquakes/main/torontoRoutes.json"

//having my own style 
let myStyle = {
  color:"#ffffa1",
  weight:2
}

//grabbing the toronto data with D3
d3.json(torontoData).then(function(data){
  console.log(data);
  //create layer with retrieved data
  L.geoJSON(data, { 
    stye: myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3> Destination:" +
      feature.properties.dst + "</h3>")
    }
  }).addTo(map)
})


// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44, -80],
  zoom: 2,
  layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);