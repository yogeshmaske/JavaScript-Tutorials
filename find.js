const myArray = ["dog","lion","cat","parot"];

// function isLength4(string){
// 	return string.length === 3;
// }


// // console.log(isLength4("lion"));

// const ans = myArray.find(isLength4);

// console.log(ans);



//  using Arrow function

// const ans = myArray.find((string)=>{
// 	return string.length===5;
// });
// console.log(ans);

//  Real life example

const users = [

             {id:1,name:"abc"},
              {id:2,name:"pqr"},
              {id:3,name:"xyz"}
             
              ];
const ans = users.find((user)=>user.id===2);

console.log(ans);             

