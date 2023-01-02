// function add() {
// 	console.log(2+5);
// };

//  add();


// function add() {
// 	return 2+5;
// };

// const val = add();

// console.log(val);


// function sum(num1,num2) {
        
// return num1+num2;

// };

// const val= sum(5,5);
// console.log(val)


// function oddEven(num) {
        
//      if(num % 2 === 0)  
//          {
//          	return true;
//          }     	
//         return false;
// };

// const val= oddEven(6);
// console.log(val)


// function findtarget(array,target){

// 	for (let i = 0; i<array.length; i++) {
// 		if(array[i]===target){
// 			return i;
// 		}
// 	}
// 	return -1;
// }
// const myarray =[1,3,5,6,9];

// console.log(findtarget(myarray,7));

// Function Expression

const  findtarget = function (array,target){

	for (let i = 0; i<array.length; i++) {
		if(array[i]===target){
			return i;
		}
	}
	return -1;
}
const myarray =[1,3,5,6,9];

console.log(findtarget(myarray,9));




const oddEven = function (num) {
        
     if(num % 2 === 0)  
         {
         	return true;
         }     	
        return false;
};

const val= oddEven(6);
console.log(val)