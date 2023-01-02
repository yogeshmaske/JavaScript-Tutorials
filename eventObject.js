const allButtons = document.querySelectorAll(".my-buttons button");

// for (let button of allButtons) {
//     button.addEventListener("click",function(){
        
//         console.log(this.textContent)
//         console.log(this);
//     })
// }

// same we can get object which has return by browser

// for (let button of allButtons) {
//     button.addEventListener("click",function(e){
        
//         // console.log(this.textContent)
//         console.log(e);
//         // console.log(this)
//     })
// }

// so here we can use arrow function

for (let button of allButtons) {
    button.addEventListener("click",(e)=>{
        
        // console.log(this.textContent)
        console.log(e);
        // console.log(e.target);
        console.log(e.currentTarget);


        // console.log(this)
    })
}
