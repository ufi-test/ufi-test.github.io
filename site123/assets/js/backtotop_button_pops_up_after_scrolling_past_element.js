

/* 

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.getElementById("toolkit").scrollIntoView();
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}  

*/


let mybutton = document.getElementById("myBtn");
var someElement = document.getElementById("explainmethods");
var toolkit = document.getElementById("toolkit");

	document.addEventListener('DOMContentLoaded', function(){})
	window.onscroll = function(){
		//TOP
    if(toolkit.getBoundingClientRect().top <= 0){
        mybutton.style.display = "none";
		console.log("top reached");
    }	
    //BOTTOM
		if(toolkit.getBoundingClientRect().bottom <= 0){
			mybutton.style.display = "block";
			console.log("bottom reached");
		}
	}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.getElementById("toolkit").scrollIntoView();
  mybutton.style.display = "none";
}