const body = document.body;
const data = [
    {name: "Michael", age: 43},
    {name: "Abby", age: 42},
    {name: "Becca", age: 23},
    {name: "Peepers", age: 23},
    {name: "Dexter", age: 2},
    {name: "Pippin", age: 3},

];

console.log(data);

const root = document.querySelector('.root');
const red = document.createElement('p');
red.innerText = "Hello";
red.className = "greeting";
root.append(red);
data.push({name: "TJ"});
data.map(({name, age}) => 
    red.append(" " + name + ", " + age )
);

console.log(data);

const diceValues = [0,1,2,3,4,5,6,7,8,9]
const dice = ["diceOne", "diceTwo", "diceThree", "diceFour", "diceFive", "diceSix"]
renderedDice();
dice.map((value)=>{console.log(value); return labelDice(value)}); 

function labelDice(value){
   
    for(let x = 0; x <= dice.length; x++){
        let value = document.getElementsByClassName(dice[x]);
        console.log(value)
        
    }
    return value;
}


function renderedDice(){
    
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
red.appendChild(diceContainer);
diceContainer.append(diceOne);
diceOne.style.marginLeft = "10px"
diceContainer.append(diceTwo);
diceContainer.append(diceThree);
diceContainer.append(diceFour);
diceContainer.append(diceFive);
diceContainer.append(diceSix);
diceSix.style.marginRight = "10px"
rollDice(diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix)

}
function makeDiceParent(){
    const diceParent = document.createElement('div');
    diceParent.className = "diceParent";
    body.append(diceParent);
    return diceParent
}
function makeDice(count = 3){
    
    const diceKey = 
    [
        {id: 1, name: "diceOne"},
        {id: 2, name: "diceTwo"},
        {id: 3, name: "diceThree"},
        {id: 4, name: "diceFour"},
        {id: 5, name: "diceFive"},
        {id: 6, name: "diceSix"},
    ];
    const parent = makeDiceParent();
    const numOfDice = diceKey.filter(({id})=> id <= count);
    const diceElements = numOfDice.map(({name}) => {
        const diceDiv = document.createElement('div');
        diceDiv.className = name;
        root.append(parent);
        parent.append(diceDiv)
        diceDiv.style.marginLeft = "5px"
        diceDiv.style.marginRight = "5px"
        
        console.log(diceDiv);
        
        return diceDiv
    });
    const rollButton = document.createElement('button');
rollButton.innerText = "Roll"
const diiceParent = document.querySelector('.diceParent');
const buttonDiv = document.createElement('div');
diiceParent.append(buttonDiv);
buttonDiv.append(rollButton)

rollButton.addEventListener('click',()=>rollDice(...superDice) )
buttonDiv.style.position = "relative"
buttonDiv.style.border = "2px solid black"
buttonDiv.style.flexDirection = "row"
buttonDiv.style.display = "flex"
buttonDiv.style.position = "relative"
buttonDiv.style.height = "50px"
buttonDiv.style.width = "50px"
buttonDiv.style.top = "70%"
buttonDiv.style.right = "40%"
rollButton.style.justifyContent = "center"
rollButton.style.position = "relative"
rollButton.style.width = "100%"
    rollDice(...diceElements);
    return diceElements;
}


function rollDice(...dice){
const random = () => Math.floor(Math.random() * 10);
dice.forEach((value) => value.innerText = random())

}

const superDice = makeDice(6);


// rollDice(...superDice);
