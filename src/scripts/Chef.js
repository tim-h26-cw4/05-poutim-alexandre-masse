import Poutine from './Poutine.js';
export default class Chef {
  constructor(element) {
    this.element = element;
    this.menu = [];
    this.container = this.element.querySelector('.chef__order');
    this.init();
  }
  init() {
    const poutines = this.element.querySelectorAll('.poutine');

    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];
      const instance = new Poutine(poutine);

      this.menu.push(instance);
    }

    const btnSendOrder = this.element.querySelector('.button-secondary');
    btnSendOrder.addEventListener('click', this.sendOrder.bind(this));
  }

  sendOrder() {
    let count = 0;
    this.container.innerHTML = '';
    const poutines = this.element.querySelectorAll('.button');
    for (let i = 0; i < poutines.length; i++) {
      const poutine = poutines[i];

      if (poutine.classList.contains('is-active')) {
        count++;
      }
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = `Nombre total de poutine(s) : ${count}`;
    this.container.appendChild(paragraph);
  }
}
