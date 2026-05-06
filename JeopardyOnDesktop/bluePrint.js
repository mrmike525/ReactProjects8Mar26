const API_URL = "https://rithm-jeopardy.herokuapp.com/api/";
const NUMBER_OF_CATEGORIES = 100;
const ids = [];
let individualCategory = [];
getCategoryIds();
getCategoryData();

async function getCategoryIds() {
  ids.unshift(
    await axios.get(`${API_URL}categories?count=${NUMBER_OF_CATEGORIES}`),
  );
  console.log(ids)
  return ids;
}


async function getCategoryData(categoryId = 2) {
  const placeholder = []
  placeholder.unshift(
    await axios.get(`${API_URL}category?id=${categoryId}`),
  );
 placeholder.map(item => individualCategory.unshift(item));
 individualCategory = [individualCategory[0].data]
 createTable("nope", individualCategory)
}

const jeopardyData = [{category: "StarTrek", question: "What is John Luke's Real Name?", answer: "Patrick Stewart", value: "150"}]

function createTable(data = "", cat =[{title: "placeholder"}]) {
  
    console.log(cat)
    const {title} = cat[0];
    const {value, question, answer} = cat[0].clues[0]
    const body = document.body;
    const tableDiv = document.createElement('div');
    tableDiv.className = "tableDiv";
    tableDiv.style.position = "relative";
    tableDiv.style.left = "30%"
    tableDiv.style.top = "3vh"
    body.append(tableDiv);

    tableDiv.addEventListener('click', (e) =>{
    console.log(e.target.className);
    if (e.target.className === "tableDiv"){
        console.log("we did it!!!", "WE LEARNED SOMETHING!!!")
    } else if(e.target.className === "categoryOne"){
        tableHeadOne.innerText = "🐔"
    }else if(e.target.className === "categoryTwo"){
        tableHeadTwo.innerText = "🍳"
    }else { return}
    })
  let table = document.createElement("table");
  tableDiv.append(table);
  table.style.border = "2px solid orange";
  table.style.width = "100px";
  table.style.height = "100px";
  let caption = document.createElement("caption");
  caption.innerText = "Jeopardy";
  table.append(caption);
  let tHead = document.createElement("thead");
  table.append(tHead);
  
  const tableRowOne = document.createElement("tr");
  tHead.append(tableRowOne);
  const tableHeadOne = document.createElement('th');
  tableHeadOne.innerText = title;
  tableHeadOne.className = "categoryOne"
  tableRowOne.append(tableHeadOne);
  const tbody = document.createElement('tbody');
  table.append(tbody)
  
  const tableRowTwo = document.createElement('tr');
  tbody.append(tableRowTwo);
  const tableDataOne = document.createElement('td');
  tableDataOne.innerText = value
  tableRowTwo.append(tableDataOne);
  
  const tableRowThree = document.createElement('tr');
  tbody.append(tableRowThree);
  const tableDataTwo = document.createElement('td');
  tableDataTwo.innerText = "200"
  tableRowThree.append(tableDataTwo)

  const tableRowFour = document.createElement('tr');
  tbody.append(tableRowFour);
  const tableDataThree = document.createElement('td');
  tableDataThree.innerText = "300";
  tableRowFour.append(tableDataThree);
  
  const tableRowFive = document.createElement('tr');
  tbody.append(tableRowFive);
  const tableDataFour = document.createElement('td');
  tableDataFour.innerText = "400";
  tableRowFive.append(tableDataFour);

  const tableRowSix = document.createElement('tr');
  tbody.append(tableRowSix);
  const tableDataFive = document.createElement('td');
  tableDataFive.innerText = "500";
  tableRowSix.append(tableDataFive);
  
  const tableDataSix = document.createElement('td');
  tableDataSix.innerText = "500";
  tableRowSix.append(tableDataSix);
  const tableHeadTwo = document.createElement('th');
  tableHeadTwo.innerText = "Womp womp";
  tableHeadTwo.className = "categoryTwo"
  tableRowOne.append(tableHeadTwo);
}

createTable(jeopardyData);

function repeat(num = 2){
    for(let x = 0; x < num; x++){
        
const body = document.body;
const trueParagraph = document.createElement('p');
trueParagraph.innerText = "This be the way";
body.append(trueParagraph);
    }
}
// repeat()