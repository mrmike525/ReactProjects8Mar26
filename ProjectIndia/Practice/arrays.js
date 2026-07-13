const starData = [
    { character: "✨", position: "absolute", element: "span" }
]

const getLocation = () => {
    starData.push({x: returnX() + "px", y:returnY() + "px"})
    function returnX() {
        return Math.floor(Math.random() * (window.innerWidth - 40))
    }

    function returnY() {
        return Math.floor(Math.random() * (window.innerHeight - 40))
    }
    console.log(starData)
}

const addStars = () => {
    getLocation();
    const star = document.createElement('span');
    const extractedLocationData = starData.slice(1)
    extractedLocationData.forEach(({ x, y,}) => {
        
        star.innerText = starData[0].character;
        star.style.position = starData[0].position;
        star.style.left = x;
        star.style.top = y;
        const body = document.body;
        body.append(star);
        console.log(star)
        body.style.backgroundColor = "black";
        star.style.fontSize = "40px";
        star.style.color = "red";
        
        
    })
    star.addEventListener('click', (evt) => {
        evt.target.remove();
    })
        star.addEventListener('mouseenter', (evt) => {
            evt.target.style.borderRadius = "40px"
            evt.target.style.outline = "4px solid red"
        })
        star.addEventListener('mouseleave', (evt) => {
            evt.target.style.outline = "none"
        })
    console.log(extractedLocationData)
    }
    

const intervalId = setInterval(() => {
    addStars()
},2500)


