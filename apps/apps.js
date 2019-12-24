jQuery(document).ready(function($) {
	//Ajouter window.NomDeLAPP Afin de la rendre bougeable
	$( "#window.my_computer" ).draggable({zIndex: 100, scroll: false, cancel: '.middle, .bottom'  });
	$( "#window.cmd" ).draggable({zIndex: 100, scroll: false, cancel: '.middle, .bottom'  });
	$( "#window.my_documents" ).draggable({ zIndex: 100, scroll: false, cancel: '.middle, .bottom'  });
	$( "#window.recycle_bin" ).draggable({ zIndex: 100, scroll: false, cancel: '.middle, .bottom'  });
	$( "#window.my_network_places" ).draggable({ zIndex: 100, scroll: false, cancel: '.middle, .bottom'  });
	$( "#window.paint" ).draggable({ zIndex: 100, scroll: false, cancel: '.middle, .bottom'  });
	$( "#window.notepad" ).draggable({ zIndex: 100, scroll: false, cancel: '.middle, .bottom'  });

	//Ajouter l'app pour rendre l'icon bougeable
	Drag.init(document.getElementById("my_computer"));
	Drag.init(document.getElementById("cmd"));
	Drag.init(document.getElementById("my_documents"));
	Drag.init(document.getElementById("recycle_bin"));
	Drag.init(document.getElementById("my_network_places"));
	Drag.init(document.getElementById("paint"));

	var theRunHandle = document.getElementById("run_dialog_handle");
	var theRunRoot   = document.getElementById("run_dialog");
	Drag.init(theRunHandle, theRunRoot);

	var theDisplayHandle = document.getElementById("display_properties_handle");
	var theDisplayRoot   = document.getElementById("display_properties");
	Drag.init(theDisplayHandle, theDisplayRoot);

});



