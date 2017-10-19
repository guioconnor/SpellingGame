export const speakPhonic = (letter) => {
  const letterPlayer = document.getElementById(letter.toUpperCase());
  if (letterPlayer) { letterPlayer.play() }
}

export const speakSynth = (phrase) => {
  const utterThis = new SpeechSynthesisUtterance(phrase);
  speechSynthesis.speak(utterThis);
}