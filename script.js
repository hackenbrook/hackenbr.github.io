var isPlaying = false;


function playAudio() {
  if (isPlaying) {
    document.getElementById("myAudio").pause();
    isPlaying = false;
  } else {
    document.getElementById("myAudio").play();
    isPlaying = true;
  }
    document.getElementById("button").classList.add("fadeAudioButton");
}

function scrollDown() {
    document.getElementById("scrollDown").classList.add("fadeMouse");
    
}

function contact() {
    prompt("Please tell us your name","Name:")
    prompt("Enter an email we can contact you at","Name:")
}
		