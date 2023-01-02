
const userMethods = {
    about:function (){
        return `${this.firstName} is ${this.age} year old`;
    },

    is18:function(){
        return this.age>=18;
    }

};

function createUser(firstName,lastName,age,address){

    const user=Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.address = address;
    
    
    return user;
} ;

const user1 = createUser("abc","pqr",21,"xze");
const user2 = createUser("ppq","iii",33,"hhd");

// console.log(user1);

console.log(user1.about());
console.log(user2.about());


 