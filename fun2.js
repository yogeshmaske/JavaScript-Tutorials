//  Call back function..


//  function fun1(a){
//  	console.log(a);	
//  }

 
// function fun2(){
//  	console.log("inside fun 2"); 	
//  };

//  fun1();

 
// function fun2(){
//  	console.log("inside fun 2"); 	
//  };



// function fun1(a){
//  	console.log(a);	
//  }
//  fun1(fun2);

// call-back function
// function fun2(){
//  	console.log("inside fun 2"); 	
//  };



// function fun1(a){
//  	a();	
//  }
//  fun1(fun2);
 //fun1(fun2()); this will not work properly

// passing value to callbak fun
 function fun2(b){
 	console.log("inside fun 2");
 	console.log(`passing value is ${b}`); 	
 };

function fun1(a){
 	a(99);	
 }
 fun1(fun2);