/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const tableHeaderName = ["NAME", "OCCUPATION", "RATE"];
const PRICE_RANGE = { min: 20, max: 200 };

const NUM_FREELANCERS = 100;

const headerText = 'Freelancer Forum';

const app = document.querySelector('#app');

//GENERATE FREELANCER - OBJECT
const generateFreelancer = () => {
    const random = Math.floor(Math.random() * 5);
    const price = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
    return {
        name: NAMES[random],
        occupation: OCCUPATIONS[random],
        price: price
    }
};

const freelancersArray = () => {
    let freelancersArray = [];
    for(let i = 0; i < NUM_FREELANCERS; i++){
       freelancersArray.push(generateFreelancer())
    }
    return freelancersArray;
}

const averageRate = () => {
    const averageRate = freelancersArray().map(el => el.price).reduce((acc,cur) => acc + cur, 0)
    return averageRate/NUM_FREELANCERS
}

//Header
const generateHeader = (text) => {
    const pageHeader = document.createElement("h1");
    pageHeader.textContent = text;
    app.append(pageHeader);
}

//Sub header 
const generateAverageRate = (text) => {
    const averageRate = document.createElement("p");
    averageRate.textContent = text;
    app.append(averageRate);
}

//Table
const generateTable = () => {
    const table = document.createElement("table");
    const rows = NAMES.length;
    const columns = 3;

//th
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

tableHeaderName.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);

const tbody = document.createElement("tbody");
table.append(tbody);

for (let i = 0; i < NUM_FREELANCERS; i++) {
    const tr = document.createElement("tr");
    const freelancer = freelancersArray()[i];

    for (const key in freelancer) {
        const td = document.createElement("td");
        td.textContent = freelancer[key];
        tr.append(td);
    }
    tbody.append(tr);
}


document.getElementById("app").append(table);
};


const main = () => {
    generateHeader(headerText);
    generateAverageRate(`The average rate is $${averageRate()}.`);
    generateTable();
};

main();