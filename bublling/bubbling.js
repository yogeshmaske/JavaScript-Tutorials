// Event Bubbling
// const grandparent = document.querySelector(".grandparent");
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// const grandparent = document.getElementsByClassName("grandparent");
// const parent = document.getElementsByClassName("parent");
// const child = document.getElementsByClassName("child");

// console.log(child);
// console.log(parent);
// console.log(grandparent);
child.addEventListener("click",()=>{
    console.log("You Clicked on Child")
})

parent.addEventListener("click",()=>{
    console.log("You clicked on parent")
})

grandparent.addEventListener("click",()=>{
    console.log("You Clicked on Grand Parent")
})

document.body.addEventListener("click" ,()=>{

    console.log("You Clicked on Body");
});


























// const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// capturing events
// child.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! child");
//   },
//   true
// );
// parent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! parent");
//   },
//   true
// );
// grandparent.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! grandparent");
//   },
//   true
// );
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("capture !!!! document.body");
//   },
//   true
// );

///// not capture

// child.addEventListener("click", () => {
//   console.log("bubble child");
// });
// parent.addEventListener("click", () => {
//   console.log("bubble parent");
// });
// grandparent.addEventListener("click", () => {
//   console.log("bubble grandparent");
// });
// document.body.addEventListener("click", () => {
//   console.log("bubble document.body");
// });

// event delegation
// grandparent.addEventListener("click", (e) => {
//   console.log(e.target);
// });