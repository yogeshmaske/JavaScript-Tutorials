const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons);

// for of loop

// for (let button of allButtons) {

//     button.addEventListener("click",function(){
//         console.log("clicked me");
//         console.log("value of this");
//         console.log(this.textContent);
//     })
// }



// for (let button of allButtons) {

//     button.addEventListener("click",function(){

//         console.log(this.textContent);
//     })
// }

// Simple for loop 

// for (let i = 0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener("click", function () {

//         console.log(this.textContent);
//     });

// }


// forEach loop


allButtons.forEach(function(button) {
    button.addEventListener("click",function(){
        console.log(this.textContent);
    })
});