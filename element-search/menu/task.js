const menuSub = document.getElementsByClassName('menu_sub');
const menuActive = document.getElementsByClassName('menu_active');

for (let menuItem of menuSub) {
  menuItem.closest('.menu__item').getElementsByTagName('a')[0].onclick = (item) => {
    if (menuItem.classList.contains('menu_active')) {
      menuItem.classList.remove('menu_active')
    }else {
      if (menuActive.lenght) menuActive[0].classList.remove('menu_active');
      menuItem.classList.add('menu_active');
    }
    return false;
  }
}