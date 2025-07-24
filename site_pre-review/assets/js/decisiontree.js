/* var c1N = document.getElementById("c1N");
var c1NN = document.getElementById("c1NN");
var c1NY = document.getElementById("c1NY");

var c1Y = document.getElementById("c1Y");

var choice1 = document.querySelector(".choice1");
var choice1N = document.querySelector(".choice1N");
var choice1NN = document.querySelector(".choice1NN");
var choice1NY = document.querySelector(".choice1NY");

xc1N = function() {
	document.querySelector("#c1N > div").classList.add("selectedchoice");
	choice1.style.opacity = "0.25";
	choice1N.style.display = "block";
	c1N.style.cursor = "default";
	c1Y.style.cursor = "default";
}

xc1NN = function() {
	document.querySelector("#c1NN > div").classList.add("selectedchoice");
	choice1N.style.opacity = "0.25";
	choice1NN.style.display = "block";
	c1NN.style.cursor = "default";
	c1NY.style.cursor = "default";
}

xc1NY = function() {
	document.querySelector("#c1NY > div").classList.add("selectedchoice");
	choice1N.style.opacity = "0.25";
	choice1NY.style.display = "block";
	c1NN.style.cursor = "default";
	c1NY.style.cursor = "default";
}



c1N.addEventListener('click', xc1N);
c1NN.addEventListener('click', xc1NN);
c1NY.addEventListener('click', xc1NY); */


var testg1 = document.querySelector("#testg1");
var yesradio = document.querySelector("#tree > li > .yes");


lvl1Y = function() {
	document.querySelector("#testg1").classList.remove("choices-collapsed");
	document.querySelector(".firstone").classList.add("choice-selected");
}

yesradio.addEventListener('click', lvl1Y);
