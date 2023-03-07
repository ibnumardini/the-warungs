const SkipToContentSmothScrol = {
  init({ content, skipLinkElm }) {
    this._content = content;
    this._skipLinkElm = skipLinkElm;

    return this;
  },

  smothly() {
    this._skipLinkElm.addEventListener('click', (event) => {
      event.preventDefault();
      this._content.scrollIntoView({ behavior: 'smooth' });
      this._skipLinkElm.blur();
    });
  },
};

export default SkipToContentSmothScrol;
