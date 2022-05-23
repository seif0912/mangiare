window.addEventListener('scroll', ()=>{
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
})

let slideers = document.querySelectorAll('.testimonial .slider i')
let boxes = document.querySelector('.testimonial .slider .testi')

