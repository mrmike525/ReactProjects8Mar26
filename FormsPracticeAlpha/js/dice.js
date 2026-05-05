const body = document.body;

const diceContainer = document.createElement('div');
diceContainer.className = "diceContainer";
const diceOne = document.createElement('div');
diceOne.className = "diceOne";
const diceTwo = document.createElement('div');
diceTwo.className = "diceTwo";
const diceThree = document.createElement('div');
diceThree.className = "diceThree";
const diceFour = document.createElement('div');
diceFour.className = "diceFour";
const diceFive = document.createElement('div');
diceFive.className = "diceFive";
const diceSix = document.createElement('div');
diceSix.className = "diceSix";
const rollButton = document.createElement('button');
rollButton.className = "rollButton";

body.append(diceContainer);
diceContainer.append(diceOne);
// diceOne.innerText = randomNum();
diceContainer.append(diceTwo);
// diceTwo.innerText = randomNum();
diceContainer.append(diceThree);
// diceThree.innerText = randomNum();
diceContainer.append(diceFour);
// diceFour.innerText = randomNum();
diceContainer.append(diceFive);
// diceFive.innerText = randomNum();
diceContainer.append(diceSix);
// diceSix.innerText = randomNum();


function randomNum() {
    return Math.floor((Math.random() * 10) + 1)
}
const picArray = ["AbbyAndI.jpeg", "AbbyLook.jpeg", "CoolCar.jpeg", "I.jpeg", "Lynx.jpeg", "WaterFountain.jpeg", "BeccaAndAbby.jpeg"];

const imageOne = document.createElement('img');
imageOne.src = `./assets/${picArray[0]}`;
diceOne.append(imageOne);
imageOne.style.display = "relative"
imageOne.style.width = "100%"
imageOne.style.height = "100%"

const imageTwo = document.createElement('img');
imageTwo.src = `./assets/${picArray[1]}`;
diceTwo.append(imageTwo);
imageTwo.style.display = "relative"
imageTwo.style.width = "100%"
imageTwo.style.height = "100%"

const imageThree = document.createElement('img');
imageThree.src = `./assets/${picArray[2]}`;
diceThree.append(imageThree);
imageThree.style.display = "relative"
imageThree.style.width = "100%"
imageThree.style.height = "100%"

const imageFour = document.createElement('img');
imageFour.src = `./assets/${picArray[3]}`;
diceFour.append(imageFour);
imageFour.style.display = "relative"
imageFour.style.width = "100%"
imageFour.style.height = "100%"

const imageFive = document.createElement('img');
imageFive.src = `./assets/${picArray[4]}`;
diceFive.append(imageFive);
imageFive.style.display = "relative"
imageFive.style.width = "100%"
imageFive.style.height = "100%"

const imageSix = document.createElement('img');
imageSix.src = `./assets/${picArray[5]}`;
diceSix.append(imageSix);
imageSix.style.display = "relative"
imageSix.style.width = "100%"
imageSix.style.height = "100%"

const imageSeven = document.createElement('img');
imageSeven.src = `./assets/${picArray[6]}`;
diceSix.append(imageSeven);
imageSeven.style.display = "relative"
imageSeven.style.width = "100%"
imageSeven.style.height = "100%"