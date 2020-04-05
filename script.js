var isPlaying = false;


function playAudio() {
  if (isPlaying) {
    document.getElementById("myAudio").pause();
    isPlaying = false;
  } else {
    document.getElementById("myAudio").play();
    isPlaying = true;
  }
    document.getElementById("myButton").classList.add("buttonMove");
}

function scrollDown() {
    document.getElementById("scrollDown").classList.add("fadeMouse");
    
}

function contact() {
    prompt("Please tell us your name","name");
    prompt("Enter an email we can contact you at","email");
}
		
