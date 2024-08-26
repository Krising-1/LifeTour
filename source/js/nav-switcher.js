const header = document.querySelector('.header');
const buttonToggle = header.querySelector('.header__nav-button');

const addSwitcherBurger = () => {
  header.classList.remove('header--no-js');

  buttonToggle.addEventListener('click', () => {
    if (header.classList.contains('header--nav-open')) {
      header.classList.remove('header--nav-open');
    } else {
      header.classList.add('header--nav-open');
    }
  });
};

export { addSwitcherBurger };
