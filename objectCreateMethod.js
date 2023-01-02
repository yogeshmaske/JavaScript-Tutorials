const obj1 ={

    key1:"value1",
    key2:"value2"
};

const obj2 = Object.create(obj1);

console.log(obj2);

obj2.key3 = "value3";
// const obj2={
//     key3:"value3"
// };

console.log(obj1.key1);
console.log(obj2.key3);

// here see the result

console.log(obj2.key1); //undefined 

// solution for tht is 
// object.create method

