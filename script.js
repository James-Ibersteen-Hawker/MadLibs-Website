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
  questionBG();
};

function prompter() {
  let userName = prompt("What is your name?");
  let userQuest = prompt("What is your quest?");
  let userFavColor = prompt("What is your favorite color?");
  let swallowAirSpeed = prompt("What is the airspeed of an unladen swallow?");
  let myStory = `<p>Hello ${userName}. Answer me these questions three, and the other side you'll see.</p><p>Your quest is to ${userQuest}</p>`;
  document.getElementById("story").innerHTML = myStory;
}

/*.question {
      animation-name: fadeInOut;
      animation-duration: 5s;
      animation-iteration-count: infinite;
    }*/

//bg gen
// window.addEventListener("resize", (window.location = "index.html"));
function setRandomOffset() {
  let questions = document.querySelectorAll(".question");
  Array.from(questions);
  for (let i = 0; i < questions.length; i++) {
    questions[i].setAttribute(
      "style",
      `animation-name: fadeInOut; animation-duration: 8s; animation-iteration-count: infinite; animation-delay: ${
        Math.random() * 10 - 9
      }s;`
    );
  }
}

function questionBG() {
  let bHeight = window.innerHeight;
  let bg = document.getElementById("bg");
  let height = 0;
  while (height < bHeight) {
    let results = new _row();
    let subDiv = results[0];
    let instance = results[1];
    height = height + subDiv.offsetHeight - 70;
    let random = Math.round(Math.random() * 50);
    let sign;
    Math.random() > 0.5 ? (sign = 1) : (sign = -1);
    subDiv.setAttribute("style", `margin-left: ${random * sign}px;`);
  }
  setRandomOffset();
}

function _row() {
  let questions = [];
  let bWidth = document.body.offsetWidth;
  let widths = 0;
  let bg = document.getElementById("bg");
  let subdiv = document.createElement("div");
  subdiv.classList.add("subdiv");
  bg.append(subdiv);
  while (widths < bWidth) {
    let random = Math.round(Math.random() * 100);
    let question = new _question(random);
    subdiv.append(question);
    widths = widths + question.offsetWidth;
    questions.push(question);
  }
  return [subdiv, questions];
}

function _question(width) {
  let question = document.createElement("div");
  question.classList.add("question");
  question.setAttribute("style", `transform: scale(${width}%)`);
  return question;
}
