// // const numbers = [2,6,9,3,5];
// const numbers = [2,6,4,12,14];
// const ans = numbers.every((num)=>num%2==0);
// console.log(ans);
// console.log("abc");

const string ="pottato";
let value;
let count = 1;

for(let i=0;i<string.length;i++)
{
    
     if(value!==string[i]){
    for(let j=i;j<string.length;j++){

        if(string[i]==string[j+1]){
            count++;
            value = string[i];
            console.log(value+ "  is  "+count +"  time present");
        };
       
        
    };
};

    
};
