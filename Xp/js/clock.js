/*
thanks to Alex Schroeder -> http://alexanderschroeder.net/blog/ for this 
*/

function updateClock()
{
  var dateTime = new Date();
  
  var clockElement = getElement("clock");
  
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  
  hours = ((hours < 10) ? "0" : "") + hours;
  minutes = ((minutes < 10) ? "0" : "") + minutes;
  
  clockElement.innerHTML = hours + ":" + minutes;
  setTimeout('updateClock()', 1000);
}