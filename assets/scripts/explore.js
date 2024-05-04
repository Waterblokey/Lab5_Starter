// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // relevant HTML elements such as the dropdown menu, textbox, and the "Press to Talk" button      
  const select = document.getElementById('voice-select');
  const inputTxt = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const face = document.querySelector('img');


  // speechSynthesisUtterance and speechSynthesis
  const synth = window.speechSynthesis;

  // populate the voice select dropdown with available voices
  function populateVoiceSelect() {
    let voices = synth.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      select.appendChild(option);
    }
  }

  // check if the voices have been loaded before populating the dropdown
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceSelect;
  }

  // speak the text in the textbox when the button is clicked
  button.addEventListener('click', function() {
    const selectedOption = select.selectedOptions[0];
    const lang = selectedOption.getAttribute('data-lang');
    const name = selectedOption.getAttribute('data-name');         // not sure if we need this but it was in the docs
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);

    utterThis.lang = lang;
    synth.speak(utterThis);


    // change the face image when the speech starts and ends
    utterThis.onstart = function() {
      face.src = 'assets/images/smiling-open.png';
    }
    utterThis.onend = function() {
      face.src = 'assets/images/smiling.png';
    }
  });
}