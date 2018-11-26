var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWF0aGV1c2VzcGluZG9sYSIsImEiOiJjam9lNXFhZ2kxM2x2M3FqZHBvb3IzdWU0In0.xbF9hQqskaII2yitK2odMQ'
}).addTo(mymap);
 

 navigator.geolocation.getCurrentPosition(showPosition,abc);

 function showPosition (pos) {

 	var lat = pos.coords.latitude;
	var lon = pos.coords.longitude;
	mymap.setView([lat, lon], 13);
	console.log(lat,lon);

	var marker = L.marker([lat, lon]).addTo(mymap);
	marker.bindPopup("<b>Seu local!").openPopup();

	document.getElementById('btn_calc').addEventListener("click",calcular); 
	

	function calcular() {

		 	var lat2 = document.getElementById('lat1').value;
			var lon2 = document.getElementById('long1').value;

		
        var b = lat;
        var c = lon;
		
		
        hav(lat,lon,lat2,lon2);
	function hav(lat, lon, lat2, lon2) {
        var deg2rad = 0.017453292519943295; 
        var cos = Math.cos;
        b *= deg2rad;
        c *= deg2rad;
        lat2 *= deg2rad;
        lon2 *= deg2rad;
        var diam = 12742; 
        var dLat = lat2 - b;
        var dLon = lon2 - c;
        var a =  Number ( (1 - cos(dLat)) + (1 - cos(dLon)) * cos(lat1) * cos(lat2)) / 2;

        
		mymap.setView([lat2, lon2], 13);

		var marker = L.marker([lat2, lon2]).addTo(mymap);
		marker.bindPopup("<b>Local Marcado.").openPopup();


	    var polygon = L.polygon([
		    [lat, lon],
		    [lat2, lon2],
		]).addTo(mymap);

		}

	}
}



function abc(){alert("a")};



 
