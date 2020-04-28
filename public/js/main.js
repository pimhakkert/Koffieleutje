//Mobile menu
let mobileMenuOpen = false;

document.getElementsByClassName('topmenu-mobile')[0].addEventListener('click',() => {
    toggleMobileMenu();
});

let mobileMenu = document.getElementsByClassName('mobile-menu')[0];
let mobileMenuHamburger = document.getElementsByClassName('hamburger--slider')[0];

function toggleMobileMenu() {
    if(mobileMenuOpen) {
        mobileMenuHamburger.classList.remove('is-active');
        mobileMenu.style.left = '-110%';
        document.body.style.overflowY = 'auto';
        mobileMenuOpen = false;
    } else {
        mobileMenuHamburger.classList.add('is-active');
        mobileMenu.style.left = '0';
        document.body.style.overflowY = 'hidden';
        mobileMenuOpen = true;
    }
}
