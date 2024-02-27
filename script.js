hamburger = document.querySelector('.hamburger-menu');
toggleBtnIcon = document.querySelector('.hamburger-menu i');
dropDownMenu = document.querySelector('nav');

hamburger.onclick = function() {
    navBar = document.querySelector('nav');
    navBar.classList.toggle('active');

    dropDownMenu.classList.toggle('open');
    isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-bars'
    : 'fa-solid fa-xmark'
}

// document.onclick = function(clickEvent) {
//     if(clickEvent.target !== dropDownMenu && clickEvent.target === hamburger) {
//         hamburger.classList.remove('active');
//         dropDownMenu.classList.remove('active');
//     }
// }