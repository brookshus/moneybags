// ==================== THINGS I WILL NEED LATER ==================//
// mapbox_api_key = pk.eyJ1IjoiZy14YW5kZXIiLCJhIjoiY2p3YWQ4eW82MDh0YTQ4bjBkbnppdmc0byJ9.rj21mmc2ke564OOtq4I2Vw
// tomtom_api_key = 

//========================== VARIABLES ============================//
var token = "pk.eyJ1IjoiYnJvb2tzaHVzIiwiYSI6ImNqd2JpdXdsdTA1cnI0OW51M2VmMDUybW0ifQ.yPX4Y1aqKYLu0edN0tsu6A";

//=================== MAPBOX (SNAPCHAT MAP) ======================//
 
mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/dark-v10',
center: [-122.6793, 45.5155], // starting position [LONGITUDE, LATITUDE]
zoom: 13, // starting zoom
});

//=========== ADD ZOOM AND ROTATION CONTROLS TO THE MAP ==========//
map.addControl(new mapboxgl.NavigationControl());

//====================== MAP STYLE SWITCHER ======================//
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');
 
function switchLayer(layer) {
var layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
}
 
for (var i = 0; i < inputs.length; i++) {
inputs[i].onclick = switchLayer;
}
var long= -122.6793;
var lat= 45.5155;
// ======================== POPUP MESSAGE ========================//
var popup = new mapboxgl.Popup({closeOnClick: false})
.setLngLat([long,lat])
.setHTML('<h6>Test</h6>')
.addTo(map);

// ======================== USER LOCATION ========================//
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {enableHighAccuracy: true, timeout:6000}, // Toggles browser from locating user
    trackUserLocation: true, // Toggle to update map of user's location
    fitBoundsOptions: {maxZoom:15}, // Toggle
    showUserLocation: true, // By default a dot will be shown on the map at the user's location
}));





