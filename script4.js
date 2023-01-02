const obj1 = {
	  key1:"v1",
	  key2:"v2",
      key3:"v3",
	  key4:"v4"

};

let {key1,key2,...obj2} = obj1;

console.log(key1);
console.log(obj2);

