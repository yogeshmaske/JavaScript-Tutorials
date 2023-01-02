const mainButton = document.querySelector("button");
// console.log(mainButton);

const body = document.body;

const curruntColor = document.querySelector(".currunt-color");

// console.log(curruntColor);

function randomColorGenerator(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    const randomColor =`rgb(${red},${green},${blue})`;
    return randomColor;
    
};

mainButton.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
    // console.log(randomColor);
    body.style.backgroundColor = randomColor;
    curruntColor.textContent = randomColor;
    // curruntColor.style.color = randomColor;


    
})



//  just for fun

// const red = Math.floor(Math.random()*255);
//     const green = Math.floor(Math.random()*255);
//     const blue = Math.floor(Math.random()*255);

//     const btnColor =`rgb(${red},${green},${blue})`;
//     mainButton.style.backgroundColor = btnColor;
//     curruntColor.style.backgroundColor = btnColor;