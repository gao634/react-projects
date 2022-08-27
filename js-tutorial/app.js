const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function change_height() {
    var main_image = document.getElementById('main__image__container');
    var main_container = document.getElementById('main__container');
    img_height = main_image.offsetHeight;
    string_height = img_height.toString() + 'px';
    main_container.style.height = string_height;
}
change_height();
$(window).resize(function() {
    change_height();
  });