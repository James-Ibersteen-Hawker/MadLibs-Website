//source found, js SpeechSynthesisUtterance MDN, https://dev.to/devsmitra/convert-text-to-speech-in-javascript-using-speech-synthesis-api-223g
// function speak() {
//   // Create a SpeechSynthesisUtterance
//   const utterance = new SpeechSynthesisUtterance("Welcome to this tutorial!");

//   // Select a voice
//   const voices = speechSynthesis.getVoices();
//   utterance.voice = voices[0]; // Choose a specific voice

//   // Speak the text
//   speechSynthesis.speak(utterance);
// }
//IT CAN TALK!!!!!!!!!!!!!!!!!!!

window.onload = function startUp() {
  prompter();
};

function prompter() {
  let userName = prompt("What is your name?");
  let userQuest = prompt("What is your quest?");
  let userFavColor = prompt("What is your favorite color?");
  let swallowAirSpeed = prompt("What is the airspeed of an unladen swallow?");
  let myStory = `<p>Hello ${userName}. Answer me these questions three, and the other side you'll see.</p><p>Your quest is to ${userQuest}</p>`;
  document.getElementById("story").innerHTML = myStory;
}
