/* multi line comment */
// single line comment

//Variable var is replaced by let for es6
// const = constant( a variable that can't be changed')
// const is also a new variable for es6
// const account = 100;
// var account = 100;
let balance = 100; //represent a concept
balance = balance -10; //balance is now 90
balance = balance -10; //balance is now 80

console.log(balance);

let user = 'Oliver'; //string
//let job = 'construction worker';
//let employed = false; //boolean
let job = null; // null is a type! kind of a non-type
job = 'construction worker';


console.log(user + ' is a ' + job); //this is a //concatination

//Condition
// === are these values equal?
// !== are thse values not equal?
if (job === null) {
    console.log(user + ' is a ' + job);
} else { // if its NOT true (aka false)
    console.log(user + ' needs a job. You hiring?');
}

// Arrays: lists of things
//        Square brackets used to create an array
let prices = [1.17, 91.01, 14.51, 19.99];
//console.log(prices);
let sum = 0;
// for (<start>; <run-as-long-as>; <each-time>)
/* "Starting at zero, run as long as - < 5 increasing i by 
 one each time" . */    
for (let i = 0; i < prices.length; i++) { // i++ is the same increment operator
   // console.log(prices[i]);
    sum = sum + prices[i];
}
console.log(sum);

// console.log(prices[2]); // 0 is an 'index'


