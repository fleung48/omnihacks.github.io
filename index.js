 $(window).scroll(function() {
    var winTop = $(window).scrollTop();
  });

$(document).ready(function(){
	$( ".more" ).each(function(index) {
	    $(this).on("click", function(){
	    	var id = $(this).attr('id');
	        // For the boolean value
	        $("#" + id + " .showmore").slideToggle();
	        $("#" + id + " .plus").toggleClass("rotated");
	    });
	});
});

$("#scrolltoform").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: $("#signupform").offset().top }, 800);
        return false;
    });

$("#logo").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var holberton = {lat: 37.781476, lng: -122.408119};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: holberton});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: holberton, map: map});
}
