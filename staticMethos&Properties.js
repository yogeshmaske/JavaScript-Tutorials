class Person {

    constructor(name,age){
        this.name = name;
        this.age = age;
    };
// static property
    static lastName = "xyz";
    static color = "red";

// static methods 
   static classInfo(){

    console.log("This is static class method");
   } ;
   
 
};

const Person1 = new Person("abc",9);

// Person1.classInfo();
// console.log(Person1.lastName);

Person.classInfo();

console.log(Person.lastName);

console.log(Person.color);

