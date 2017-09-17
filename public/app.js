function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('sounds/pianoA.mp3');
}


function setup() {
  createCanvas(640, 480);
  mySound.setVolume(0.1);
  var fs = fullscreen();
  fullscreen(fs);
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
    mySound.play();
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
