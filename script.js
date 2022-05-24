window.addEventListener('scroll', ()=>{
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
})

let menuBtn = document.querySelector('header .burger')
let menu = document.querySelector('header .menu')
menuBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active') 
    menuBtn.classList.toggle("clicked");
})

window.addEventListener("resize", function () {
    const winWidth = window.innerWidth;
    if (winWidth >= 1034 && menuBtn.classList.contains("clicked")) {
        menuBtn.classList.remove("clicked");
        menu.classList.remove("active");
    }
});