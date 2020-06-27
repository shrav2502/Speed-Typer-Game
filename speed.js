const start = document.querySelector("#start");
const time = document.querySelector(".time");
const words = document.querySelector("#words");
const options = document.querySelector("select");
const answer = document.querySelector("#answer");
const finalScore = document.querySelector(".score1");
const scoreCard = document.querySelector("#score");
const timer1 = document.querySelector("#timer");
const finalResult = document.querySelector("#result");

let score = 0;

const easyWordsList = [
  "drag",
  "queen",
  "night",
  "quick",
  "happy",
  "color",
  "list",
  "cat",
  "poop",
];
const mediumWordsList = [
  "animal",
  "kindle",
  "character",
  "bamboo",
  "people",
  "convex",
  "relation",
  "contour",
];
const difficultWordsList = [
  "carpediem",
  "magnificent",
  "beautiful",
  "gorgeous",
  "herbivorous",
  "vocabulary",
  "horticulture",
  "examination",
];

const randomEasy = Math.floor(Math.random() * easyWordsList.length);
const randomMedium = Math.floor(Math.random() * mediumWordsList.length);
const randomDifficult = Math.floor(Math.random() * difficultWordsList.length);

const selection = () => {
  options.addEventListener("click", () => {
    if (options.value == "easy") {
      return randomWordsEasy();
    }
    if (options.value == "medium") {
      return randomWordsMedium();
    }
    if (options.value == "difficult") {
      return randomWordsDifficult();
    }
  });
};

function hello() {
  options.addEventListener("click", () => {
    if (options.value == "easy") {
      answer.addEventListener("keydown", () => {
        if (event.key == "Enter") {
          answer.value = "";
          randomWordsEasy();
        }
      });
    }
    if (options.value === "medium") {
      answer.addEventListener("keydown", () => {
        if (event.key == "Enter") {
          answer.value = "";
          randomWordsMedium();
        }
      });
    }
    if (options.value == "difficult") {
      answer.addEventListener("keydown", () => {
        if (event.key == "Enter") {
          answer.value = "";
          randomWordsDifficult();
        }
      });
    }
  });
}

function randomWordsEasy() {
  const randomEasy = Math.floor(Math.random() * easyWordsList.length);
  const easy = easyWordsList[randomEasy];
  words.textContent = easy;
}

function randomWordsMedium() {
  const randomMedium = Math.floor(Math.random() * mediumWordsList.length);
  const easy = mediumWordsList[randomMedium];
  words.textContent = easy;
}

function randomWordsDifficult() {
  const randomDifficult = Math.floor(Math.random() * difficultWordsList.length);
  const easy = difficultWordsList[randomDifficult];
  words.textContent = easy;
}

function answerCheck() {
  answer.addEventListener("keydown", () => {
    if (event.key == "Enter") {
      if (answer.value == words.textContent) {
        score = score + 1;
        finalScore.textContent = score;
        console.log(score);
      }
    }
  });
}

start.addEventListener("click", visibility);

function visibility() {
  start.classList.add("hide");
  answer.classList.remove("hide");
  words.classList.remove("hide");
  timer1.classList.remove("hide");
  scoreCard.classList.remove("hide");
  finalResult.classList.add("hide");
  score = 0;
  finalScore.textContent = score;
  timer();
}

function timer() {
  let count = 15;
  time.textContent = count;
  const clear = setInterval(() => {
    if (time.textContent <= 1) {
      clearInterval(clear);
      result();
    }
    time.textContent--;
  }, 1000);
}

function result() {
  finalResult.classList.remove("hide");
  finalResult.textContent = "Your score is:" + "  " + score;
  start.classList.remove("hide");
  start.innerHTML = "Play Again";
  answer.classList.add("hide");
  words.classList.add("hide");
  timer1.classList.add("hide");
  scoreCard.classList.add("hide");
}

hello();
answerCheck();
selection();
