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
    for (let i = 0; i < this.types.length; i++) {
      const type = this.types[i];
      type.classList.remove('is-active');
    }
    if (this.isActive == false) {
      event.target.classList.toggle('is-active');
      this.selectedType = event.target.textContent;
      console.log(this.selectedType);
      this.updatePhoto();
    } else if (this.isActive == true) {
      for (let i = 0; i < this.types.length; i++) {
        const type = this.types[i];
        type.classList.remove('is-active');
      }
      const imageUpdate = this.element.querySelector('.poutine__image');
      imageUpdate.classList.remove('is-active');
      imageUpdate.src = `assets/images/poutine.png`;
      this.isActive = false;
    }
  }

  updatePhoto() {
    const imageUpdate = this.element.querySelector('.poutine__image');
    imageUpdate.classList.add('is-active');
    imageUpdate.src = `assets/images/${this.selectedType}.png`;
    this.isActive = true;
  }
}
