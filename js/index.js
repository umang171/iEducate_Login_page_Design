burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
burger.addEventListener('click',()=>{
    navbar.classList.toggle('display');
    // navbar.classList.add('display');
});