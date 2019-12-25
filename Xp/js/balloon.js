jQuery(document).ready(function($) {	
	$("#balloon_close").on("click", function(){
	  $("#balloon").fadeToggle();                 // .fadeToggle() // .slideToggle()
	});
});

jQuery(document).ready(function($) {	
	setTimeout(function(){
	   $('#balloon').show();// or fade, css display however you'd like.
	}, 2000)
});