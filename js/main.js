const menu = document.querySelector('.nav-toggle');
const navUL = document.querySelector('.navigation-mobile');
const overlay = document.getElementById('overlay');


menu.addEventListener('click',() => {
    console.log('toggle-menu');
    menu.classList.toggle('active');
    navUL.classList.toggle('show');
    overlay.setAttribute("style", "display:block");
    
    if (menu.classList.contains('active')) {
        console.log('menu-open');

    } else {
        overlay.setAttribute("style", "display:none"); 
    }
   
})

