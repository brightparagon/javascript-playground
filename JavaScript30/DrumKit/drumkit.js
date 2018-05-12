function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return; // stop the function if there is no corresponding audio
  audio.currentTime = 0; // enable kicking off sound on every clicking
  audio.play();
  key.classList.add('playing');
};

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

module.exports = {
  playSound: playSound,
  removeTransition: removeTransition
};
