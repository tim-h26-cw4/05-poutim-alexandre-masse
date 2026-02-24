export default class Poutine {
  constructor(element) {
    this.element = element;
    this.types = this.element.querySelectorAll('.selection');
    this.selectedType = '';
    this.init();
  }
  init() {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.addEventListener('click', this.selectType.bind(this));
    }
  }
  selectType(event) {
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    event.target.classList.toggle('is-active');
    this.selectedType = event.target.textContent;
    this.updatePhoto();
  }
  updatePhoto() {
    const imageUpdate = this.element.querySelector('.poutine__image');
    imageUpdate.classList.add('is-active');
    imageUpdate.src = `assets/images/${this.selectedType}.png`;
  }
}
