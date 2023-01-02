// const numbers = [4,206,900,3,15];

// // const name = ["pqr","ywr","Zab","aab",];


// //  we can pass function as parameter

// //  accending 
// numbers.sort((a,b)=>{

// 	return a-b; 
// // it returns value greater than zero or lesthan zero
// });

// console.log(numbers);

// // decending

// numbers.sort((a,b)=>{

// 	return b-a; 
// // it returns value greater than zero or lesthan zero
// });

// console.log(numbers);

const products = [

    {p_id:1,p_name:"p1",price:900},
    {p_id:2,p_name:"p2",price:200},
    {p_id:3,p_name:"p3",price:300},
];

// Lowtohigh 

// products.sort((a,b)=>{

// 	return a.price - b.price;
// });

// console.log(products);
// 

// using slice method


 const lowToHigh = products.slice(0).sort((a,b)=>{

 	return a.price-b.price;
 });

 console.log(products);

 console.log(lowToHigh);



