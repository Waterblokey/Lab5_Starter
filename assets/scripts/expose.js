// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // relevant HTML elements such as the dropdown menu, volume slider, and the "Play Sound" button
  const hornType = document.getElementById("horn-select");
  const volume = document.getElementById("volume");
  const soundButton = document.querySelector("button");

  // jsConfetti for confetti on play sound button click
  const jsConfetti = new JSConfetti();

  // change the image and audio source when the dropdown menu is changed
  hornType.addEventListener('change', (event) => {
    const image = document.querySelector('img');
    const audio = document.querySelector('audio');
    image.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
  });

  // change the volume image when the volume slider is changed
  volume.addEventListener('input', (event) => {
    const volumeImage = document.querySelector('#volume-controls img');
    const volumeValue = event.target.value;
    volumeImage.src = volumeValue == 0 ? 'assets/icons/volume-level-0.svg' : volumeValue < 33 ? 'assets/icons/volume-level-1.svg' : volumeValue < 67 ? 'assets/icons/volume-level-2.svg' : 'assets/icons/volume-level-3.svg';
//    volumeImage.src = `assets/icons/volume-level-${Math.ceil(volumeValue / 33)}.svg` alternate method
  });

  // play the selected audio when the "Play Sound" button is clicked
  soundButton.addEventListener('click', (event) => {
    const audio = document.querySelector('audio');
    audio.volume = volume.value / 100;
    audio.play();

    if(hornType.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}