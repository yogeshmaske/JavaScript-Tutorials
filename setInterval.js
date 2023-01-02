const body = document.body;
const button = document.querySelector("button");

// add event listener on button

button.addEventListener("click", () => {
 
    const id = setInterval(() => {
      const red = Math.floor(Math.random() * 126);
      const green = Math.floor(Math.random() * 126);
      const blue = Math.floor(Math.random() * 126);

      const rgb = `rgb(${green},${blue},${red})`;

      body.style.background = rgb;
    }, 1000);
    button.textContent = "Click to Stop";
  
});


// clearInterval(id);
// button.textContent = "Stoped";

