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

//broccoli cheddar soup story idea
let fConsole = document.getElementById("no-console");

window.onload = function startUp() {
  questionBG(false);
  set();
  ellipsis();
};

function prompter() {
  let userName = prompt("What is your name?");
  let userQuest = prompt("What is your quest?");
  let userFavColor = prompt("What is your favorite color?");
  let swallowAirSpeed = prompt("What is the airspeed of an unladen swallow?");
  let myStory = `<p>Hello ${userName}. Answer me these questions three, and the other side you'll see.</p><p>Your quest is to ${userQuest}</p>`;
  document.getElementById("story").innerHTML = myStory;
}

//bg gen open
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

function waterFallReset() {
  let subDivs = document.querySelectorAll(".subdiv");
  for (let i = 0; i < subDivs.length; i++) {
    subDivs[i].id = `subDiv${i}`;
  }
  let bHeight = window.innerHeight;
  let style = document.createElement("style");
  style.type = "text/css";
  let offset = subDivs.length / 2;
  for (let i = 0; i < subDivs.length; i++) {
    console.log(bHeight - subDivs[0].getBoundingClientRect().top);
    let Keyframes = `@keyframes waterFall${i} {
      0% {
          top: 0;
          opacity: 1;
      }
      56% {
          top: ${bHeight}px;
          opacity: 1;
      }
      57% {
          top: ${bHeight}px;
          opacity: 0;
      }
      58% {
          top: -${subDivs[i].getBoundingClientRect().top * 2}px;
          opacity: 0;
      }
      59% {
          top: -${subDivs[i].getBoundingClientRect().top * 2}px;
          opacity: 1;
      }
      100% {
          top: -1px;
          opacity: 1;
      }
    }`;
    subDivs[i].setAttribute(
      "style",
      `animation-name: waterFall${i}; animation-duration: 2s; animation-iteration-count: infinite; animation-timing-function: linear; animation-delay: ${offset}s;`
    );
    style.append(Keyframes);
    offset = offset - 0.5;
  }
  let head = document.getElementsByTagName("HEAD")[0];
  head.append(style);
}

function log(arg) {
  fConsole.textContent = arg;
}

function questionBG(anim) {
  let bHeight = window.innerHeight;
  let bg = document.getElementById("bg");
  let height = 0;
  while (height < bHeight) {
    let results = new _row();
    let subDiv = results[0];
    let instance = results[1];
    height = height + subDiv.offsetHeight - 70;
    let random = Math.round(Math.random() * 50);
    let random2 = Math.round(Math.random() * 100);
    let sign;
    Math.random() > 0.5 ? (sign = 1) : (sign = -1);
    let sign2;
    Math.random() > 0.5 ? (sign2 = 1) : (sign2 = -1);
    subDiv.setAttribute("style", `margin-left: ${random * sign}px;`);
  }
  if (anim == true) {
    setRandomOffset();
    waterFallReset();
  }
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
//bg gen close

function initialize() {}

function ellipsis() {
  let initial = document.getElementById("InP");
  let text = "Initializing";
  let i = 0;
  setTimeout(
    () => {
      text = text;
      initial.textContent = text;
      i = i + 1;
    },
    500,
    text,
    initial,
    i
  );
  setTimeout(
    () => {
      text = text + ".";
      initial.textContent = text;
      i = i + 1;
    },
    1000,
    text,
    initial,
    i
  );
  setTimeout(
    () => {
      text = text + ".";
      initial.textContent = text;
      i = i + 1;
    },
    1500,
    text,
    initial,
    i
  );
  setTimeout(
    () => {
      text = text + ".";
      initial.textContent = text;
      i = i + 1;
      ellipsis();
    },
    2000,
    text,
    initial,
    i
  );
}

function set() {
  let initializing = document.getElementById("initializing");
  initializing.classList.add("d-none");
}
