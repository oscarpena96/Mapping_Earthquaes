

var Mymap = l.map("map",{
    center: [45.52,-112.67],
    zoom:4
})
 L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles//{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY}).addTo(MyMap)