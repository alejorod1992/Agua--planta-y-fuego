// Variables

const computer = document.getElementById("computer");
const me = document.getElementById("me");
const result = document.getElementById("result");
const allChoices = document.querySelectorAll("button");

let myChoice;
let computerChoice;
let finalResult;

//Evento Click

allChoices.forEach((allChoices) =>
  allChoices.addEventListener("click", (e) => {
    myChoice = e.target.id;
    me.innerHTML = myChoice;
    createComputerChoice();
    createResult();
  })
);

//Funcion numero al azar

function createComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  if (randomNumber === 1) {
    computerChoice = " AGUA";
  }

  if (randomNumber === 2) {
    computerChoice = " PLANTA";
  }

  if (randomNumber === 3) {
    computerChoice = " FUEGO";
  }

  computer.innerHTML = computerChoice;
}

//Funcion resultado

function createResult() {
  if (computerChoice === myChoice) {
    finalResult = " Empate perri :/";
  }

  if (computerChoice === " AGUA" && myChoice === " FUEGO") {
    finalResult = " Perdiste :( mal ahí";
  }
  if (computerChoice === " AGUA" && myChoice === " PLANTA") {
    finalResult = " Ganaste :)";
  }
  if (computerChoice === " PLANTA" && myChoice === " FUEGO") {
    finalResult = " Ganaste :)";
  }
  if (computerChoice === " PLANTA" && myChoice === " AGUA") {
    finalResult = " Perdiste :( mal ahí";
  }
  if (computerChoice === " FUEGO" && myChoice === " AGUA") {
    finalResult = " Ganaste :)";
  }
  if (computerChoice === " FUEGO" && myChoice === " PLANTA") {
    finalResult = " Perdiste :( mal ahí";
  }
  result.innerHTML = finalResult;
}

