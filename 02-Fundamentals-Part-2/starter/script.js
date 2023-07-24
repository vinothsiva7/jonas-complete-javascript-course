'use strict';
function describeCountry(country,population,capitalCity) {
    return console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}
describeCountry('India',1213,'Delhi');

function percentageOfWorld1(population) {
    return population*100/7900;
}
percentageOfWorld1(1213);
percentageOfWorld1(1441);
percentageOfWorld1(6);

const percentageOfWorld2 = function(population) {
    const percent = population*100/7900;
    console.log(percent);
}
percentageOfWorld2(1213);
percentageOfWorld2(1441);
percentageOfWorld2(6);

const percentageOfWorld3 = population => {
    const percent = population*100/7900;
    console.log(percent);
}
percentageOfWorld3(1213);
percentageOfWorld3(1441);
percentageOfWorld3(6);

const describePopulation = function (country, population) {
    const percent = percentageOfWorld1(population);
    console.log(`${country} has ${population} million people, which is about ${percent}% of the world.`);
}
describePopulation('India',1213);
describePopulation('China', 1441);
describePopulation('Finland',6);

const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;
let avgDolphins = calcAverage(44,23,71);
let avgKoalas = calcAverage(65,54,49);

function checkWinner(avgDolphins,avgKoalas) {
    const winDolphins = avgDolphins>=2*avgKoalas;
    const winKoalas = avgKoalas>=2*avgDolphins;
    if (winDolphins){
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (winKoalas){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No one wins`);
    }
}

checkWinner(avgDolphins,avgKoalas);

avgDolphins = calcAverage(85,54,41);
avgKoalas = calcAverage(23,34,27);

checkWinner(avgDolphins,avgKoalas);

//! Coding Challenge #2
const bills = [125,555,44];
function calcTip(bills) {
    if (bills>=50 && bills <=300) {
       return bills*0.15;
    } else {
        return bills*0.20;
    }
}
const tips = [];
tips.push(calcTip(bills[0]));
tips.push(calcTip(bills[1]));
tips.push(calcTip(bills[2]));
console.log(tips);

const totals = new Array((bills[0]+tips[0]),(bills[1]+tips[1]),(bills[2]+tips[2]));
console.log(totals);

//332,USA; 10, Portugal; 1441, China;
const populations = new Array(1213, 1441, 332, 10);
console.log(populations.length===4);
const percentages = new Array(percentageOfWorld1(1213), percentageOfWorld1(1441), percentageOfWorld1(332), percentageOfWorld1(10));
console.log(percentages);

const neighbors = ['Sri Lanka', 'Burma', 'Nepal'];
neighbors.push('Utopia');
neighbors.pop();
if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European country :D');
}
console.log(neighbors);
neighbors[neighbors.indexOf('Burma')]='Myanmar';
console.log(neighbors);
const myCountry = {country:'India',capital:'New Delhi',language:'Tamil',population:1213, neighbors};
console.log(myCountry);
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population']-=2;
console.log(myCountry.population);

myCountry.describe = function () {
    return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
}
console.log(myCountry.describe());
console.log(myCountry);

myCountry.checkIsland = function () {
    return this.neighbors.length === 0 ? this.isIsland = true : this.isIsland = false
};

myCountry.checkIsland();

console.log(myCountry);

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);

const listOfNeighbors = [['Canada','Mexico'], ['Spain'],['Norway','Sweden','Russia']];

for (let i = 0; i  < listOfNeighbors.length; i++) {
    for (let index = 0; index < listOfNeighbors[i].length; index++) {
        console.log(`Neighbor:${listOfNeighbors[i][index]}`);
    }    
}

const percentages3 = [];
let i=0;
while (i<populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages3);

i=-1;
while (i<=bills.length) {
    bills.pop();
    i++;
}

i=-1;
while (i<=tips.length) {
    tips.pop();
    i++;
}

i=-1;
while (i<=totals.length) {
    totals.pop();
    i++;
}

// console.log(tips,totals);

bills.push(22,295,176,440,37,105,10,1100,86,52);
// console.log(bills);

for (let index = 0; index < bills.length; index++) {
    tips.push(calcTip(bills[index]));
    totals.push(bills[index]+calcTip(bills[index]));
}
console.log(bills,tips,totals);

function calcAverage1(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
    }
    const average = sum/arr.length;
    return average;
}
console.log(calcAverage1(bills));
console.log(calcAverage1(tips));
console.log(calcAverage1(totals));

function printForecast(arr) {
    let forecast = '';
    for (let index = 0; index < arr.length; index++) {
        forecast += `${arr[index]} deg C in ${index+1} ${index+1 === 1 ? 'day': 'days'}...`;
    }
    console.log(forecast);
}

const tempData1 = [17,21,23];
const tempData2 = [12,5,-5,0,4];
printForecast(tempData1);
printForecast(tempData2);

