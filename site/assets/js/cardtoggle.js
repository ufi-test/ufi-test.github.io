function cardtoggle(id) {
	
	var box = document.getElementById(id);
	var boxp = box.querySelector('p');
	var boxh = box.querySelector('h3');
			
	if (boxp.style.display == 'none' || boxp.style.display == '') {
		boxp.style.display = 'block';
		boxh.style.display = 'none';
		box.style.borderWidth = '10px 3px 3px 3px';
		box.style.borderColor = '#c0adc8';
	}
	
	else {
		boxp.style.display = 'none';
		boxh.style.display = 'block';
		box.style.borderWidth = '3px 3px 10px 3px';
		box.style.borderColor = '#817089';
	}
	
}

var b1 = document.getElementById('baboutflex1');
var b2 = document.getElementById('baboutflex2');
var b3 = document.getElementById('baboutflex3');
var b4 = document.getElementById('baboutflex4');
var b5 = document.getElementById('baboutflex5');
var b6 = document.getElementById('baboutflex6');

var b1p = b1.querySelector('p');
var b2p = b2.querySelector('p');
var b3p = b3.querySelector('p');
var b4p = b4.querySelector('p');
var b5p = b5.querySelector('p');
var b6p = b6.querySelector('p');

var b1h = b1.querySelector('h3');
var b2h = b2.querySelector('h3');
var b3h = b3.querySelector('h3');
var b4h = b4.querySelector('h3');
var b5h = b5.querySelector('h3');
var b6h = b6.querySelector('h3');

b1.addEventListener("mouseenter", (event) => {
	if (b1p.style.display == 'none' || b1p.style.display == '') {
	event.target.style.borderColor = '#c0adc8'; }
})

b1.addEventListener("mouseleave", (event) => {
	if (b1p.style.display == 'none' || b1p.style.display == '') {
	event.target.style.borderColor = '#817089'; }
})

b2.addEventListener("mouseenter", (event) => {
	if (b2p.style.display == 'none' || b2p.style.display == '') {
	event.target.style.borderColor = '#c0adc8'; }
})

b2.addEventListener("mouseleave", (event) => {
	if (b2p.style.display == 'none' || b2p.style.display == '') {
	event.target.style.borderColor = '#817089'; }
})

b3.addEventListener("mouseenter", (event) => {
	if (b3p.style.display == 'none' || b3p.style.display == '') {
	event.target.style.borderColor = '#c0adc8'; }
})

b3.addEventListener("mouseleave", (event) => {
	if (b3p.style.display == 'none' || b3p.style.display == '') {
	event.target.style.borderColor = '#817089'; }
})

b4.addEventListener("mouseenter", (event) => {
	if (b4p.style.display == 'none' || b4p.style.display == '') {
	event.target.style.borderColor = '#c0adc8'; }
})

b4.addEventListener("mouseleave", (event) => {
	if (b4p.style.display == 'none' || b4p.style.display == '') {
	event.target.style.borderColor = '#817089'; }
})

b5.addEventListener("mouseenter", (event) => {
	if (b5p.style.display == 'none' || b5p.style.display == '') {
	event.target.style.borderColor = '#c0adc8'; }
})

b5.addEventListener("mouseleave", (event) => {
	if (b5p.style.display == 'none' || b5p.style.display == '') {
	event.target.style.borderColor = '#817089'; }
})

b6.addEventListener("mouseenter", (event) => {
	if (b6p.style.display == 'none' || b6p.style.display == '') {
	event.target.style.borderColor = '#c0adc8'; }
})

b6.addEventListener("mouseleave", (event) => {
	if (b6p.style.display == 'none' || b6p.style.display == '') {
	event.target.style.borderColor = '#817089'; }
})