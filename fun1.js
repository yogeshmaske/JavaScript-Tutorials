//  parameter de-structuring..
// It is used with object..
 const person = {

 	name: "Yogesh",
 	 age: 30
 }

 // function detail(a){

 // 	console.log(obj.name);
 // 	console.log(obj.age);

 // }

 // detail(person);


function detail({name,age}){

 	console.log(name);
 	console.log(age);

 };

 detail(person);