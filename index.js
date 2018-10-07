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