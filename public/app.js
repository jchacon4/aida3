function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('sounds/pianoA.mp3');
}


function setup() {
  createCanvas( windowWidth, windowHeight )
  mySound.setVolume(0.1);
  drums = EDrums('x*o*x*o-')
  follow = Follow( drums )
}

function draw() {
  background( follow.getValue() * 255 )
  if (mouseIsPressed) {
    fill(0);
    mySound.play();
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
