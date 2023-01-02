class CreateUser{

    constructor(firstName,lastName,age,address){
        
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    };

    about(){return `${this.firstName} is ${this.age} year old`};

    is18(){return this.age>=18};

    func(a){console.log(a)};
};

const user1 = new CreateUser("abc","xyz",58,"hvfjhsdhj");

const user2 = new CreateUser("qqq","ddd",44,"fff");

console.log(user1.firstName);

console.log(user2.firstName);

console.log(user1.about());

user1.func("Ram");

console.log(Object.getPrototypeOf(user1));

// 