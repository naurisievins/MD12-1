import SimpleSlideshow from "./SimpleSlideshow";

export default class AdvancedSlideshow extends SimpleSlideshow {
  thumbContainer: HTMLDivElement;
  thumbImage:HTMLDivElement;
  allThumbImages: NodeListOf<HTMLDivElement>;

  constructor(selector:string) {
    super(selector);

    this.thumbContainer = this.rootElement.querySelector('.js-thumb-container');

    this.createThumbs();
    this.addThumbImages();
  }

  createThumbs() {
    for (let i = 0; i<this.imageSrc.length; i++) {
      this.thumbImage = document.createElement('div');
      this.thumbImage.classList.add('thumb_container__image');
      this.thumbContainer.append(this.thumbImage);
    }
  }

  addThumbImages () {
    this.allThumbImages = this.rootElement.querySelectorAll('.thumb_container__image')
    this.allThumbImages.forEach((image, index) => {
      image.style.backgroundImage = `url(${this.imageSrc[index]})`;
      image.addEventListener('click', () => { this.thumbClickHandler(index) })
    })
  }

  thumbClickHandler(index: number) {
    this.image.style.backgroundImage = `url(${this.imageSrc[index]})`;
    this.currentImage = index;
    this.markCircle();
  }

}