const darkoverlay = document.querySelector(".darkoverlay");
const methodexplanation = document.querySelector(".methodexplanation");
const exp1 = document.querySelector("#exp1");
const exp2 = document.querySelector("#exp2");
const exp3 = document.querySelector("#exp3");
const exp4 = document.querySelector("#exp4");
const exp5 = document.querySelector("#exp5");
const exp6 = document.querySelector("#exp6");
const exp7 = document.querySelector("#exp7");
const exp8 = document.querySelector("#exp8");
const exp9 = document.querySelector("#exp9");
const lightpurple = "#c0adc8";
const lightorange = "#fd9577";


function overlayon(el) {
	const innertopoffset = ( ( document.querySelector("#page-wrapper").getBoundingClientRect().top + window.scrollY ) - ( document.querySelector(".serviceheading.orange").getBoundingClientRect().top + window.scrollY ) );
	const topoff = document.querySelector(el).getBoundingClientRect().top + window.scrollY + innertopoffset;
	darkoverlay.style.display = "block";
	methodexplanation.style.display = "block";
	methodexplanation.style.top = topoff + "px";
	
	if (el == "#buttonserv1") {
		exp1.style.display = "block";
		methodexplanation.style.borderColor = lightorange;
	}
	if (el == "#buttonserv2") {
		exp2.style.display = "block";
		methodexplanation.style.borderColor = lightorange;
	}
	if (el == "#buttonserv3") {
		exp3.style.display = "block";
		methodexplanation.style.borderColor = lightorange;
	}
	if (el == "#buttonserv4") {
		exp4.style.display = "block";
		methodexplanation.style.borderColor = lightpurple;
	}
	if (el == "#buttonserv5") {
		exp5.style.display = "block";
		methodexplanation.style.borderColor = lightpurple;
	}
	if (el == "#buttonserv6") {
		exp6.style.display = "block";
		methodexplanation.style.borderColor = lightpurple;
	}
	if (el == "#buttonserv7") {
		exp7.style.display = "block";
		methodexplanation.style.borderColor = lightpurple;
	}
	if (el == "#buttonserv8") {
		exp8.style.display = "block";
		methodexplanation.style.borderColor = lightpurple;
	}
	if (el == "#buttonserv9") {
		exp9.style.display = "block";
		methodexplanation.style.borderColor = lightpurple;
	}
}

function overlayoff () {
	darkoverlay.style.display = "none";
	methodexplanation.style.display = "none";
	exp1.style.display = "none";
	exp2.style.display = "none";
	exp3.style.display = "none";
	exp4.style.display = "none";
	exp5.style.display = "none";
	exp6.style.display = "none";
	exp7.style.display = "none";
	exp8.style.display = "none";
	exp9.style.display = "none";
}