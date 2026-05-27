function createTable(categorys = 5, category = "catTest", clueObject, fullClueObject, {dollar}){
    const body = document.body;
    // structure of the table seperated by elements
    const tableDiv = document.createElement('div');

    const table = document.createElement('table');

    const caption = document.createElement('caption');
    caption.innerText = "Jeopardy";

    const tableHead = document.createElement('thead');

    const headerRow = document.createElement('tr');
    
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
            categoryHeads.innerText = category[x]
            categoryHeads.style.color = "rgb(255,255,255)"
            headerRow.append(categoryHeads);

        }
    }
// begin clue building and tableBody
const tableBody = document.createElement('tbody');
table.append(tableBody)
    //another loop for the amount of clues(question,answers,points object for each category) (outerLoop);
    for(let y = 1; y <= categorys; y++){
        const clueRow = document.createElement('tr');
        tableBody.append(clueRow)
        // InnerLoop  
    for(let x = 0; x < category.length; x++){
        const clue = document.createElement('td');
        clue.innerText = dollar + clueObject[x];
        clue.classList.add(`${category[x]}`)
        clue.style.border = "2px solid blue";
        clue.style.color = "rgba(237, 177, 37, 1)"
        clue.style.border = "4px solid black"
        clueRow.append(clue);
        console.log(clueObject);
        }
    } 
    
    // bottom of the table separated by elements
    const tableFoot = document.createElement('tfoot');
    
    const footerRow = document.createElement('tr');

    const playerOneScore = document.createElement('th');
    playerOneScore.setAttribute("colspan", "3");
    const scoreObject = [{Name: "PlayerOne", Score: 0},
        {Name: "PlayerTwo", Score: 0}
    ]
    playerOneScore.innerText = scoreObject[0].Name + " " + scoreObject[0].Score;
    playerOneScore.style.color = "rgba(237, 199, 32, 1)"

    const playerTwoScore = document.createElement('th');
    playerTwoScore.setAttribute("colspan", "3");
    playerTwoScore.innerText = scoreObject[1].Name + " " + scoreObject[1].Score;
    playerTwoScore.style.color = "rgba(237, 199, 32, 1)"


    // bottom of table assembly
    table.append(tableFoot);
    tableFoot.append(footerRow);
    footerRow.append(playerOneScore);
    footerRow.append(playerTwoScore)

    // tableStyling
    tableDiv.style.display = "flex";
    tableDiv.style.justifyContent = "center";
    tableDiv.style.border = "4px solid rgb(27, 76, 225)";
    table.style.border = "4px solid rgb(249, 196, 19)";
    table.style.fontSize = "40px";
    table.style.backgroundColor = "rgb(28, 45, 234)";
    caption.style.backgroundColor = "rgb(28,45,234)";
    caption.style.color = "rgb(255,255,255)"
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.margin = "30px";
    
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
    resetButton.innerText = "Reset Game";
    body.append(resetButton);
    body.style.flexDirection = "column";
    resetButton.style.fontSize = "35px";
    resetButton.style.marginTop = "25px";
    // resetButton.style.color = "red"

    resetButton.addEventListener('click', (evt) => {
        tableDiv.remove();
        evt.target.remove();
        button();

    })
    caption.style.fontSize = "100px"
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
}

const button = () => {
    const body = document.body;
    const buttonDiv = document.createElement('div');
    const makeButton = document.createElement('button');
    makeButton.innerText = "Click Me to start a game of Jeopardy!";
    body.append(buttonDiv);
    buttonDiv.append(makeButton);
    buttonDiv.addEventListener('click', (evt) => {
        StartGame();
        evt.target.remove();
    })
    // styling
    buttonDiv.style.display = "flex";
    buttonDiv.style.alignContent = "center";
    buttonDiv.style.justifyContent = "center";
    buttonDiv.style.position = "absolute";
    buttonDiv.style.top = "40%";
    buttonDiv.style.left = "20%";
    makeButton.style.fontSize = "50px";
    makeButton.style.backgroundColor = "white";
    
    
}
button();

