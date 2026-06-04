const jeopardy = new Audio("./assets/Jeopardy.mp3");

function createTable(categorys = 5, category = "catTest", clueObject, fullClueObject, { dollar }) {
    const body = document.body;
    body.classList.add("body")
    
    // creating structures of the table seperated by elements
    const tableDiv = document.createElement('div');
    tableDiv.classList.add("tableDiv");
    
    const table = document.createElement('table');
    table.classList.add("table");
    
    const caption = document.createElement('caption');
    caption.classList.add("caption");
    caption.innerText = "Jeopardy";

    const tableHead = document.createElement('thead');
    caption.classList.add("tableHead");
    
    const headerRow = document.createElement('tr');
    caption.classList.add("headerRow");
    // assembly of the top of the table with category headers && thead
        body.append(tableDiv);
        tableDiv.append(table);
        table.append(caption);
        table.append(tableHead);
        tableHead.append(headerRow)
    // this needs to be in a loop to create one th for each category
    for(let x = 0; x <= categorys; x++){
        const categoryHeads = document.createElement('th');
        if (category[x] === undefined) {
            continue
        } else {
            categoryHeads.innerText = category[x];
            categoryHeads.classList.add("categoryHeads");
            
            headerRow.append(categoryHeads);

        }
    }
// begin clue building and tableBody
    const tableBody = document.createElement('tbody');
    tableBody.classList.add("tableBody");
    table.append(tableBody);
    //another loop for the amount of clues(question,answers,points object for each category) (outerLoop);
    for(let y = 1; y <= categorys; y++){
        const clueRow = document.createElement('tr');
        clueRow.classList.add("clueRow");
        tableBody.append(clueRow)
        // InnerLoop  
    for(let x = 0; x < category.length; x++){
        const clue = document.createElement('td');
        clue.classList.add("clue");
        clue.innerText = dollar + clueObject[x];
        clue.classList.add(`${category[x]}`);
        
        clueRow.append(clue);
        console.log(clueObject);
        }
    } 
    
    // bottom of the table separated by elements
    const tableFoot = document.createElement('tfoot');
    tableFoot.classList.add("tableFoot");

    const footerRow = document.createElement('tr');
    footerRow.classList.add("footerRow");

    const playerOneScore = document.createElement('th');
    playerOneScore.classList.add("playerOneScore")
    playerOneScore.setAttribute("colspan", "3");
    const scoreObject = [{Name: "PlayerOne", Score: 0},
        {Name: "PlayerTwo", Score: 0}
    ]
    playerOneScore.innerText = scoreObject[0].Name + " " + scoreObject[0].Score;
    

    const playerTwoScore = document.createElement('th');
    playerTwoScore.classList.add("playerTwoScore");
    playerTwoScore.setAttribute("colspan", "3");
    playerTwoScore.innerText = scoreObject[1].Name + " " + scoreObject[1].Score;
    


    // bottom of table assembly
    table.append(tableFoot);
    tableFoot.append(footerRow);
    footerRow.append(playerOneScore);
    footerRow.append(playerTwoScore)

    
    
    const updateScore = (value) => { scoreObject[0].Score += value;  playerOneScore.innerText = scoreObject[0].Name + " " + scoreObject[0].Score;};

    tableDiv.addEventListener('mouseover', (evt)=>{
        console.log(evt.target.tagName)
        if(evt.target.tagName === "TD"){
        evt.target.classList.add("active-hover");
            
    }
    })
    tableDiv.addEventListener('mouseout', (evt) => {
        if (evt.target.tagName === "TD") {
            evt.target.classList.remove("active-hover");
        }
    });
    tableDiv.addEventListener('click', (evt) => {
        console.log(evt.target.className)
        if (evt.target.innerText === fullClueObject[0].Question)
        { evt.target.innerText = fullClueObject[0].Answer }
        else if (evt.target.className.includes("Baseball")) {
            evt.target.innerText = fullClueObject[0].Question
        } 
        else if (evt.target.innerText === fullClueObject[1].Question)
        { evt.target.innerText = fullClueObject[1].Answer }
        else if (evt.target.className.includes("StarTrek")) {
            evt.target.innerText = fullClueObject[1].Question
        }
        else if (evt.target.innerText === fullClueObject[2].Question)
        { evt.target.innerText = fullClueObject[2].Answer }
        else if (evt.target.className.includes("Hockey")) {
            evt.target.innerText = fullClueObject[2].Question
        }
        else if (evt.target.innerText === fullClueObject[3].Question)
        { evt.target.innerText = fullClueObject[3].Answer }
        else if (evt.target.className.includes("FootBall")) {
            evt.target.innerText = fullClueObject[3].Question
        }
        else if (evt.target.innerText === fullClueObject[4].Question)
        { evt.target.innerText = fullClueObject[4].Answer }
        else if (evt.target.className.includes("Soccer")) {
            evt.target.innerText = fullClueObject[4].Question;
            evt.target.style.fontSize = "20px"
            console.log(fullClueObject[4].Answer)
        }
            
        else if (evt.target.innerText === fullClueObject[5].Question)
        { evt.target.innerText = fullClueObject[5].Answer }
        else if (evt.target.innerText === fullClueObject[5].Answer) {
            evt.target.innerText = "✅";
            updateScore(fullClueObject[5].value)
            }
        else if (evt.target.className.includes("Ninjas")) {
            evt.target.innerText = fullClueObject[5].Question
        }
        
        console.log(fullClueObject[0].Answer)
    })
    const resetButton = document.createElement('button');
    resetButton.classList.add("resetButton");
    resetButton.innerText = "Reset Game";
    body.append(resetButton);
    
    

    resetButton.addEventListener('click', (evt) => {
        tableDiv.remove();
        evt.target.remove();
        button();
        jeopardy.pause();
        jeopardy.currentTime = 0;
    // “Jeopardy Sound effect from https://quicksounds.com“

    })
}

