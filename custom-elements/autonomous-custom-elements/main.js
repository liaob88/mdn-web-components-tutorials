class PopupInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);

    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    const text = this.getAttribute('data-text');
    info.textContent = text;

    let imgUrl;
    if (!this.hasAttribute('img')) {
      imgUrl = 'img/default.png';
    } else {
      imgUrl = this.getAttribute('img');
    }

    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', './style.css');

    shadow.appendChild(wrapper);
    shadow.appendChild(linkElem);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

customElements.define('popup-info', PopupInfo);
