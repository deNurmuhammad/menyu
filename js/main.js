let menuBar = document.querySelector(".bars")
let menuList = document.querySelector(".menu__list");

menuBar.addEventListener("click", ()=>{
    menuList.classList.toggle("active")
})