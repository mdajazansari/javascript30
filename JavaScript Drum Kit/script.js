function playSound(e){
    const sound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    // console.log(key);
    // console.log(sound);
    if (!sound) return; //stops the funtion from running altogether
    sound.currentTime = 0; //rewind to the start
    sound.play();
    key.classList.add("playing");
  }

  function removeTransition(e) {
    // console.log(e);  //Isse hi wo jitne bhi events hai wo print hote hai. [tranform, border bottom color, border left color, border right color, border top color and box shadow]
    if (e.propertyName !== "transform") return; // skip it if it's not a tranform
    // console.log(e.propertyName);
    // console.log(this);
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach(key => key.addEventListener("transitionend", removeTransition));

  window.addEventListener("keydown", playSound);
