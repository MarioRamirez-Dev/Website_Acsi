let logoFullColor = document.getElementById('logoFullColor') ;
let logoBlanco = document.getElementById('logoBlanco');
let menu = document.getElementById('menu');
let alturaMenu = menu.offsetTop;

window.addEventListener('scroll', function(){
    if(window.pageYOffset > alturaMenu){
        menu.classList.replace('menu_principal','swap_menu');
        logoFullColor.style.visibility = 'hidden';
        logoBlanco.style.visibility = 'visible';
    }
    else{
        menu.classList.replace('swap_menu','menu_principal');
        logoFullColor.style.visibility = 'visible';
        logoBlanco.style.visibility = 'hidden';
    }

});