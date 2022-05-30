const menu = document.querySelector('.nav-toggle');
const navUL = document.querySelector('.navigation-mobile');
const overlay = document.getElementById('overlay');

const features = document.querySelector('.list__link-features');
const dropDown = document.querySelector('.drop-down__features');

const company = document.querySelector('.list__link-company');
const dropDown2 = document.querySelector('.drop-down__company');




menu.addEventListener('click',() => {
    console.log('toggle-menu');
    menu.classList.toggle('active');
    navUL.classList.toggle('show');
    overlay.setAttribute("style", "display:block");

           
    if (menu.classList.contains('active')) {
        console.log('menu-open');

    } else {
        overlay.setAttribute("style", "display:none"); 
        resetMenu(); // reset drop-downs
    }
   
})
// FEATURES DROPDOWN
features.addEventListener('click',() => {
    console.log('toggle-features');
    dropDown.classList.toggle('show-f');
    features.classList.toggle('show');
})

// COMPANY DROPDOWN
company.addEventListener('click',() => {
    console.log('toggle-company');
    dropDown2.classList.toggle('show-f');
    company.classList.toggle('show');
})

function resetMenu() {
    dropDown.classList.remove('show-f'); 
    dropDown2.classList.remove('show-f');
    features.classList.remove('show');
    company.classList.remove('show');
    
  }



