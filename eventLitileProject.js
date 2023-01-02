const allButtons = document.querySelectorAll(".my-buttons button");

// console.log(allButtons);

// Using forEach method

allButtons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        // console.log(e.target);

        e.target.style.backgroundColor = "blue";
        e.target.style.color = "red";
    })
});