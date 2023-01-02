const numbers = [1,2,4,6,8,9];


// even number
// const even = function (num){

// 	return num % 2 == 0;
// };

// const result = numbers.filter(even);
// console.log(result);

// odd number

// const odd = function (num){

// 	return num % 2 !== 0;
// };

// const result = numbers.filter(odd);
// console.log(result);

// with arrow function


const odd = numbers.filter((num)=>{

	return num % 2 !== 0;
});
console.log(odd);