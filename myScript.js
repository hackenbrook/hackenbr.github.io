/* Set the width of the side navigation to 250px */
function myFunction(x) {
	x.classList.toggle("change");
	x.classList.toggle("addLinks");
	var side = document.getElementById("mySidenav").style.width;
	if (side == 0 || side == "0px") {

		document.getElementById("mySidenav").style.width = "400px";
		document.getElementById("mySidenav").style.zIndex = "1";
		document.getElementsByClassName("bar1").style.zIndex = "2";
	
		

	}
	else {
		document.getElementById("mySidenav").style.width = "0";
		document.getElementById("mySidenav").style.zIndex = "2";
	}

}
