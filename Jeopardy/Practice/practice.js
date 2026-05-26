const Add = (a, b) => (a + b);
console.log(Add(7, 3)) 

const arr = [7, 25, 42, 3, 10, 4, 8];

console.log(Add(arr[0], arr[1]))
const price = 7.99
const tax = 2
console.log(Add(price, tax))
arr.forEach(item => console.log(Add(item, item)))
const body = document.body;
