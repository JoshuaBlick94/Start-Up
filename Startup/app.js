const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('is-active')
    navLinks.classList.toggle('active')
})




