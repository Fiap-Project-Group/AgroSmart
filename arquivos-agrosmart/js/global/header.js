const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.header-nav-bar')
const icon = document.querySelector('.menu-toggle i');

menuToggle.addEventListener('click', () =>{
    navBar.classList.toggle('active');

    if(navBar.classList.contains('active')){
        icon.classList.remove('fa-bars')
        icon.classList.add("fa-x")
    } else{
        icon.classList.add('fa-bars')
        icon.classList.remove("fa-x")
    }
});