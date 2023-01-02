// Extend , Supper

class Animal{

    constructor(name,age){
      
        this.name = name;
        this.age  = age;
    };

    eat(){
        return `${this.name} is eating`;
    };
};

const animal1 = new Animal("Tiger",3);

// console.log(animal1.age);
// console.log(animal1.name);

// console.log(animal1.eat());

// using extend keyword , inherits same value of animal class in to dog class

class Dog extends Animal{

    constructor(name,age,speed){
        // Using supper method
        super(name,age);
        this.speed = speed;
    };

    run(){return `${this.name} is running at speed of ${this.speed} kmph`};

    eat(){return `Modified ${this.name} is eating`};
};

const tommy = new Dog("tommy",5,45);

console.log(tommy.age);
console.log(tommy.name);

console.log(tommy.eat());
console.log(tommy.run());
console.log(animal1.eat());