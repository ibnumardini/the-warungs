import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import './components';
import SkipToContentSmothScrol from '../utils/smoth-skip-to-content';

class App {
  constructor({
    button, drawer, content, skipLinkElm,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skipLinkElm = skipLinkElm;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });
  }

  _initialSkipLink() {
    SkipToContentSmothScrol.init({
      content: this._content,
      skipLinkElm: this._skipLinkElm,
    }).smothly();
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    this._initialSkipLink();
  }
}

export default App;
