/* eslint-disable no-param-reassign */
const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);

      this._changeSym(event, button, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _changeSym(event, button, drawer) {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      button.innerHTML = 'X';
    } else {
      button.innerHTML = '☰';
    }
    event.stopPropagation();
  },
};

export default DrawerInitiator;
