let str = "akash-angular-developer";
let string2 ="";
// output : akashAngularDeveloper


string2 = str.replace('-', ' ');
string2 = string2.replace('-', ' ');

console.log(str+ "   -->origanal string");
console.log(string2 + "   -->modified string1");


 function camelize(string2) {
  return string2.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
  	  
    if (+match === 0 ) return ""; // or if (/\s+/.test(match)) for white spaces

    
    return index === 0 ? match.toLowerCase() : match.toUpperCase();

  });
}

newstring = camelize(string2);
console.log(newstring + "   -->modified string 2");








// // let string2=string.trim();
// //  console.log(string2);
// let str1="";

	
// 	if(s ==="-"){
// 		str1.push(" ");
// 	}
// 	for(let s of str){

// };
// console.log(str1);
// // function camelize(str) {
// //   return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
  	  
// //     if (+match === 0 ) return ""; // or if (/\s+/.test(match)) for white spaces

    
// //     return index === 0 ? match.toLowerCase() : match.toUpperCase();

// //   });
// // }


// // string2 = camelize(str);
// // console.log(string2);



// // for(let str of string){
     
// //      if(str==="-"){
// //      	continue;
// //      }
// //     string2 = string2 + str;  

// // }
// // // // let str3;
// // // // for(index of string2){

// // // //     if(index=="5" ||index=="12"){

// // // //     	string2[index].toUppercase();
// // // //         str3 = string2[index];
// // // //     }
// // // //    str3 = string2[index];
// // // // }
// // // console.log(string2);





