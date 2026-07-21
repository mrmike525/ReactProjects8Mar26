const body = document.body;

const scoreObject = [{ Name: "Player One:", Score: 0 }, { Name: "Player Two:", Score: 0 },];

const renderScore = () => {
    scoreObject.forEach(({ Name, Score }, idx) => {
        const renderedScoreContainer = document.createElement('div');
        renderedScoreContainer.classList.add('scoreContainer')
        const renderedScore = document.createElement('div');
        renderedScore.innerText = Name + Score;
        renderedScore.id = idx;
        renderedScore.classList.add('score');
        renderedScoreContainer.append(renderedScore)
        body.append(renderedScoreContainer);
    })
};

const points = document.createElement('input');
body.append(points);
const button = document.createElement('button');
button.innerText = "Add Points";
const selectPlayer = document.createElement('select');
const playerOptionOne = document.createElement('option');
playerOptionOne.innerText = "1";
const playerOptionTwo = document.createElement('option');
playerOptionTwo.innerText = "2";
body.append(selectPlayer);
playerOptionOne.setAttribute('value', 1);
playerOptionTwo.setAttribute('value', 2);
selectPlayer.append(playerOptionOne);
selectPlayer.append(playerOptionTwo);

body.append(button)

const updateScore = (value) => {
    console.log(value);
    const playerOne = document.getElementById('0');
    const playerTwo = document.getElementById('1');
    if (value === "1") {
        scoreObject[0].Score += +points.value
        playerOne.innerText = scoreObject[0].Name + scoreObject[0].Score;
        console.log("branchOne")
    } else if(value === "2") {
         scoreObject[1].Score += +points.value
        playerTwo.innerText = scoreObject[1].Name + scoreObject[1].Score
        console.log("branch2")
    }
    console.log(scoreObject)
}
renderScore()

button.addEventListener('click', () =>
{
    const value = selectPlayer.value
    console.log(value)
    updateScore(value)
})