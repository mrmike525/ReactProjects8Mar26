const body = document.body;
const ChakraDiv = document.createElement('div');
ChakraDiv.classList.add("ChakraDiv");
body.append(ChakraDiv);

const chakraColors = [
    { crown: "rgba(195, 21, 253)" },
    { thirdEye: "rgba(149, 21, 253, 1)" },
    { throat: "rgba(21, 94, 253, 1)" },
    { heart: "rgba(21, 253, 33, 1)" },
    { solarPlexus: "rgba(250, 255, 119, 1)" },
    { sakral: "rgba(252, 118, 55, 1)" },
    { root: "rgba(253, 21, 21, 1)" }
]
const chakraColorsArray = [chakraColors[0].crown, chakraColors[1].thirdEye, chakraColors[2].throat, chakraColors[3].heart, chakraColors[4].solarPlexus, chakraColors[5].sakral, chakraColors[6].root];

let currentIndex = 0;
function startColors() {
    

    const interval = setInterval(() => {
        ChakraDiv.style.backgroundColor = chakraColorsArray[currentIndex];

        currentIndex++;

        if (currentIndex >= chakraColorsArray.length) {
            currentIndex = 0;
        }
    }, 3000);
    Toggle.addEventListener('dblclick', () => {
    clearInterval(interval);
    console.log("stopped")
    
})
}

const Toggle = document.createElement('button');
Toggle.innerText = "Toggle";
body.append(Toggle);

Toggle.addEventListener('click', () => {
    startColors();
    console.log("Started");
})

