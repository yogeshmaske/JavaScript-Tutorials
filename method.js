// const person = {

// 	name:"yogesh",
// 	age:30,
// 	about:function(){
// 		console.log("person name is yogesh & age is 30");
// 	}
// };

// console.log(person.about);
// person.about();

//  but we have to make it dynamic

// const person = {

// 	name:"yogesh",
// 	age:30,
// 	about:function(){
// 		console.log(`person name is ${name} & ${age} is 30`);
// 	}
// };

// person.about();


// we have to use this keyword

// const person = {

// 	name:"yogesh",
// 	age:30,
// 	about:function(){
// 		console.log(`person name is ${this.name} & age is ${this.age} `);
// 	}
// };

// person.about();


// what is this keyword

// const person = {

// 	name:"yogesh",
// 	age:30,
// 	about:function(){
// 		console.log(this);
// 	}
// };

// person.about();// it returns object tis here become object


// if we write function outside of object

function personInfo(){
		console.log(`person name is ${this.name} & age is ${this.age} `);
	};


const person1 = {

	name:"yogesh",
	age:30,
	about:personInfo
};

const person2 = {

	name:"rajesh",
	age:10,
	about:personInfo
};

const person3 = {

	name:"dnynu",
	age:20,
	about:personInfo
};

personInfo();

person1.about();
person2.about();
person3.about();