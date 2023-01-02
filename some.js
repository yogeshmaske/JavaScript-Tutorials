const numbers = [3,5,9,4];
const ans = numbers.some((number)=>number%2==0);
console.log(ans);


// Example---2
const userCart =[{id:1,price:20000},
                 {id:2,price:25000},
				 {id:3,price:50000}
				 ];

const result = userCart.some((item)=>item.price>60000);
console.log(result);			 