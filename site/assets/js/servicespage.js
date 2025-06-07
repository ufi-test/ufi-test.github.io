  var x = document.getElementById("productionPopupLeft");
  var y = document.getElementById("productionPopupCenter");
  var z = document.getElementById("productionPopupRight");
  var x1 = document.getElementById("serviceArrowLeft");
  var y1 = document.getElementById("serviceArrowCenter");
  var z1 = document.getElementById("serviceArrowRight");

function productionButtonLeft() {
  if (x.style.display === "none") {
    x.style.display = "block";
	y.style.display = "none";
	z.style.display = "none";
	x1.style.display = "block";
	y1.style.display = "none";
	z1.style.display = "none";
  } else {
	y.style.display = "none";
	z.style.display = "none";
	y1.style.display = "none";
	z1.style.display = "none";
  }
}

function productionButtonCenter() {
  if (y.style.display === "none") {
    y.style.display = "block";
	x.style.display = "none";
	z.style.display = "none";
    y1.style.display = "block";
	x1.style.display = "none";
	z1.style.display = "none";
  } else {
    x.style.display = "none";
	z.style.display = "none";
	x1.style.display = "none";
	z1.style.display = "none";
  }
}

function productionButtonRight() {
  if (z.style.display === "none") {
    z.style.display = "block";
	x.style.display = "none";
	y.style.display = "none";
    z1.style.display = "block";
	x1.style.display = "none";
	y1.style.display = "none";
  } else {
    x.style.display = "none";
	y.style.display = "none";
	x1.style.display = "none";
	y1.style.display = "none";
  }
}