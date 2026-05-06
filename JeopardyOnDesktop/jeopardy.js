const API_URL = "https://rithm-jeopardy.herokuapp.com/api/";
// full API_URL (TO GET ALL CATEGORIES) `https://rithm-jeopardy.herokuapp.com/api/categories?
// count=100`
const NUMBER_OF_CATEGORIES = 1;
// API URL TO GET SELECTED NUMBER OF CATEGORIES `https://rithm-jeopardy.herokuapp.com/api/category?
// id=2`
const NUMBER_OF_CLUES_PER_CATEGORY = 5;

let categories = [];

let activeClue = null;
let activeClueMode = 0;

let isPlayButtonClickable = true;

$("#play").on("click", handleClickOfPlay);

function handleClickOfPlay() {}

async function setupTheGame() {}

async function getCategoryIds() {
  const ids = [];
  ids.unshift(
    await axios.get(`${API_URL}categories?count=${NUMBER_OF_CATEGORIES}`),
  );
  const { data } = ids[0];
  console.log(data);
  data.map(({ id, title }) => getCategoryData(id));
  return ids;
}
getCategoryIds();

async function getCategoryData(categoryId = 2) {
  const categoryWithClues = [
    {
      id: categoryId,
      title: undefined,
      clues: [],
    },
  ];
  categoryWithClues.push(
    await axios.get(`${API_URL}category?id=${categoryId}`),
  );
  const dataWithClues = categoryWithClues.map((item) => item);
  categories.push(await axios.get(`${API_URL}category?id=${categoryId}`));
  const { data } = dataWithClues[1];
  const cluesData = [];
  cluesData.push(data);
  console.log("CluesData Value is:", cluesData);
  OneCategory = cluesData;
  console.log(cluesData[0].clues[0].value);
  fillTable(cluesData[0], cluesData[0].clues);
  return cluesData;
}
let OneCategory;

function fillTable({ title }, values) {
  const categoryRow = document.getElementById("categories");
  const categoryValue = document.createElement("th");
  categoryValue.innerText = `${title}`;
  categoryRow.append(categoryValue);
  const clueValue = document.getElementById("clues");
  console.log(values[0]);
  for (let x = 0; x <= values[0].value; x++) {
    const categoryScore = document.createElement("td");
    clueValue.append(categoryScore);
    categoryScore.innerText = values[x].value;
    const tableRow = document.createElement("tr");
    tableRow.innerText = "Points";
    categoryScore.append(tableRow);
  }
  // [0].value
}

$(".clue").on("click", handleClickOfClue);

function handleClickOfClue(event) {}

$("#active-clue").on("click", handleClickOfActiveClue);

function handleClickOfActiveClue(event) {
  if (activeClueMode === 1) {
    activeClueMode = 2;
    $("#active-clue").html(activeClue.answer);
  } else if (activeClueMode === 2) {
    activeClueMode = 0;
    $("#active-clue").html(null);

    if (categories.length === 0) {
      isPlayButtonClickable = true;
      $("#play").text("Restart the Game!");
      $("#active-clue").html("The End!");
    }
  }
}
console.log(categories);


