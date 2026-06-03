const DOB = document.querySelector('#DOB');
const submit = document.querySelector('.submit');
const displayDOB = document.querySelector('.DisplayDOB');

function calculateDOB(value){
    const todaysDate = new Date();
    const extractYearBorn = value.slice(0, 4);
    const extractCurrentYear = todaysDate.getFullYear();
    const yearsOld = extractCurrentYear - extractYearBorn;
    return `You are ${yearsOld} Years old.`;
}

submit.addEventListener('click', ()=>{
    const todaysDate = new Date();
    displayDOB.innerText = todaysDate + calculateDOB(DOB.value)
})

const test = new Date();

let d;
d = new Date();
d = new Date(1164411006456);
d = new Date("2019-08-02T11:30:00+10:00");
d = new Date(2019, 7, 2, 11, 30, 27, 0);

console.log(d.toString());
console.log(d.getFullYear());
console.log(d.getDay());
console.log(d.getMilliseconds());
console.log(d.getUTCHours());

d.setMinutes(10);
d.setDate(5);
d.setUTCHours(4);
console.log(d.toString());

console.log(d.toISOString());

console.log(d.toLocaleString("en-AU", {
    timeZone: "America/Los_Angeles"
}));
console.log(d.toLocaleString("en-US"));

console.log(JSON.stringify({
    myDate: d
}));
// jan 1 1970 is the reference for js