function openTest(evt, testName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(testName).style.display = "block";
  evt.currentTarget.className += " active";
} 







/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  var y = document.getElementById("myTopnavAlt");
  if (x.className === "topnav") {
	x.style.display = "none";
    y.style.display = "block";
	y.className += " responsive";
	x.className += " responsive";

  } else {
	y.style.display = "none";
    x.style.display = "block";
	y.className = "topnavalt";
	x.className = "topnav";

  }
} 