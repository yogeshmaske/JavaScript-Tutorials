const obj1 = {
	  key1:"v1",
	  key2:"v2"
}

const obj2 = {
	  key2:"v3",
	  key3:"v4"
}

// const newObject = {...obj1,...obj2,key5:"v5"};
// const newObject = {..."12345"};
const newObject = {...["v1","v2"]};
console.log(newObject);

