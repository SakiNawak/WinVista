// Globals used with the global start menu hider
// to make sure it doesn't hide in the two special
// cases:
// 1) Start menu itself clicked
// 2) Start menu button clicked (This also hides it,
//    but does some special things for the button as
//    well)
var isStartMenuClicked = false;
var isStartMenuButtonClicked = false;

function handleClick()
{
  var startMenu = getElement('startmenu');
  if (startMenu.style.display == 'block' && !isStartMenuClicked && !isStartMenuButtonClicked)
  {
    doStartMenu();
    doStartMenuButtonOut();
  }
  isStartMenuClicked = false;
  isStartMenuButtonClicked = false;
}

function registerStartMenuObjects()
{
  var startMenuButton = getElement('startbutton');
  var startMenu = getElement('startmenu');
  
  // Events for when the mouse button is clicked and hovered
  startMenuButton.onclick = doStartMenu;
  startMenuButton.onmouseover = doStartMenuButtonOver;
  startMenuButton.onmouseout = doStartMenuButtonOut;
  
  // When you click the start menu itself, don't close it
  startMenu.onclick = startMenuClicked;
  
  // Takes care of a certain design limitation concerning
  // definition lists and being completely clickable. Only
  // concern: The status bar does not show the actual link.
  makeDLClickable();
  
  // When you click anywhere in the document, and the menu is
  // showing, we want to hide it.
  document.childNodes[1].onclick = handleClick;
  
  // Get run box showing on click
  var runCommand = getElement('run');
  runCommand.onclick = doRunBox;
  
  var runBoxClose = getElement('run_box_close');
  var runBoxCancel = getElement('run_box_cancel');
  var propertiesClose = getElement('display_properties_close');
  var propertiesCancel = getElement('display_properties_cancel');
  var propertiesOK = getElement('display_properties_ok');
  
  // All programs & my recent
  var allProgramsMenu = getElement('allprograms_menu');
  allProgramsMenu.tag = getElement('allprograms_link');
  var recentMenu = getElement('myrecent_menu');
  recentMenu.tag = getElement('myrecent_link');
  allProgramsMenu.onmouseover = doAllProgramsOver;
  allProgramsMenu.onmouseout = doAllProgramsOut;
  recentMenu.onmouseover = doAllProgramsOver;
  recentMenu.onmouseout = doAllProgramsOut;
  
  runBoxClose.onclick = closeRunBox;
  runBoxCancel.onclick = closeRunBox;
  propertiesClose.onclick = closePropertiesBox;
  propertiesCancel.onclick = closePropertiesBox;
  propertiesOK.onclick = closePropertiesBox;
}

function doRunBox()
{
  var runBox = getElement('run_dialog');
  runBox.style.display = 'block';
  doStartMenu();
  doStartMenuButtonOut();
}
function doPropertiesBox()
{
  var propertiesBox = getElement('display_properties');
  propertiesBox.style.display = 'block';
}


function closeRunBox()
{
  var runBox = getElement('run_dialog');
  runBox.style.display = 'none';
}
function closePropertiesBox()
{
  var runBox = getElement('display_properties');
  runBox.style.display = 'none';
}


function doAllProgramsOver()
{
  var allPrograms = this.tag;
  allPrograms.className = "stuff";
}
function doAllProgramsOut()
{
  var allPrograms = this.tag;
  allPrograms.className = "";
}

function makeDLClickable()
{
  var startMenu = getElement('startmenu');
  
  var iterator = document.evaluate("//div[@id='recentprograms']/dl", startMenu, null, 0, null);
  
  var items = new Array();
  while(item = iterator.iterateNext())
  {
    items[items.length] = item;
  }
  for (i = 0; i < items.length; i++)
  {
    items[i].onclick = goPlaces;
    items[i].style.cursor = 'pointer';
  }
}

function goPlaces()
{
  var iterator = document.evaluate("dd/a", this, null, 0, null);
  
  while(item = iterator.iterateNext())
  {
    location.href=item.href;
  }
}

function startMenuClicked()
{
  isStartMenuClicked = true;
}

function doStartMenu()
{
  isStartMenuButtonClicked = true;
  var startMenuButton = getElement('startbutton');
  var startMenuButtonSpan = getElement('startbuttongraphic');
  var startMenu = getElement('startmenu');
  
  if (startMenu.style.display == '' || startMenu.style.display == 'none')
  {
    startMenu.style.display = 'block';
    startMenuButtonSpan.className = 'startclicked';
  }
  else
  {
    startMenu.style.display = 'none';
    startMenuButtonSpan.className = 'starthovered';
  }
}

function doStartMenuButtonOver()
{
  var startMenuButton = getElement('startbutton');
  var startMenuButtonSpan = getElement('startbuttongraphic');
  var startMenu = getElement('startmenu');
  
  if (startMenu.style.display == '' || startMenu.style.display == 'none')
  {
    startMenuButtonSpan.className = 'starthovered';
  }
}

function doStartMenuButtonOut()
{
  var startMenuButton = getElement('startbutton');
  var startMenuButtonSpan = getElement('startbuttongraphic');
  var startMenu = getElement('startmenu');
  
  if (startMenu.style.display == '' || startMenu.style.display == 'none')
  {
	 startMenuButtonSpan.className = 'startnormal';
  }
}




// http://bnovc.com for this little gem!
function swapItems(id)
{
	var tabs = new Array('themes', 'desktop', 'screensaver', 'settings', 'appearance');
	for(i=0; i<5; i++)
	{
		document.getElementById(tabs[i]).style.display = 'none';
		document.getElementById(tabs[i] + '_tab').className = '';
	}
	document.getElementById(id).style.display = 'block';
	document.getElementById(id + '_tab').className = 'active';
	this.blur();
}
