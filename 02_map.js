varMap.set("1","string");//string as key
varMap.set(1,"num");//number as a key
varMap.set(true,"bool");//boolean as keys

console.log(varMap.get('1'));
console.log(varMap.get(1));
console.log(varMap.get(true));

console.log(varMap.size);


// object as key in map
let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

visitsCountMap.set(john,123);

console.log(visitsCountMap);

// Chaining
// Every map.set call returns the map itself, so we can “chain” the calls:

varMap.set(2,"two")
.set(3,"tree")
.set(4,"four");

console.log(varMap);


// Iteration over Map

// For looping over a map, there are 3 methods:
// Using for of loooooppp

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

let recipeMap = new Map([ ['cucumber', 500],['tomatoes', 350],['onion', 50]]);
console.log(recipeMap);

// iterate over keys (vegetables)
for(let vagi of recipeMap.keys()){
    console.log(vagi);//here we get keys:cucumber,tomatoes,onion
};

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount);//here we get values :500,350,50
}

// iterate over [key, value] entries
for (let [key, value]  of recipeMap.entries()) {
    console.log(`${key} , ${value}`)
};

// Using simple for of loop
for (let entry of recipeMap) {
    console.log(entry)
}

// , Map has a built-in forEach method, similar to Array:
// runs the function for each (key, value) pair

recipeMap.forEach((val,key)=>{console.log(val,key)});

// to add extra items to map in new map

let extinfo = new Map();
extinfo.set(recipeMap,{carot:40,chili:30});
console.log(extinfo);
console.log(extinfo.get('carot'));
console.log(extinfo.get(recipeMap)['cucumber']);