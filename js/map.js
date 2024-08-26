var map;
$(document).ready(function () {
  map = new GMaps({
    el: '#map',
    lat: 34.0041875,  // Updated latitude
    lng: 71.4796875   // Updated longitude
  });
  
  map.addMarker({
    lat: 34.0041875,  // Marker latitude
    lng: 71.4796875   // Marker longitude
  });
});
