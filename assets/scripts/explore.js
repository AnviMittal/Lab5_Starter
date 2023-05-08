// explore.js
const synth = window.speechSynthesis;
const select = document.getElementById('voice-select');
const button = document.querySelector('button');
const image = document.querySelector('[alt="Smiling face"]');

button.addEventListener('click', textSpeech);

function init() {
  setTimeout(() => {
    const voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      select.appendChild(option);
    }
  }, 100);
}

function textSpeech() {
  const textToSpeak = document.getElementById('text-to-speak').value;
  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  const selectedVoice = select.value && synth.getVoices().find(voice => voice.name === select.value);

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  image.src = 'assets/images/smiling-open.png';

  utterance.onend = () => {
    image.src = 'assets/images/smiling.png';
  };

  synth.speak(utterance);
}
window.addEventListener('DOMContentLoaded', init);