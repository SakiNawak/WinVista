
function getElement(psID)
{
  if(document.all)
  {
    return document.all[psID];
  }
  else
  {
    return document.getElementById(psID);
  }
} 

function onload_functions()
{
  updateClock();
  registerStartMenuObjects();
}

window.onload = onload_functions;