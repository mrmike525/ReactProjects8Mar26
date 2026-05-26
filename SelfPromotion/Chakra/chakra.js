function RotateColors(){
    const magenta = document.querySelector(".magenta");
    const purple = document.querySelector(".purple");
    const blue = document.querySelector(".blue");
    const green = document.querySelector(".green");
    const yellow = document.querySelector(".yellow");
    const orange = document.querySelector(".orange");
    const red = document.querySelector(".red");
    const changeColorButton = document.querySelector(".changeColor");

    const colors =[{color: "rgb(197,109,197)"},{color: "rgb(120,32,120)"}, {color: "rgb(86, 86, 212)"}, {color: "rgb(43,187,43)"}, {color: "rgb(248, 248, 25)"}, {color: "rgb(205, 143, 29)"}, {color: "rgb(234, 70, 70)"}];
    
    changeColorButton.addEventListener('click', () => {
        const x = setInterval(()=>{
        magenta.style.backgroundColor = colors[random()].color;
        purple.style.backgroundColor = colors[random()].color;
        blue.style.backgroundColor = colors[random()].color;
        green.style.backgroundColor = colors[random()].color;
        yellow.style.backgroundColor = colors[random()].color;
        orange.style.backgroundColor = colors[random()].color;
        red.style.backgroundColor = colors[random()].color;
        }, 2000)
        console.log(x);
    })

}
RotateColors();

const random = () => Math.floor(Math.random() * 7);
const colors =[{color: "rgb(197,109,197)"},{color: "rgb(120,32,120)"}, {color: "rgb(86, 86, 212)"}, {color: "rgb(43,187,43)"}, {color: "rgb(248, 248, 25)"}, {color: "rgb(205, 143, 29)"}, {color: "rgb(234, 70, 70)"}];
 