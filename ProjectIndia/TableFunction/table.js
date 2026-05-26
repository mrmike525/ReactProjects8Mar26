function createTable(categorys = 5, categoryObject = "catTest", clueObject = "clueTest"){
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
    for(let x = 1; x <= categorys; x++){
    const categoryHeads = document.createElement('th');
        categoryHeads.innerText = categoryObject;
        headerRow.append(categoryHeads);
    }
// begin clue building and tableBody
const tableBody = document.createElement('tbody');
table.append(tableBody)
    //another loop for the amount of clues(question,answers,points object for each category) (outerLoop);
    for(let y = 1; y <= categorys; y++){
        const clueRow = document.createElement('tr');
        tableBody.append(clueRow)
        // InnerLoop  
    for(let x = 1; x <= categorys; x++){
        const clue = document.createElement('td');
        clue.innerText = clueObject;

        clueRow.append(clue);
        }
    } 
    
    // bottom of the table separated by elements
    const tableFoot = document.createElement('tfoot');
    
    const footerRow = document.createElement('tr');

    const playerOneScore = document.createElement('th');
    const scoreObject = [{Name: "PlayerOne", Score: 0},
        {Name: "PlayerTwo", Score: 0}
    ]
    playerOneScore.innerText = scoreObject[0].Name + " " + scoreObject[0].Score;

    const playerTwoScore = document.createElement('th');
    playerTwoScore.innerText = scoreObject[1].Name + " " + scoreObject[1].Score;


    // bottom of table assembly
    table.append(tableFoot);
    tableFoot.append(footerRow);
    footerRow.append(playerOneScore);
    footerRow.append(playerTwoScore)

    // tableStyling
    tableDiv.style.display = "flex";
    tableDiv.style.justifyContent = "center";
    tableDiv.style.border = "4px solid rgb(27, 76, 225)"
    table.style.border = "4px solid rgb(249, 196, 19)";

    tableDiv.addEventListener('mouseover', (evt)=>{
        console.log(evt.target.tagName)
        if(evt.target.tagName === "TD"){
        evt.target.classList.add("active-hover");
            scoreObject[0].Score = scoreObject[0].Score +  1;
            console.log(scoreObject[0].Score);
            playerOneScore.innerText = scoreObject[0].Name + " " + scoreObject[0].Score;
    }
    })
    tableDiv.addEventListener('mouseout', (evt)=>{
        if(evt.target.tagName === "TD"){
            evt.target.classList.remove("active-hover");
    }
    })
}


createTable();