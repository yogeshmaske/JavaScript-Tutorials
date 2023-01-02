// function myfunc(a,b,...c) {
	
// 	console.log(a);
// 	console.log(b);
// 	console.log(c);
// };

// myfunc(3,4,5,7,9);

function add(...num){

	let total = 0;

	for(let number of num){

		total = total + number;
	}
	return total;
     
}

   const ans = add(2,5,7,9,3,1,0);
	console.log(ans);