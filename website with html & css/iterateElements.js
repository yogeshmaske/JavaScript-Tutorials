// using getelementbytagname/ classname

// let naveItems = document.getElementsByTagName("a");
// console.log(naveItems);

// simple for loop

// for(let i=0; i<naveItems.length;i++){
   
//     const naveItem = naveItems[i];
//     naveItem.style.backgroundColor="white";
//     naveItem.style.color= "red";
//     naveItem.style.fontWeight = "bold";

// };

// for of loop

// for(let naveItem of naveItems){

//     naveItem.style.backgroundColor="white";
//     naveItem.style.color= "orange";
//     naveItem.style.fontWeight = "bold";
// };

// to use for each loop we have to convert html collection to array by using Array.from() method

// naveItems = Array.from(naveItems);

// naveItems.forEach((naveItem) => {

//     naveItem.style.backgroundColor="white";
//     naveItem.style.color= "blue";
//     naveItem.style.fontWeight = "bold";
    
// });


//  using with qury selectorAll

let naveItems = document.querySelectorAll("a");

console.log(naveItems);

// simple for loop

// for(let i=0; i<naveItems.length;i++){
   
//     const naveItem = naveItems[i];
//     naveItem.style.backgroundColor="white";
//     naveItem.style.color= "red";
//     naveItem.style.fontWeight = "bold";

// };


// for of loop

// for(let naveItem of naveItems){

//     naveItem.style.backgroundColor="white";
//     naveItem.style.color= "orange";
//     naveItem.style.fontWeight = "bold";
// };


// Using forEach loop

naveItems.forEach((naveItem) => {

    naveItem.style.backgroundColor="white";
    naveItem.style.color= "blue";
    naveItem.style.fontWeight = "bold";
    
});