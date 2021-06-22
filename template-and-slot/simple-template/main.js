class exampleTemplate extends HTMLElement {
  constructor() {
    super();

    const templateContent = document.getElementById('my-paragraph');

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templateContent.content.cloneNode(true));
  }
}

customElements.define('my-paragraph', exampleTemplate);

// 確認用コード
const slottedSpan = document.querySelector('my-paragraph span');
console.log(slottedSpan.assignedSlot);
console.log(slottedSpan.slot);
