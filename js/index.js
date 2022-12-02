// Your code goes here
// i defined test in the css it moves text
const funBusImg = document.getElementById("funBusImg");
const letsGoP = document.getElementById("letsGo-p");
const letsGoImg = document.getElementById("letsGo-img");
const navlink = document.querySelector("nav");
const h2Txt = document.querySelector(".h2Txt");
const firstTxt = document.querySelector(".firstTxt");
const imgfluidRounded = document.querySelector(".img-fluid-rounded");
const destinationH2 = document.querySelector(".destinationH2");
const destinationPara = document.querySelector(".destinationPara");
const destinationImg = document.querySelector(".destinationImg");
const containerHome = document.querySelector('.container home')
navlink.addEventListener("mouseover", () => {
  funBusImg.setAttribute("class", "test");
});
funBusImg.addEventListener("click", () => {
  firstTxt.setAttribute("class", "test");
});
letsGoImg.addEventListener("dblclick", () => {
  letsGoP.setAttribute("class", "test");
});
imgfluidRounded.addEventListener("click", () => {
  h2Txt.setAttribute("class", "test");
});
window.addEventListener("load", (event) => {
  document.body.style.background = "orange";
});
document.addEventListener("select", () => {
  document.body.style.background = "green";
  destinationPara.setAttribute("class", "test");
  destinationImg.setAttribute("class", "test");
});

document.addEventListener("scroll", (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});
document.addEventListener("wheel", () => {
  document.body.style.background = "#17A2B8";
  containerHome.setAttribute("class", "test");
});
