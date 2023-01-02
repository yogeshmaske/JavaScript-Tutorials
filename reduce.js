//  sum all numbers of array 

// const numbers = [1,5,9,3,6,7];

// const sum = numbers.reduce((accumulator,curruntvalue)=>{
// 	return accumulator+ curruntvalue;
// });


// console.log(sum);

// we can also set defaut value to accumulator.

// const numbers = [1,5,9,3,6,7];

// const sum = numbers.reduce((accumulator,curruntvalue)=>{
// 	return accumulator+ curruntvalue;
// },10);


// console.log(sum);



// real life example 

// calculate total price of product selected..

const usercart = [

  {product_id:1,product_name:"p1",price:300},
  {product_id:2,product_name:"p2",price:900},
  {product_id:3,product_name:"p3",price:600}
];

const total = usercart.reduce((total_price,currunt_product)=>{

	return total_price + currunt_product.price;
},0);

console.log(total);