// Syncronus vs Asyncronus Programing

// console.log("Script Strat ");

// for(let i=0;i<=10000;i++){
//     console.log("Inside  For Loop");
// };

// console.log("Script End");


// SetTimeout 

// console.log("Script Strat ");

// function hellow(){

//     console.log("Hellow World");
// }

// setTimeout(hellow,1000);

// // for(let i=0;i<=10000;i++){
// //     console.log("Inside  For Loop");
// // };

// console.log("Script End");




// Example 2

// console.log("Script Strat ");

// setTimeout(() => {
//   console.log("Inside Set Time out");  
// }, 0);

// for(let i=1;i<=100;i++){

//     console.log(".........")
// }

// console.log("Script End ");


// SetTimeout returns a id

// console.log("Script Strat ");

// const id = setTimeout(() => {
//     console.log("Inside Set Time out");
// }, 1000);

// for(let i=1;i<=100;i++){

//     console.log(".........")
// };


// console.log("Set Timeout id is :",id);

// console.log("Script End");



//  But we can Clear Settimeout function

console.log("Script Strat ");

const id = setTimeout(() => {
    console.log("Inside Set Time out");
}, 0);

for(let i=1;i<=100;i++){

    console.log(".........")
};


console.log("Set Timeout id is :",id);
console.log("Clearing Time Out");
clearTimeout(id);

console.log("Script End");
