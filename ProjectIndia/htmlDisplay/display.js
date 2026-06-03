const span = document.querySelector('span');
const language = ["html", "CSS", "Javascript"];
span.innerText = language[0];




const add = (val = 0) => {
    if(val > 1) {
        return val = 0
    } else{
        return val += 1;
    }
}
let num = 0;

const myTimer = setInterval(() => {
  span.innerText = language[num = add(num)];
}, 3000);

