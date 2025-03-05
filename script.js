function initMap() {
    var location = { lat: 40.7128, lng: -74.0060 };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Our Location"
    });

    var infoWindow = new google.maps.InfoWindow({
        content: "<p>This is our location!</p>"
    });

    marker.addListener("click", function () {
        infoWindow.open(map, marker);
    });

    var circle = new google.maps.Circle({
        map: map,
        radius: 2000,
        fillColor: "#AA0000",
        strokeColor: "#AA0000"
    });
    circle.bindTo("center", marker, "position");
}

document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my website!");
});

function changeColor() {
    document.getElementById("heading").style.color = "blue";
}

var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
var index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("sliderImage").src = images[index];
}
