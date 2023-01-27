export default class BasicSlideshow {
  rootElement: HTMLDivElement;
  leftArrow: HTMLDivElement;
  rightArrow: HTMLDivElement;
  image: HTMLDivElement;
  currentImage = 0;

  imageSrc: string[] = [
    '/assets/images/sloth1.webp',
    '/assets/images/sloth2.webp',
    '/assets/images/sloth3.webp',
    '/assets/images/sloth4.webp',
    '/assets/images/sloth5.webp',
  ];

  constructor(selector: string) {
    this.rootElement = document.querySelector(selector);
    this.leftArrow = this.rootElement.querySelector('.js-left-arrow');
    this.rightArrow = this.rootElement.querySelector('.js-right-arrow');
    this.image = this.rootElement.querySelector('.js-image');

    this.addListeners();
  }

  addListeners() {
    this.leftArrow.addEventListener('click', () => { this.slideLeft(); });
    this.rightArrow.addEventListener('click', () => { this.slideRight(); });
  }

  slideLeft() {
    if (this.currentImage === 0) {
      this.currentImage = this.imageSrc.length;
    }
    this.image.style.backgroundImage = `url(${this.imageSrc[this.currentImage - 1]})`;
    this.currentImage -= 1;    
  }

  slideRight() {
    if (this.currentImage === this.imageSrc.length - 1) {
      this.currentImage = -1;
    }
    this.image.style.backgroundImage = `url(${this.imageSrc[this.currentImage + 1]})`;
    this.currentImage += 1;
  }
}
