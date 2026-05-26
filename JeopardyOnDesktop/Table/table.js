const body = document.body;
const tableContainer = document.createElement('div');
tableContainer.style.border = "2px solid red";
tableContainer.style.width = "50%"
const table = document.createElement('table');
tableContainer.append(table);
const caption = document.createElement('caption');
caption.innerText = "Jeopardy";
table.append(caption);
body.append(tableContainer);
const tableHead = document.createElement('thead');
table.append(tableHead);
const headerRow = document.createElement('tr');
tableHead.append(headerRow);

let amountOfCategorys = 5;
let categoryTitle = [{category: "Baseball"},{category: "StarTrek"},{category: "Hockey"},{category: "Math"},{category: "Culinary Dishes"},]
function createAmountOfCategories(num = 0, categorys) {
    for (let x = 0; x <= num; x++) {
        if (categorys[x].category === undefined) {
            return console.log("error")
        } else {
            const category = document.createElement('th');
            headerRow.append(category);
            category.innerText = categorys[x].category
            
        }
    }
}
createAmountOfCategories(amountOfCategorys, categoryTitle);