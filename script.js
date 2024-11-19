"use strict";
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

let index = 0;
let cStory;
let cArr;
let output = [];
let choice;
let alertOver = false;
let promptOpen = false;
let words = {
  1: "noun",
  2: "verb",
  3: "adverb",
  4: "adjective",
  5: "number",
  6: "place name",
  7: "verb ending in -ing",
  8: "plural noun",
  9: "-est adjective",
  10: "place name",
  11: "name",
  12: "facial feature",
};
let annArr = [
  words[8],
  words[9],
  words[5],
  words[6],
  words[6],
  words[7],
  words[4],
  words[11],
  words[8],
  words[4],
  words[1],
  "airplane manufacturer name",
  "three digit number",
  words[5],
  words[5],
  words[5],
  words[8],
  words[5],
  words[12],
  "present tense verb",
  words[3],
  words[8],
  words[1],
  words[7],
  words[8],
  words[8],
  words[1],
  words[1],
  "air-related verb",
  "present tense verb",
  words[7],
  words[1],
  words[2],
  words[1],
  "present tense verb",
  words[7],
  "airline name",
];
let fConsole = document.getElementById("no-console");
window.addEventListener("keyup", function (event) {
  if (event.key == "Enter" || event.keyCode == 13) {
    if (cArr && promptOpen == true) {
      entered();
    }
  }
});
window.onload = function startUp() {
  questionBG(false);
  set();
  // ellipsis("Initializing");
  // prompter(annArr, announcementText);
};
let article = function (item) {
  let vowels = ["a", "e", "i", "o", "u"];
  let art;
  vowels.includes(item[0]) ? (art = "an") : (art = "a");
  return art;
};
function log(arg) {
  fConsole.textContent = arg;
}
function prompter(index) {
  promptOpen = true;
  console.log("prompting");
  document.getElementById("header").textContent = `Please enter ${article(
    cArr[index]
  )} ${cArr[index]}`;
  document.getElementById("textInp").value = "";
  document.getElementById("counter").innerText = `${index + 1} / ${
    cArr.length
  }`;
}
function entered() {
  promptOpen = false;
  let value = document.getElementById("textInp").value;
  output.push(value.toString());
  index++;
  showUp();
}
function showUp() {
  let prompt = document.getElementById("prompt");
  prompt.classList.add("leave");
  setTimeout(
    () => {
      prompt.classList.add("d-none");
      prompt.classList.remove("leave");
      openPrompt();
    },
    1000,
    prompt
  );
}
///////////////////////////////////////////////////////////////
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
  let style = document.getElementsByTagName("STYLE")[0];
  let offset = subDivs.length / 2;
  for (let i = 0; i < subDivs.length; i++) {
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
function openPrompt() {
  let prompt = document.getElementById("prompt");
  prompt.classList.remove("d-none");
  prompt.classList.add("zoomIn_prompt");
  setTimeout(
    () => {
      prompt.classList.remove("zoomIn_prompt");
      prompt.setAttribute("style", "opacity: 1;");
    },
    500,
    prompt
  );
  if (index < cArr.length) {
    prompter(index);
  } else {
    compile();
    return;
  }
}
///////////////////////////////////////////////////////////////

function initialize() {
  alertOver = false;
  console.log("initializing");
  let initialize = document.getElementById("initializing");
  initialize.classList.remove("d-none");
  initialize.classList.add("fadeIn_initialize");
  let subDivs = document.querySelectorAll(".subdiv");
  let tOffset = subDivs.length / 2;
  setRandomOffset();
  waterFallReset();
  setTimeout(
    () => {
      initialize.classList.remove("fadeIn_initialize");
      initialize.classList.add("fadeOut_initialize");
      setTimeout(
        () => {
          initialize.classList.remove("fadeOut_initialize");
          initialize.classList.add("d-none");
          openPrompt();
          alertOver = true;
          return;
        },
        500,
        initialize
      );
    },
    tOffset * 1000,
    initialize
  );
  ellipsis("Initializing");
}
function ellipsis(arg) {
  if (alertOver == true) {
    return;
  } else {
    let initial = document.getElementById("InP");
    let text = arg;
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
        ellipsis(arg);
      },
      2000,
      text,
      initial,
      i
    );
  }
}
function set() {
  let initializing = document.getElementById("initializing");
  initializing.classList.add("d-none");
  let prompt = document.getElementById("prompt");
  prompt.classList.add("d-none");
}
function toStories() {
  let open = document.getElementById("opening");
  let stories = document.getElementById("stories");
  let style = document.getElementsByTagName("STYLE")[0];
  let head = document.getElementsByTagName("HEAD")[0];
  let fClass = `.slideOut {
    animation-name: out1;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards:
  }
  .slideIn {
    transform-origin: 0% 0%;
    animation-name: in1;
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards:
  }  
  `;
  let anim = `@keyframes out1 {
    0% {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    100% {
      left: -${open.offsetWidth + open.getBoundingClientRect().left * 2}px;
      top: 50%;
      transform: translate(0,-50%);
    }
  }
  @keyframes in1 {
    0% {
      left: 50%;
      top: 50%;
      transform: scale(0.7) translate(-50%, -50%);
    }
    100% {
      left: 50%;
      top: 50%;
      transform: scale(1) translate(-50%, -50%);
    }
  }`;
  style.append(fClass);
  style.append(anim);
  head.append(style);
  open.classList.add("slideOut");
  open.setAttribute("style", "pointer-events: none;");
  stories.classList.add("slideIn");
  window.setTimeout(
    () => {
      open.classList.add("d-none");
      open.classList.remove("slideOut");
      stories.classList.remove("slideIn");
    },
    2000,
    open,
    stories
  );
}
///////////////////////////////////////////////////////////////
function go(pick) {
  switch (pick) {
    case "ann":
      initialize();
      let menu = document.getElementById("stories");
      menu.classList.add("d-none");
      cArr = annArr;
      choice = "ann";
      break;
  }
}
function compilingInitialize() {
  alertOver = false;
  console.log("still compiling!");
  let initialize = document.getElementById("initializing");
  let InP = document.getElementById("InP");
  InP.textContent = "Compiling Responses";
  initialize.classList.remove("d-none");
  initialize.classList.add("fadeIn_initialize");
  let subDivs = document.querySelectorAll(".subdiv");
  let tOffset = subDivs.length / 4;
  questionBG();
  setTimeout(
    () => {
      initialize.classList.remove("fadeIn_initialize");
      initialize.classList.add("fadeOut_initialize");
      setTimeout(
        () => {
          initialize.classList.remove("fadeOut_initialize");
          set();
          initialize.classList.add("d-none");
          alertOver = true;
        },
        500,
        initialize
      );
    },
    tOffset * 1000,
    initialize
  );
  ellipsis("Compiling Responses");
}
function compile() {
  console.log("compiling");
  index = 0;
  questionBG();
  compilingInitialize();
  let story;
  console.log(choice);
  switch (choice) {
    case "ann":
      cArr = undefined;
      story = [
        `Hello, dear ${output[0]}! It is our ${output[1]} pleasure to welcome you aboard Flight ${output[2]}, from ${output[3]} to ${output[4]}. We will be ${output[5]} on our ${output[6]} Flagship Airplane, the ${output[7]}. Now pay attention as our ${output[8]} will go through a ${annArr[9]} safety ${output[10]}. We are currently on board a ${output[11]} ${output[12]}. There are ${output[13]} exits on board. ${output[14]} by the tail, ${output[15]} over the ${output[16]}, and ${output[17]} by the ${output[18]}. In the case of an emergency, please do not ${output[19]}. ${output[20]} make your way to the nearest exit, and leave all of your ${output[21]} behind. The ${output[22]} opens by ${output[23]} on the top and bottom ${output[24]}. Inflatable ${output[25]} will extend, and you may dismount the ${output[26]}. In the case of a ${output[27]} landing, inflatable ${output[26]} will open and will ${output[28]} life rafts. Underneath your seat there is also a life jacket, which you can ${output[29]} by ${output[30]} into the tube, or pulling on the ${output[31]}. Infants have a special life jacket. Remember to always ${output[32]} yourself before ${output[32]}ing others. There is a safety brochure in the back of the ${output[33]} in front of you. We ${output[34]} you for ${output[35]} to fly ${output[36]}.`,
        "Boarding Safety Announcement",
      ];
      loadContent(story);
  }
  output = [];
  console.log(annArr, output, story);
}
function loadContent(story) {
  console.log("loading content");
  let content = document.getElementById("content");
  content.innerText = story[0];
  let h1 = document.createElement("h1");
  h1.textContent = story[1];
  content.insertAdjacentHTML("afterbegin", h1);
}
