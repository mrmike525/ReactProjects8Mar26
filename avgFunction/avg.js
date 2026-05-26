// const arrayOne = [4, 3, 5, 2];
// const arrayTwo = [75, 42, 100, 80];
// const arrayThree = [700, 1200, 1000, 45];
// const arrayFour = [36, 38, 72, 40];
// const arrayFive = [900, 950, 2, 1000, 75, 642, 700];
// function avgResults(arr){
//     let value = 0;
//     for(item of arr){
        
//         value += item
//     //    console.log(value)
//     }
//      return value / arr.length
// }
// const resultOne = avgResults(arrayOne);
// const resultTwo = avgResults(arrayTwo);
// const resultThree = avgResults(arrayThree);
// const resultFour = avgResults(arrayFour);
// const resultFive = avgResults(arrayFive);

// console.log(`The Avg of ArrayOne = ${resultOne}`);
// console.log(`The Avg of ArrayTwo = ${resultTwo}`);
// console.log(`The Avg of ArrayThree = ${resultThree}`);
// console.log(`The Avg of ArrayFour = ${resultFour}`);
// console.log(`The Avg of ArrayFive = ${resultFive}`);

// function isOverEighteen(arr){
// return arr.map((item)=> {if(item > 18){return item} else {return 'Value is below 18'}
// })} 
// console.log(isOverEighteen(arrayOne));
// console.log(isOverEighteen(arrayTwo));

// console.log("hello, can you read this?");
const body = document.body;
// const divOne = document.createElement('div');
// body.append(divOne);
// divOne.style.width = "200px";
// divOne.style.height = "200px";
// divOne.style.border = "4px solid red";
// divOne.style.borderInlineColor = "blue";
// divOne.style.borderRadius = "50px";
// const paragraph = document.createElement('p');
// paragraph.innerText = "Hello, can you read this? what if i keep going? hmm?? hahahahahahaha";
// divOne.append(paragraph);
// paragraph.style.width = "275px";
// paragraph.style.position = "relative";
// divOne.style.display = "flex";
// divOne.style.alignItems = "center"
// divOne.style.justifyContent = "center";
// divOne.style.overflow = "hidden";
// const meImage = document.createElement('img');
// meImage.setAttribute('src', "./assets/Me.jpg");
// meImage.style.position = "relative";
// meImage.style.width = "90%";
// meImage.style.zIndex = "-1"
// meImage.style.borderRadius = "30%"
// divOne.append(meImage);

// divOne.style.zIndex = 2;


// paragraph.style.color = "rgb(196, 199, 18)"
const div = document.createElement('div');
const input = document.createElement('input');
body.append(div);
div.append(input);
input.setAttribute('type', "color");
const button = document.createElement('button')
div.append(button);
button.innerText = "Set Color";
input.style.border = "none";
input.style.backgroundColor = input.value
button.style.color = "rgba(82, 82, 82, 0.72)";
button.style.border = "none"
button.addEventListener('click', ()=>{
    body.style.backgroundColor = input.value;
    input.style.backgroundColor = input.value
    button.style.backgroundColor = input.value
})
div.style.position = "absolute";
div.style.left = "30%";
div.style.top = "20%";


console.log("balance is", "$2215", '\n bills are [T. Mobile 228.89 DATE 6/11/26, BestBuy, 75 6/8/26, target , 112 6/8/26, APPLE, 163 5/31/26, AMAZON 161 5/26/26,  TCFRED 141.60 NA(NO DATE YET)]')

console.log(228.89 + 75 + 112 + 163 + 161 + 141.60);
console.log(2215-881.49)
console.log('data 5/20/26', 'paid amazon 161; paid apple 163; PAID TMBOBILE 228.89;')

const tableJeopardy = document.createElement('table');
const jeopardyCaption = document.createElement('caption');
jeopardyCaption.innerText = "Jeopardy";
const jeopardyHeader = document.createElement('thead');
const headerRow = document.createElement('tr');
const tableHeadOne = document.createElement('th');
tableHeadOne.innerText = "Sample"
const tableHeadTwo = document.createElement('th');
tableHeadTwo.innerText = "SampleTwo";
const tableHeadThree = document.createElement('th');
tableHeadThree.innerText = "SampleThree";
body.append(tableJeopardy);
tableJeopardy.append(jeopardyCaption);
tableJeopardy.append(jeopardyHeader);
jeopardyHeader.append(headerRow);
headerRow.append(tableHeadOne);
headerRow.append(tableHeadTwo);
headerRow.append(tableHeadThree);
const clueRowOne = document.createElement('tr');
const dataRowColOne = document.createElement('td');
const dataRowColTwo = document.createElement('td');
const dataRowColThree = document.createElement('td');
dataRowColOne.innerText = "100";
dataRowColTwo.innerText = "250";
dataRowColThree.innerText = "100";
tableJeopardy.append(clueRowOne);
clueRowOne.append(dataRowColOne);
clueRowOne.append(dataRowColTwo);
clueRowOne.append(dataRowColThree);

const CategoryOneClue = [
    {category: "Baseball", question: "In this sport, the ball is hit with this object?", answer: "What is a baseball bat?", points: "100"}
] 
tableHeadOne.innerText = CategoryOneClue[0].category;
dataRowColOne.innerText = CategoryOneClue[0].points

const scoreContainer = document.createElement('div');
const score = document.createElement('h2');
score.innerText = "placeHolder"
body.append(scoreContainer);
scoreContainer.append(score);
function calculateScore(value = 0){
    let score = 0;
    score += value
    return score
}
dataRowColOne.addEventListener('click', ()=>{
    if (dataRowColOne.innerText === CategoryOneClue[0].points){
        dataRowColOne.innerText = CategoryOneClue[0].question
    }
    else if(dataRowColOne.innerText === CategoryOneClue[0].question){
        dataRowColOne.innerText = CategoryOneClue[0].answer;
    } else if(dataRowColOne.innerText === CategoryOneClue[0].answer){
        dataRowColOne.innerText = "";
        score.innerText = calculateScore(200);
    }

})

