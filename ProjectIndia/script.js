const inputOne = document.createElement('input');
const body = document.body;
body.append(inputOne);
const buttonOne = document.createElement('button');
buttonOne.innerText = "Press ME To Add to the List!";
body.append(buttonOne);

const ulContainer = document.createElement('div');
const ul = document.createElement('ul');
body.append(ulContainer);
ulContainer.append(ul)


function renderList(){
const value = inputOne.value;
const li = document.createElement('li');
li.innerText = value;
ul.append(li);
li.addEventListener('click',(evt)=>evt.target.remove())

};

buttonOne.addEventListener('click', (evt)=>{
    
    
    renderList(); 
    
}
);

const buttonTwo = document.createElement('button');
buttonTwo.innerText = "Set Title"
body.append(buttonTwo);
buttonTwo.style.display = "block"
let headerOneExists = false;
const headerOne = document.createElement('h1');
buttonTwo.addEventListener('click', (evt)=>{

headerOne.innerText = inputOne.value;
if(headerOneExists === true){
    return
}
else if(headerOne.innerText === ""){
    return
} else {
    headerOneExists = true;
ulContainer.prepend(headerOne)
}})

headerOne.addEventListener('click', ()=>{
    headerOneExists = false;
    headerOne.remove();
})

