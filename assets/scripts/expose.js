// expose.js
let select, audio, volume, icon;

window.addEventListener('DOMContentLoaded', init);

function init() {
const jsConfetti = new JSConfetti()
const audio = document.querySelector('.hidden');
const volume = document.getElementById('volume');
const icon = document.querySelector('[alt^="Volume level"]');
const select = document.getElementById('horn-select');

select.addEventListener('input', () => {
  updateImage(select.value);
});

volume.addEventListener('input', () => {
  updateVolume();
});

document.querySelector('button').addEventListener('click', () => {
  audio.play();
  if (select.value === 'party-horn') {
    jsConfetti.addConfetti();
  }
});

function updateImage(value) {
  const image = document.querySelector('[alt="No image selected"]');
  image.setAttribute('src', `assets/images/${value}.svg`);
  audio.setAttribute('src', `assets/audio/${value}.mp3`);
}

function updateVolume() {
  const value = volume.value;
  if (value == 0) {
    icon.setAttribute('src', 'assets/icons/volume-level-0.svg');
  } else if (value < 34) {
    icon.setAttribute('src', 'assets/icons/volume-level-1.svg');
  } else if (value < 67) {
    icon.setAttribute('src', 'assets/icons/volume-level-2.svg');
  } else {
    icon.setAttribute('src', 'assets/icons/volume-level-3.svg');
  }
  audio.volume = value / 100;
}

}
