// console.log(this);
// console.log(window);

// const user1 = {

// 	name:"Abc",
// 	age:30,
// 	about:function(){
// 		console.log(this.name,this.age);
// 	}
// };


// // user1.about();


// const user2 = {

// 	name:"Pqr",
// 	age:35,
	
// };


// user1.about.call(user2);
// user1.about.call(user1);



// with Parameters

// const user1 = {

// 	name:"Abc",
// 	age:30,
// 	about:function(hobby,color){
// 		console.log(this.name,this.age,hobby,color);
// 	}
// };


// // user1.about();


// const user2 = {

// 	name:"Pqr",
// 	age:35,
	
// };


// user1.about.call(user2,"music","white");
// user1.about.call(user1,"reading","skyblue");

// function outside of object

//      function  about(hobby,color){
// 		console.log(this.name,this.age,hobby,color);
// 	}

// const user1 = {

// 	name:"Abc",
// 	age:30,
	
// };


// // user1.about();


// const user2 = {

// 	name:"Pqr",
// 	age:35,
	
// };


// about.call(user1,"game","red");
// about.call(user2,"music","yellow");



// Apply

//  function  about(hobby,color){
// 		console.log(this.name,this.age,hobby,color);
// 	}

// const user1 = {

// 	name:"Abc",
// 	age:30,
	
// };


// // user1.about();


// const user2 = {

// 	name:"Pqr",
// 	age:35,
	
// };

// about.apply(user1,["music","red"]);
// about.apply(user2,["game","black"]);

// Bind()

function  about(hobby,color){
		console.log(this.name,this.age,hobby,color);
	}

const user1 = {

	name:"Abc",
	age:30,
	
};


// user1.about();


const user2 = {

	name:"Pqr",
	age:35,
	
};

about.bind(user1,"music","pink");
const func = about.bind(user1,"music","pink"); //it just return a function
console.log(func);
func();