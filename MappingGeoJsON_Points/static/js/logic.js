
// create map object with a center level and zoom
let map = L.map('mapid').setView([30,-30],2)

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/oscarpena96/Mapping_Earthquakes/main/majorAirports.json";

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

//adding data with d3Json
d3.json(airportData).then(function(data){
  console.log(data)
})


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);