import 'regenerator-runtime'; /* for async await transpile */

import '../styles/main.css';

import './utils/img-lazy-loading';

import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#mobile-nav'),
  content: document.querySelector('#main-content'),
  skipLinkElm: document.querySelector('.skip-link'),
});

function bootstrap() {
  swRegister();

  app.renderPage();
}

window.addEventListener('hashchange', bootstrap, false);
window.addEventListener('load', bootstrap, false);
