import 'regenerator-runtime'; /* for async await transpile */

import '../styles/main.css';

import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#mobile-nav'),
  content: document.querySelector('#main-content'),
});

function bootstrap() {
  app.renderPage();
}

window.addEventListener('hashchange', bootstrap, false);
window.addEventListener('load', bootstrap, false);
