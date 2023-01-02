// // map is an iterable
// // store data in ordered form
// // store key value paires like object
// // dublicate key are not allowed
// // object can only have strings or symols as key
// // in maps you can use anything as key

// // const person = {
// // 	           name:"abc",
// // 	           age:30,
// // 	           1:"one"
// // };

// // console.log(person);
// // console.log(person.name);
// // console.log(person[1]);
// // console.log(person['1']);

// // for (let key in person){

// // 	console.log(key,"  ",typeof key);
	
// // }


// //  Maps 
// const person = new Map();
// console.log(person);

// // to add key value paires

// person.set("name","Yogesh");
// person.set("age",30);

// console.log(person);

// // number as key 
// person.set(1,"one");

// // console.log(person);

// //  how to acess key value paire
// // console.log(person.name);
// // console.log(person[name]);

// // by using get method

// // console.log(person.get('name'));
// // console.log(person.get('age'));
// // console.log(person.get(1));

// // To print all keys using keys() method
// // console.log(person.keys());

// //  Using loop
// // for(let key of person.keys()){
// // 	console.log(key,'  ',typeof key);
// // }

// //  here we can store array as key

// person.set([1,2,3],"onetwothree");

// // console.log(person);

// // here we can store object literals as key

// person.set({1:"one"},"ONE");

// // console.log(person);



// // USING FOR OF LOOP
// // for(let key of person){
// // 	// console.log(key," ",typeof key);
// // 	// console.log(Array.isArray(key));
// // 	console.log(key);
// // }

// //  Destructuring from array

// for(let [key,value] of person){
// 	console.log(`${key} : ${value} `);
// }

// here we can directy use array

// const person = new Map([["name","abc"],["age",7]]);
// console.log(person);

// const person1 = {

// 	id:1,
// 	name:"abc"
// };

// // to add some other items to object using map

// const extrainfo = new Map();

// extrainfo.set(person1,{age:30,gender:"male"});

// console.log(extrainfo);
// console.log(person1.id);
// console.log(extrainfo.get(person1));
// console.log(extrainfo.get(person1).age);
// console.log(extrainfo.get(person1).gender);

// also we can add two objects

const person1 = {

	id:1,
	name:"abc"
};

const person2 = {

	id:2,
	name:"pqr"
};

const extrainfo = new Map();
extrainfo.set(person1,{age:30,gender:"male"});
extrainfo.set(person2,{age:35,gender:"female"});

console.log(person1.id);
console.log(person2.id);

console.log(extrainfo.get(person1).gender);
console.log(extrainfo.get(person2).gender);