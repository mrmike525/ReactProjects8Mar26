let add = (value = 4, value2 = 16) => value + value2; 
let subtract = (value = 4, value2 = 16) => (value - value2) === -12 ? "THIS IS ODD": value - value2; 
let multiply = (value = 4, value2 = 16) => value * value2; 
let divide = (value = 4, value2 = 16) => value / value2; 


let allFuncs = () => {console.log(add());
console.log(subtract());
console.log(multiply());
console.log(divide());
}

allFuncs();

const annon = [];
annon.push('cherry');
annon.push('taco');
console.log(annon[1]);

function test(...help){return help}
console.log(test(1, 2, 3))

const MinPaymentAndDate = ["$30, 4/8/24", "$0, 6/8/24", "$30.22, 3/8/25", "$30, 4/8/25", "$30, 6/8/25", "$49, 7/8/25", "$48, 8/8/25", "$47, 9/8/25", "$43, 10/8/25", "$61, 11/8/25", "$79, 12/8/25", "$81, 1/8/26", "$79, 2/8/26", "$73, 3/8/26"];


function takesFour(...one) {
  console.log(one);
  
}
const newDiv = document.createElement('div');
const toAppend = document.querySelector('body');
toAppend.append(newDiv); 
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "orange"
takesFour(...MinPaymentAndDate);


const newH3 = Array.from(document.querySelectorAll('h3'));
MinPaymentAndDate.map(function(values){
    const h3 = document.createElement('h3');
    h3.innerText = values;
    newDiv.append(h3);
})