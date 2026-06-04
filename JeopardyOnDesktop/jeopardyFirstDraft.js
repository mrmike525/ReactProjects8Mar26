const API_URL = "https://rithm-jeopardy.herokuapp.com/api/"; // The URL of the API.
const NUMBER_OF_CATEGORIES = 6; // The number of categories you will be fetching. You can change this number.
const NUMBER_OF_CLUES_PER_CATEGORY = 5; // The number of clues you will be displaying per category. You can change this number.

let categories = []; 

let activeClue = null; // Currently selected clue data.
let activeClueMode = 0; // Controls the flow of #active-clue element while selecting a clue, displaying the question of selected clue, and displaying the answer to the question.


let isPlayButtonClickable = true; // Only clickable when the game haven't started yet or ended. Prevents the button to be clicked during the game.

$("#play").on("click", handleClickOfPlay);


function handleClickOfPlay (value)
{
  
  // todo set the game up if the play button is clickable
  let playButton = document.getElementById('play');
  playButton.addEventListener('click', function(){
    playButton.style.display = "none";
    let categoryPosition = document.getElementById('categories');
    for(let x = 0; x <= categories.length - 1; x++){
      console.log(x);
    let tableHead =  document.createElement('th');
    tableHead.innerText = `${categories[0][x].title}`;
    categoryPosition.append(tableHead);
    const tableDataPosition = document.getElementById('clues');
    let tableData = document.createElement('td');
    tableData.innerText = `Data`;
    tableDataPosition.append(tableData);
    let tableRow = document.createElement('tr');
    tableRow.innerText = `Clue`;
    tableData.append(tableRow);
  }
    
    repeat();
    repeat();
    repeat();
    repeat();
    repeat();
    let y = document.body.querySelector('.disabled').style.display = "block"

    function repeat(){
      
      let categoryPosition = document.getElementById('categories');
    let tableHead =  document.createElement('th');
    tableHead.innerText = categories[0][value].title;
    categoryPosition.append(tableHead);
    const tableDataPosition = document.getElementById('clues');
    let tableData = document.createElement('td');
    tableData.innerText = "";
    tableDataPosition.append(tableData);
    let tableRow = document.createElement('tr');
    tableRow.innerText = `Clue`;
    tableData.append(tableRow);
    }
    
  })
  
}


async function setupTheGame ()
{
 
}


async function getCategoryIds() {
     let res = await axios.get(
    `${API_URL}categories?count=${NUMBER_OF_CATEGORIES}`
    );
    return res.data
  }

  let x = null;
  async function start() {
  const data = await getCategoryIds();
  console.log(data)
   categories.unshift(data.map(value => ({ ...value})));
   let y = randomizeCat(categories[0])
   console.log(y)
   handleClickOfPlay(y)
}
start();

let c = null;
async function getCategoryData (categoryId = 2)
{
  const categoryWithClues = {
    id: categoryId,
    title: undefined, // todo set after fetching
    clues: [] // todo set after fetching
  };
let res = await axios.get(`${API_URL}category?
id=${categoryId}`);
c = await res.data


  return categoryWithClues;
}
getCategoryData()


function fillTable (categories)
{
  // todo
}

$(".clue").on("click", handleClickOfClue);


function handleClickOfClue (event)
{
  
}

$("#active-clue").on("click", handleClickOfActiveClue);


function handleClickOfActiveClue (event)
{
  

  if (activeClueMode === 1)
  {
    activeClueMode = 2;
    $("#active-clue").html(activeClue.answer);
  }
  else if (activeClueMode === 2)
  {
    activeClueMode = 0;
    $("#active-clue").html(null);

    if (categories.length === 0)
    {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#active-clue").html("The End!");
    }
  }
}


function randomizeCat(val){
return Math.floor(Math.random() * (val.length - 1))
}

console.log(categories);