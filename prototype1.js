function hellow(){

    console.log("hellow world");
};

console.log(hellow.name);
// we can add our own property to the function
// like key value paire

hellow.myOwnProperty = "very unique property";

console.log(hellow.myOwnProperty);

// function gives a free space in the form of object it is called prototype

hellow.prototype;

console.log(hellow.prototype);

// only functions having prototype

if(hellow.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
};


// if object
const hellow1 = {key1:"value1"};

if(hellow1.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
};


// if array

const hellow2 = ["value1"];

if(hellow2.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
};



// how to use prototype

hellow.prototype.abc = "abc";
hellow.prototype.xyz ="xyz";
hellow.prototype.sing = function(){return "lalala";};

console.log(hellow.prototype.abc);
console.log(hellow.prototype.xyz);
console.log(hellow.prototype.sing());