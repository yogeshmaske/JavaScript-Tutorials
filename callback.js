// // simple example of callback
// // function result(num1,num2,callback) {

// //     console.log(num1, num2);
// //     callback(num1,num2);

// // };

// // function add(num1,num2) {
// //     console.log(num1+num2);
// // };

// // result(4,5,add);

// // Example -2
// // passing two callbacks

// // function result(num1, num2, onSucess, onError) {
// //   if (typeof num1 === "number" && typeof num2 === "number") {
// //     onSucess(num1, num2);
// //   } else {
// //     onError();
// //   }
// // }

// // // here we can use arrow function to directly define function
// // result(
// //   "4",
// //   5,
// //   (num1, num2) => {
// //     console.log(num1 + num2);
// //   },
// //   () => {
// //     console.log("Wrong Input ");
// //     console.log("Input only numbers");
// //   }
// // );



// // we can also done with simple call like


// function result(num1, num2, onSucess, onError) {
//     if (typeof num1 === "number" && typeof num2 === "number") {
//       onSucess(num1, num2);
//     } else {
//       onError();
//     }
//   };

//   function add(num1,num2){
//     console.log(num1 + num2);
//   };

//   function onError() {
//     console.log("Wrong Input ");
//       console.log("Input only numbers");
//   }
  
  
//   result(4,"5",add,onError);
  



var foo =1;

function myFun() {
  console.log(foo);
  foo = 2;      
}

myFun();