const differentCategorys = [
    { category: "Baseball" },
    { category: "StarTrek" },
    { category: "Hockey" },
    { category: "FootBall" },
    { category: "Soccer" },
    { category: "Ninjas" },
]
const clues = [
    { id: 3, category: "Baseball", Question: "In this sport, the ball is hit with this object", Answer: "Baseball Bat", value: 100, dollar: "$" },
    { id: 1, category: "StarTrek", Question: "What is the name of the Captain of the Enterprise in the Next Gen series?", Answer: "John Luke Picard", value: 200, dollar: "$"},
    { id: 2, category: "Hockey", Question: "In this sport, the puck is hit with this object", Answer: "Hockey Stick", value: 100, dollar: "$" },
    { id: 4, category: "FootBall", Question: "In this sport, what is the ball called?", Answer: "FootBall", value: 100, dollar: "$" },
    { id: 5, category: "Soccer", Question: "In the sport of soccer, what is the ball called?", Answer: "SoccerBall", value: 100, dollar: "$" },
    {id: 6, category: "Ninjas", Question: "Ninjas often perform this type of action?", Answer: "Kung Fu", value: 100, dollar: "$"},
]
console.log(differentCategorys)

const mapped = differentCategorys.map(({ category }) =>  category)
console.log(mapped);
const cluesMapped = clues.map(({ value }) => value);

function StartGame() {
    createTable(differentCategorys.length, mapped, cluesMapped, clues, clues[0]);
    
jeopardy.play();
    // “Jeopardy Sound effect from https://quicksounds.com“
    

}

const button = () => {
    const body = document.body;

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add("buttonDiv");
    
    const makeButton = document.createElement('button');
    makeButton.classList.add("makeButton");
    makeButton.innerText = "Click Me to start a game of Jeopardy!";
    
    body.append(buttonDiv);
    buttonDiv.append(makeButton);
    buttonDiv.addEventListener('click', (evt) => {
        StartGame();
        evt.target.remove();
        cluePopUp();
    })
}
button();

function cluePopUp() {
    // create Items
    const body = document.body;
    const popUp = document.createElement('div');
    popUp.classList.add("popUp");

    const question = document.createElement('p');
    question.classList.add("question");
    question.innerText = "Question: This is a category test question?.";
    
    const answerInput = document.createElement('input');
    answerInput.classList.add("answerInput");
    answerInput.placeholder = "Enter your answer Here";
    
    const answerButton = document.createElement('button');
    answerButton.classList.add("answerButton");
    answerButton.innerText = "Submit Answer";

    const answerDiv = document.createElement('div');
    answerDiv.classList.add("answerDiv");

    // append items
    body.append(popUp);
    popUp.append(question);
    popUp.append(answerDiv);
    answerDiv.append(answerInput);
    answerDiv.append(answerButton);
    
    // event listener
    answerButton.addEventListener('click', (evt) => {
        console.log(evt.target.tagName)
        // popUp.classList.remove('popUp');
        popUp.classList.add('hidden');
        // popUp.style.display = "none";
        console.log(popUp.className);
    }); 
}
function returnPopUp() {
    const popUp = document.querySelector('.popUp');
    popUp.classList.remove("hidden");
}
