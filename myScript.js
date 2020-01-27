/* Set the width of the side navigation to 250px */

function myFunction(x) {
  	x.classList.toggle("change");
 	var side = document.getElementById("mySidenav").style.width;
	if (side == 0 || side == "0px") {
		document.getElementById("mySidenav").style.width = "500px";
	
	}
	else {
		document.getElementById("mySidenav").style.width = "0";
	}
}