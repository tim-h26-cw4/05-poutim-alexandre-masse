export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.selection');
    this.selectedType = '';
    this.isActive = false;
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(event) {
    const clicked = event.currentTarget;

    const isAlreadyActive = clicked.classList.contains('is-active');

    for (let i = 0; i < this.types.length; i++) {
      this.types[i].classList.remove('is-active');
    }

    if (isAlreadyActive) {
      const imageUpdate = this.element.querySelector('.poutine__image');
      imageUpdate.classList.remove('is-active');
      imageUpdate.src = 'assets/images/poutine.png';
      this.selectedType = '';
    } else {
      clicked.classList.add('is-active');
      this.selectedType = clicked.textContent;
      this.updatePhoto();
    }
  }

  updatePhoto() {
    const imageUpdate = this.element.querySelector('.poutine__image');
    imageUpdate.classList.add('is-active');
    imageUpdate.src = `assets/images/${this.selectedType}.png`;
    this.isActive = true;
  }
}
