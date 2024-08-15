let searchform = document.querySelector(".search-form");

document.querySelector("#search").onclick = () => {
   searchform.classList.toggle('active');
   navbar.classList.remove('active');
   cartitemcontainer.classList.remove('active');
}

let cartitemcontainer = document.querySelector(".cart-item-container");

document.querySelector("#cart").onclick = () => {
   cartitemcontainer.classList.toggle('active');
   navbar.classList.remove('active');
   searchform.classList.remove('active');
}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu").onclick = () => {
   navbar.classList.toggle('active');
   searchform.classList.remove('active');
   cartitemcontainer.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchform.classList.remove('active');
   cartitemcontainer.classList.remove('active');
}