const body = document.body;
const paragraghDiv = document.createElement('div');
const paragraph = document.createElement('p');
paragraph.innerText = "I have learned... ";
const span = document.createElement('span');


body.append(paragraghDiv);
paragraghDiv.append(paragraph);
paragraph.append(span);

const languages = ["html", "css", "JavaScript"];

function advanceIndex(num = 0){
    if(num > 1){
        num = 0;
        return num;
    } 
    else { 
        return num + 1 }
}

let test = advanceIndex(-1);
console.log(test)
test = advanceIndex(test);
console.log(test)
test = advanceIndex(test);
console.log(test);
test = advanceIndex(test);
console.log(test);
test = advanceIndex(test);
console.log(test)

function updateSpan(val = 0){
    span.innerText = languages[val]
}
updateSpan(advanceIndex(test))
test = advanceIndex(test)
updateSpan(advanceIndex(test))
test = advanceIndex(test)
updateSpan(advanceIndex(test))
test = advanceIndex(test)
updateSpan(advanceIndex(test))
test = advanceIndex(test)
updateSpan(advanceIndex(test))
test = advanceIndex(test)
updateSpan(advanceIndex(test))
test = advanceIndex(test)



