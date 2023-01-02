const  user1 ={

    firstName:"ABC",
    lastName:"Xyz",
    age:30,
    address:"mathura nagar",
    about:function (){
        return `${this.firstName} is ${this.age} year old`;
    },
    is18 :function(){
        return this.age>=18;
    }
};

function createUser(firstName,lastName,age,address){

    const user={};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    user.about = function (){
        return `${this.firstName} is ${this.age} year old`;
    };
    user.is18 = function(){
        return this.age>=18;
    };
    
    return user;
} ;

const newUser = createUser("Pqr","Xyz",32,"abcd");

console.log(newUser);

 const about = newUser.about();
 console.log(about);

 const is18 = newUser.is18();
 console.log(is18);