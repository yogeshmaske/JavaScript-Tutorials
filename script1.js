// const person = {
// 	name:"abc",
// 	"person age":30,
// 	hobbies:["game","reading"]
// };

// console.log(person);

// console.log(person.name);
// console.log(person["person age"]);
// console.log(person.hobbies);
// person.gender = "male";

// console.log(person);

// Acessing value of object using [] natation

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["hobbies"]);//

//Add key value paire using []

// person["height"] = 5;


// how to add key value pair using variables

// const key = "email";

// person.key = "abc@gamil";

// person[key] = "abcw@gmail";

// console.log(person);

// how to iterate object

// for(key in person){
// 	console.log(key);
// } 
// it return key only

// for(key in person){
// 	// console.log(person[key]);
// //total key value paire

//      console.log(`${key} : ${person[key]}`);
// }

// using Object.key method

// console.log(Object.keys(person));

// const val = Array.isArray(Object.keys(person));

// console.log(val)

// for(let key of Object.keys(person)){
// 	console.log(person[key]);
// }


// computed properties



const key1 = "name";
const key2 = "age";

const value1 = "abc";
const value2 = 30;

const person = {
	
	       // [key1] : value1,
	       // [key2] : value2
}

          person [key1] = value1;
	      person[key2] = value2;
console.log(person);