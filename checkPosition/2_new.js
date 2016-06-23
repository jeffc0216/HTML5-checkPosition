function doFirst(){
	if(navigator.geolocation){
		//alert('Geolocation support');
		var options = {
			enableHighAccuracy: false,
			timeout:10000,
			maximumAge:0
		}
		navigator.geolocation.getCurrentPosition(succCallback,errorCallback,options);
	} else {
		alert('Geolocation No support');
	}
}

function succCallback(event){
	var lati = event.coords.latitude;
	var longi = event.coords.longitude;

	document.getElementById('position').innerHTML = 'Latitude:' + lati + '<br>Longitude:' + longi;

}

function errorCallback(event){
	//document.getElementById('position').innerHTML = 'Code:' + event.code + '<br>Message:' + event.message;
	alert('Code:' + event.code + '\nMessage:' + event.message);

}

window.addEventListener('load', doFirst, false);