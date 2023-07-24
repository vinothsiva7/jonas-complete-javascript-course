//!Challenge #1
let massMark;
let heightMark;
let massJohn;
let heightJohn;
massMark = 78;
massJohn = 92;
heightMark = 1.69;
heightJohn = 1.95;
const bmiMark = massMark/(heightMark ** 2);
const bmiJohn = massJohn/(heightJohn * heightJohn);
const markHigherBMI = bmiMark>bmiJohn;
console.log(markHigherBMI);


//!Challenge #2
if (markHigherBMI) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

// !Challenge #3
let scoreDolphins1 = 97;
let scoreDolphins2 = 112;
let scoreDolphins3 = 101;
let scoreKoalas1 = 109;
let scoreKoalas2 = 95;
let scoreKoalas3 = 106;
const avgDolphins = (scoreDolphins1+scoreDolphins2+scoreDolphins3)/3;
const avgKoalas = (scoreKoalas1+scoreKoalas2+scoreKoalas3)/3;
console.log(avgDolphins,avgKoalas);
if (avgDolphins>avgKoalas) {
    console.log("Dolphins wins");
} else if (avgDolphins<avgKoalas){
    console.log("Koalas wins");
} else {
    console.log("Draw");
}

if (avgDolphins>avgKoalas && avgDolphins>=100) {
    console.log("Dolphins wins");
} else if (avgDolphins<avgKoalas && avgKoalas>=100){
    console.log("Koalas wins");
} else if(avgDolphins===avgKoalas && avgDolphins>100){
    console.log("Draw");
} else {
    console.log("No one wins");
}

// !Challenge #4
const billValue = Number(prompt("What's the bill value?"));
(billValue>=50 && billValue<=300) ? console.log(`The bill was ${billValue}, the tip was ${billValue*0.15}, and the total value is ${billValue+(billValue*0.15)}`):console.log(`The bill was ${billValue}, the tip was ${billValue*0.2}, and the total value is ${billValue+(billValue*0.2)}`);