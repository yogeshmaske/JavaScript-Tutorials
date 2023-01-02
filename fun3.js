// const numbers = [1,3,5];

// function mul(num,index){

// 	console.log("index is ", index);
// 	console.log(num*2);
// };

// By using simple for loop
// for (let i=0; i<numbers.length; i++){

// 	mul(numbers[i],i);
// };

// By using forEach loop

// numbers.forEach(mul)

// by passing arguments as function

// numbers.forEach(function(num,index){

// 	// console.log("index is ", index);
// 	console.log(num*2);
// });

// real life example

const users =[
     
     {name:"yogesh",age:30},
     {name:"rajesh",age:20},
     {name:"dnyesh",age:40}
];

// users.forEach(function(val){

// 	console.log(val.name,val.age);
// 	// console.log(val.age);
// });

// using arrow function

users.forEach((user)=>{
	console.log(user.name,user.age);
});