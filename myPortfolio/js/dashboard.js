function getyourlocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(gettheposition);
  } else {
    yourLocation.innerHTML = "Disable your Vpn sneaky boots :)";
  }
}

function gettheposition(position) {
  var yourLocation = document.getElementById("your-coordinates");
  console.log(position);

  yourLocation.innerHTML =
    "Longitude: " +
    position.coords.longitude +
    " Latitude: " +
    position.coords.latitude;
}
