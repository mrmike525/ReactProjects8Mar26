const body = document.body;
const divParent = document.createElement('div');
divParent.style.position = "absolute"
const h1 = document.createElement('h1');
h1.innerText = "This is a test";
body.append(divParent);
divParent.append(h1);
const paragraph = document.createElement('p');
paragraph.innerText = "This is a lot of words!!";
paragraph.style.width = "250px";
paragraph.style.height = "100px"
divParent.append(paragraph);
let hasInput = false;
divParent.addEventListener('click', (evt)=>{
    console.log(evt.target.tagName);
    const newWords = {h1: "This is now the content!", p: "This is alot more words, by a little", question: "What was the name of the captain of the USS Enterprise NCC-1701D in the startrek series 'The Next Generation?'", answer: "Captain Picard", PointsValue: 150, category: "StarTrek"};
    if (evt.target.tagName === "H1"){
        evt.target.innerText = newWords.category
    }  else if (evt.target.tagName === "P" && evt.target.innerText === newWords.question){
        evt.target.innerText = newWords.answer
    }else if (evt.target.tagName === "P" && evt.target.innerText === newWords.answer){
        evt.target.innerText = newWords.PointsValue
    }  
    else if (evt.target.tagName === "P"){
        evt.target.innerText = newWords.question;
        const input = document.createElement('input');
        const inputDiv = document.createElement('div');
        if(hasInput === true){
            return
        } else{
        divParent.append(inputDiv);
        inputDiv.style.position = "relative";
            // inputDiv.style.top = "10px"
        inputDiv.append(input);
        hasInput = true
        const button = document.createElement('button');
        button.innerText = "Submit Answer"
        inputDiv.append(button);
        button.addEventListener('click',()=>{
            alert(input.value)
        })
        }}
})

function createTable(){
    const tableContainer = document.createElement('div');
    
    const table = document.createElement('table');
    tableContainer.append(table);
    const caption = document.createElement('caption');
    caption.innerText = "Jeopardy";
    table.append(caption);
    
    const tableHead = document.createElement('thead');
    const tableHeadRow = document.createElement('tr');
    tableHead.append(tableHeadRow);
    const tableHeadData = document.createElement('th');
    tableHeadData.innerText = "Categories";
    tableHeadRow.append(tableHeadData)
    table.append(tableHead);
    body.append(tableContainer);
    tableContainer.style.position = "absolute";

    tableContainer.style.top = "250px";

}
createTable()