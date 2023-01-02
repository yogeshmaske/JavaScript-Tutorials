// const app = () => {

// 	const myfun = () =>{
// 		console.log("In nested function");
// 	};

//     myfun();
// };

// app();


// const app = () => {

// 	const myfun = () =>{
// 		console.log("In nested function");
// 	};

// const add = (num1,num2) => {

// 	console.log(num1+num2);

// } 
//     myfun();

//    add(1,2);
// };

// app();



// lexical scope

 const myvar = "I am Globle varible";

function myapp() {
	var myvar ="inside function varible";
	console.log(myvar);
}
console.log(myvar);
myapp();