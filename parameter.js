// function add(a,b=0){
// 	return a+b;
// }

// console.log(add(5));

// function add(a,b=0){
// 	return a+b;
// }

// console.log(add(5,5));

function add(a,b){

	if(typeof b==="undefined")
	{
		b=0;
	}

	return a+b;
};

console.log(add(5));
