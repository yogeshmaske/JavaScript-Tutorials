const numbers = new Set([1,2,3,4,5,5,2]);
// Dublicates not allowed
console.log(numbers);
// can not access through index
console.log(numbers[1]);   
// using string
const string = new Set("abcd");
console.log(string)

// Add elements to set
const num = new Set();

num.add(3);
num.add(6);
num.add(9);

console.log(num);

// using array
const items = ["item1","item2","item3"];

num.add(items);
num.add(items);
console.log(num);
// using seperate array --- it consider seperate array
num.add(["item1","item2","item3"]);
num.add(["item1","item2","item3"]);
console.log(num);

//  using Has() method 
//  to cheack element is in set
num.has(3);
// it returns true or false value

if(num.has(3)){
	console.log("number 3 is present");
}

//  using for of loop 

for (let number of numbers){

	console.log(number);
}
