const numbers =[2,5,7];

// function suare(num){

// 	return num*num;
// };

//  // console.log(numbers.map(suare));

//  const val =numbers.map(suare);
//  console.log(val);

// we can also use function expration

// const suare = function(num){return num*num};

// const ans = numbers.map(suare);
// console.log(ans);


// it is necessary to returrn somthing while using map

// const suare = function(num){ console.log(num*num) };

// const ans = numbers.map(suare);
//  console.log(ans);

// using arrow func

// const result = numbers.map((num)=>{return num*num});
// console.log(result);



// real life example

const users = [

 {name:"abc", age:30},
 {name:"xyz", age:35},
];


const ans=users.map((user)=>{return user.name });
console.log(ans);