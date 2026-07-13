const jeopardy = new Audio("./assets/Jeopardy.mp3");
function createTable( 
    category = "catTest", 
    value, 
    dollar) {

        // select body
    const body = document.body;
    body.classList.add("body")
    
    // creating structures of the table seperated by elements
    const tableDiv = document.createElement('div');
    tableDiv.classList.add("tableDiv");
    
    const table = document.createElement('table');
    table.classList.add("table");
    
    const caption = document.createElement('caption');
    caption.classList.add("caption");
    caption.innerText = "Jeopardy Clone";

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
    for(let x = 0; x <= category.length; x++){
        const categoryHeads = document.createElement('th');
        if (category[x] === undefined) {
            continue
        } else {
            categoryHeads.innerText = category[x].title;
            categoryHeads.classList.add("categoryHeads");
            
            headerRow.append(categoryHeads);

        }
    }

// begin clue building and tableBody
    const tableBody = document.createElement('tbody');
    tableBody.classList.add("tableBody");
    table.append(tableBody);
    //another loop for the amount of clues(question,answers,points object for each category) (outerLoop);
    for(let y = 0; y < value.length; y++){
        const clueRow = document.createElement('tr');
        clueRow.classList.add("clueRow");
        tableBody.append(clueRow)
        // InnerLoop  
    for(let x = 0; x < category.length; x++){
        const clue = document.createElement('td');
        clue.classList.add("clue");
        clue.innerText = dollar + value[y];
        console.log(value[y])
        clue.classList.add(`${category[x].title}`);
         clue.classList.add(`id:${category[x].id}`);
        
        clueRow.append(clue);
        
        }
    } 
    
    // bottom of the table separated by elements with playerOne and playerTwoScores in footer
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
    footerRow.append(playerTwoScore);

    


    // active cell hover listener
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

    // logic to advance value/questions/answers/checkmark add to score
    tableDiv.addEventListener('click', async (evt) => {
        
        
        if(evt.target.tagName === 'TD'){
            let classID = evt.target.classList.value;
            let innerTextValue = evt.target.innerText;
            console.log(innerTextValue)

            let id = classID.match(/\d+/g);
            id = +id;

            console.log(id)
            await preLoad(id);
            cluePopUp(id, innerTextValue);
            evt.target.innerText = "✅"
            jeopardy.play();
    
        } 
         // event listener
    answerButton.addEventListener('click', (evt) => {
        console.log(evt.target.tagName);
        if(question.innerText === extractedClue.question){
            jeopardy.pause();
            jeopardy.currentTime = 0;
            question.innerText = extractedClue.answer;
        } else if(question.innerText === extractedClue.answer)
            {popUp.classList.add('hidden');
            updatePlayerOneScore(value);
        console.log(popUp.className);
        }
    }); 
    // update score function currently only first player supported
    function updatePlayerOneScore(value){
        scoreObject[0].Score += value;
        playerOneScore.innerText = scoreObject[0].Name + " " + scoreObject[0].Score;
    };
        
    })

    // create resetButton
    const resetButton = document.createElement('button');
    resetButton.classList.add("resetButton");
    resetButton.innerText = "Reset Game";
    body.append(resetButton);
    
    
    // event listener with logic to perform on click
    resetButton.addEventListener('click', (evt) => {
        tableDiv.remove();
        const popUp = document.querySelector('.popUp');
        
        // console.log(popUp)
        popUp.classList.add('hidden');
        
        makeStartButton();
        popUp.remove();
        jeopardy.pause();
            jeopardy.currentTime = 0;
        
    })
}



const makeStartButton = () => {
    const body = document.body;

    const startButtonDiv = document.createElement('div');
    startButtonDiv.classList.add("startButtonDiv");
    
    const startButton = document.createElement('button');
    startButton.classList.add("startButton");
    startButton.innerText = "Click Me to start a game of Jeopardy!";
    
    body.append(startButtonDiv);
    startButtonDiv.append(startButton);
    startButtonDiv.addEventListener('click', (evt) => {
        firstLoad();
        startButtonDiv.remove();
        
        
    })
}
makeStartButton();

// cluePopup
function cluePopUp(classIDValue, innerTextValue) {
    console.log(classIDValue);
    let value = innerTextValue.match(/\d+/g);
    value = +value
    console.log(value);

    const extractedClue = extractedValues.clues.find(clue => clue.value === value );
    console.log(extractedClue.question)
    
    console.log(extractedValues);

    // create Items
    const body = document.body;
    const popUp = document.createElement('div');
    popUp.classList.add("popUp");
    const musicDisclaimer = document.createElement('p');
    musicDisclaimer.innerText = `Jeopardy Sound effect from https://quicksounds.com`;
    const musicDisclaimerLink = document.createElement('a');
    musicDisclaimerLink.innerText = "Music";
    musicDisclaimerLink.setAttribute('href', "https://quicksounds.com");
    musicDisclaimerLink.setAttribute('target', "_blank");
    musicDisclaimerLink.classList.add('musicDisclaimerLink');
    musicDisclaimer.classList.add('musicDisclaimer');

    const question = document.createElement('p');
    question.classList.add("question");
    question.innerText = extractedClue.question;
    
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
    answerDiv.append(musicDisclaimer);
    answerDiv.append(musicDisclaimerLink);
    
    
   
}
function returnPopUp() {
    const popUp = document.querySelector('.popUp');
    popUp.classList.remove("hidden");
}
    

// get main categorys and individual categorys
let extractedCategorys = [];
let extractedValues = [];



// firstLoad calls secondLoad to get data and call createTable **Preloading data**** and send it to createTable
const preLoad = async (id) => {
    await getIndividualCategories(id)
}
const firstLoad = async () => {
    await secondLoad();
    // console.log(extractedCategorys); 
    await getIndividualCategories();
    createTable(extractedCategorys,
        extractedValues.clues.map(({value})=> value),
        "$"    
    );
};



    async function secondLoad(){
    let y = await getCategories(2);
    extractedCategorys = [];
        y.forEach(
            function({title, id}){
            const titleAddDash = title.replaceAll(" ", "-");
                extractedCategorys.push({title: `${titleAddDash}`, id})
    })
    }

async function getCategories(count = 100) {
    let result = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?
count=${count}`);
    let extracted = await result.data;
    const categories = [];
        categories.push(
            ...extracted.map(({ id, title, clues_count }) => ({
                id, 
                title, 
                clues_count 
            }))
        );
    return categories
}

async function getIndividualCategories(id = 2) {
        let result = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?
id=${id}`);
console.log(result.data);

const {data} = result;
console.log(data);

const clues = data.clues
extractedValues = {category: data.title, id: data.id, clues: [...clues]};
console.log(extractedValues)
console.log(extractedValues.category);
console.log(extractedValues.id);
};

