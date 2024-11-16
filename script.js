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

/////////////////////////////////////////// announcement madLib /////////////////////////////////////////////

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
let announcementText = [
  `Hello, dear ${annArr[0]}! It is our ${annArr[1]} pleasure to welcome you aboard Flight ${annArr[2]}, from ${annArr[3]} to ${annArr[4]}. We will be ${annArr[5]} on our ${annArr[6]} Flagship Airplane, the ${annArr[7]}. Now pay attention as our ${annArr[8]} will go through a ${annArr[9]} safety ${annArr[10]}. We are currently on board a ${annArr[11]} ${annArr[12]}. There are ${annArr[13]} exits on board. ${annArr[14]} by the tail, ${annArr[15]} over the ${annArr[16]}, and ${annArr[17]} by the ${annArr[18]}. In the case of an emergency, please do not ${annArr[19]}. ${annArr[20]} make your way to the nearest exit, and leave all of your ${annArr[21]} behind. The ${annArr[22]} opens by ${annArr[23]} on the top and bottom ${annArr[24]}. Inflatable ${annArr[25]} will extend, and you may dismount the ${annArr[26]}. In the case of a ${annArr[27]} landing, inflatable ${annArr[26]} will open and will ${annArr[28]} life rafts. Underneath your seat there is also a life jacket, which you can ${annArr[29]} by ${annArr[30]} into the tube, or pulling on the ${annArr[31]}. Infants have a special life jacket. Remember to always ${annArr[32]} yourself before ${annArr[32]}ing others. There is a safety brochure in the back of the ${annArr[33]} in front of you. We ${annArr[34]} you for ${annArr[35]} to fly ${annArr[36]}.`,
  "Boarding Safety Announcement",
];

/////////////////////////////////////////// Job Interview madLib /////////////////////////////////////////////

let fConsole = document.getElementById("no-console");

window.onload = function startUp() {
  questionBG(false);
  set();
  ellipsis("Initializing");
  prompter(annArr, announcementText);
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

function prompter(inputArr, story) {
  let output = [];
  for (let i = 0; i < inputArr.length; i++) {
    output.push(prompt(`Please enter ${article(inputArr[i])} ${inputArr[i]}`));
  }
  let storyBox = documen.getElementById("stories");
  storyBox.innerHTML = `<h1>${story[1]}</h1><p>${story[0]}</p>`;
}

///////////////////////////////////////////////////////////////
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
  let style = document.getElementsByTagName("STYLE")[0];
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
///////////////////////////////////////////////////////////////
//screens functions open

function initialize() {
  ellipsis("Initializing");
}
function ellipsis(arg) {
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
  let opening = document.getElementById("opening");
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

//screens functions close
///////////////////////////////////////////////////////////////

function go(pick) {
  switch (pick) {
    case "ann":
  }
}
