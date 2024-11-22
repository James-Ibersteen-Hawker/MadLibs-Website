"use strict";
//source found, js SpeechSynthesisUtterance MDN, https://dev.to/devsmitra/convert-text-to-speech-in-javascript-using-speech-synthesis-api-223g

let index = 0;
let cStory;
let cArr;
let output = [];
let choice;
let alertOver = false;
let promptOpen = false;
let enterPressed = false;
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
  "adjective ending in -est",
  words[5],
  words[6],
  words[6],
  words[8],
  words[11],
  words[5],
  words[5],
  words[5],
  words[5],
  words[2],
  `${words[3]} (Capital first letter)`,
  words[8],
  words[7],
  words[8],
  words[1],
  words[8],
  "air-related verb",
  words[7],
  words[2],
  "Previous verb -ing",
  words[1],
  words[7],
  "airline name",
];
let brocArr = [words[1]];
let fConsole = document.getElementById("no-console");
window.addEventListener("keydown", function (event) {
  if (event.key == "Enter" || event.keyCode == 13) {
    if (cArr && promptOpen == true && enterPressed == false) {
      let button = document.getElementById("submit");
      button.classList.add("black_border");
      enterPressed = true;
    }
  }
});
window.addEventListener("keyup", function (event) {
  if (event.key == "Enter" || event.keyCode == 13) {
    if (cArr && promptOpen == true) {
      let button = document.getElementById("submit");
      button.classList.remove("black_border");
      entered();
    }
  }
});
window.onload = function startUp() {
  questionBG(false);
  set();
  let content = document.getElementById("content");
  content.classList.add("d-none");
};
let article = function (item) {
  let vowels = ["a", "e", "i", "o", "u"];
  let art;
  vowels.includes(item[0]) ? (art = "an") : (art = "a");
  return art;
};
function capital(item) {
  console.log(item);
  let letters = item.split("");
  letters[0] = letters[0].toUpperCase();
  letters.join();
  return letters;
}
function log(arg) {
  fConsole.textContent = arg;
}
function prompter(index) {
  promptOpen = true;
  document.getElementById("header").textContent = `${cArr[index]}`;
  document.getElementById("textInp").value = "";
  // document.getElementById("counter").innerText = `${index + 1} / ${
  //   cArr.length
  // }`;
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
    750,
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
      enterPressed = false;
    },
    350,
    prompt
  );
  if (index < cArr.length) {
    prompter(index);
    progressor(index);
  } else {
    compile();
    return;
  }
}
function progressor(dist) {
  let progress = document.getElementById("progress");
  progress.classList.remove("d-none");
  let width = 100;
  let unit = width / cArr.length;
  let percent = Math.round(unit) * dist;
  let style = document.getElementsByTagName("STYLE")[0];
  if (dist == 0) {
    let keyframes = `
    @keyframes moveOver {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(${unit}%);
      }
    }
    `;
    let moveClass = `
      .progressMove {
        animation-name: moveOver;
        animation-fill-mode: forwards;
        animation-duration: 0.5s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: 1;
      }
    `;
    style.append(keyframes);
    style.append(moveClass);
  }
  let progressor = document.getElementById("progressor");
  progressor.classList.add("progressMove");
  let percentage = document.getElementById("percentage");
  setTimeout(
    () => {
      progressor.setAttribute("style", `left: -${100 - unit * dist}%;`);
      progressor.classList.remove("progressMove");
      // percentage.textContent = `${percent}%`;
      percentage.textContent = `${index + 1} / ${cArr.length}`;
    },
    500,
    progressor
  );
}
///////////////////////////////////////////////////////////////

function initialize() {
  alertOver = false;
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
          progressor(index);
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
  let progress = document.getElementById("progress");
  progress.classList.add("d-none");
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
  let menu = document.getElementById("stories");
  switch (pick) {
    case "ann":
      initialize();
      menu.classList.add("d-none");
      cArr = annArr;
      choice = "ann";
      break;
    case "broc":
      initialize();
      menu.classList.add("d-none");
      cArr = brocArr;
      choice = "broc";
      break;
    case "job":
      initialize();
      menu.classList.add("d-none");
      cArr = undefined;
      choice = "job";
      break;
    case "news":
      initialize();
      menu.classList.add("d-none");
      cArr = undefined;
      choice = "news";
      break;
  }
}
function compilingInitialize(story) {
  alertOver = false;
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
          loadContent(story);
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
  let style = document.getElementsByTagName("STYLE")[0];
  let bg = document.getElementById("bg");
  bg.innerHTML = "";
  style.remove();
  index = 0;
  questionBG();
  let story;
  switch (choice) {
    case "ann":
      cArr = undefined;
      story = [
        `Hello dear ${output[0]}! It is our ${output[1]} pleasure to welcome you aboard Flight ${output[2]}, from ${output[3]} to ${output[4]}. Now please pay attention as our ${output[5]} will go through a safety presentation. We are currently on board our Flagship airplane, the ${output[6]}. There are ${output[7]} exits on board. ${output[8]} by the tail, ${output[9]} over the wings, and ${output[10]} by the nose. In the case of an emergency, please do not ${output[11]}. ${output[12]} make your way to the nearest exit, and leave all of your ${output[13]} behind. The door opens by ${output[14]} on the top and bottom handles. Inflatable ${output[15]} will extend, and you will be able to dismount the plane. In the case of a ${output[16]} landing, life ${output[17]} will inflate. Underneath your seat there is a life jacket, which you can ${output[18]} by ${output[19]} into the tube, or by pulling on the cord. Infants have a special life jacket. Always remember to ${output[20]} yourself before ${output[21]} others. There is a safety brochure in the back of the ${output[22]} in front of you. We thank you for ${output[23]} to fly ${output[24]}.`,
        "Boarding Safety Announcement",
      ];
      break;
    case "broc":
      cArr = undefined;
      story = [`${output[0]}.`, "Broccoli Cheddar Soup"];
      break;
    case "job":
      cArr = undefined;
      story = [`story text`, "Job Interview"];
      break;
    case "news":
      cArr = undefined;
      story = [``, "Olympic News Reporter"];
      break;
  }
  compilingInitialize(story);
  output = [];
}
function talk(arg) {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(arg.toString());

  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice

  // Speak the text
  speechSynthesis.speak(utterance);
}
function loadContent(story) {
  let content = document.getElementById("content");
  content.classList.remove("d-none");
  let h1 = document.createElement("h1");
  h1.textContent = story[1];
  let p = document.createElement("p");
  p.textContent = story[0];
  let button = document.createElement("button");
  button.classList.add("speakButton");
  button.setAttribute("onclick", `talk("${story[0].toString()}")`);
  button.textContent = "Read Aloud";
  let link = document.createElement("span");
  link.textContent = "Home";
  link.setAttribute("onclick", "location.reload()");
  let bottom = document.createElement("div");
  bottom.classList.add("bottom");
  content.append(h1);
  // content.setAttribute("style", `padding-top: ${h1.offsetHeight + 10}px;`);
  content.append(button);
  content.append(p);
  bottom.append(link);
  content.append(bottom);
}
