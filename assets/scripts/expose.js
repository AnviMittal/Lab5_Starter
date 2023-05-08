// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
const Confetti = new JSConfetti()
const hiddenAudio = document.querySelector('.hidden');
const volume = document.getElementById('volume');
const volumeLevel = document.querySelector('[alt^="Volume level"]');
const select = document.getElementById('horn-select');

select.addEventListener('input', () => {
  Image(select.value);
});

volume.addEventListener('input', () => {
  Volume();
});

document.querySelector('button').addEventListener('click', () => {
  hiddenAudio.play();
  if (select.value === 'party-horn') {
    Confetti.addConfetti();
  }
});

function Image(value) {
  const image = document.querySelector('[alt="No image selected"]');
  image.setAttribute('src', `assets/images/${value}.svg`);
  hiddenAudio.setAttribute('src', `assets/audio/${value}.mp3`);
}

function Volume() {
  const value = volume.value;
  if (value == 0) {
    volumeLevel.setAttribute('src', 'assets/icons/volume-level-0.svg');
  } else if (value < 34) {
    volumeLevel.setAttribute('src', 'assets/icons/volume-level-1.svg');
  } else if (value < 67) {
    volumeLevel.setAttribute('src', 'assets/icons/volume-level-2.svg');
  } else {
    volumeLevel.setAttribute('src', 'assets/icons/volume-level-3.svg');
  }
  hiddenAudio.volume = value / 100;
}

}
