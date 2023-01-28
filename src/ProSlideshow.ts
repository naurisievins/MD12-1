import AdvancedSlideshow from "./AdvancedSlideshow";

export default class ProSlideshow extends AdvancedSlideshow {
  fullscreenButton: HTMLDivElement;
  slideInterval = 5000; // in miliseconds
  toClearInterval: NodeJS.Timer;
  
  constructor(selector: string) {
    super(selector);
    this.fullscreenButton = this.rootElement.querySelector('.js-full-screen');
    
    this.imageAutoSlide();
    this.addProListeners();
  }

  addProListeners() {
    this.rootElement.addEventListener('click', () => { this.resetIntervalOnClick() })
    this.fullscreenButton.addEventListener('click', () => { this.openFullscreen() })
    document.addEventListener("fullscreenchange", () => { this.handleFullscreen() })
  }

  imageAutoSlide() {
    this.toClearInterval = setInterval(() => { 
      this.slideRight();
      this.markCircle();
    },
    this.slideInterval);
  }

  resetIntervalOnClick() {
    clearInterval(this.toClearInterval);
    this.imageAutoSlide();
  }

  openFullscreen() {
      this.image.requestFullscreen();
  }

  handleFullscreen() {
    if (document.fullscreenElement) {
      this.fullscreenButton.style.display = 'none'
      console.log('is full')
    } else {
        this.fullscreenButton.style.display = 'block'
        console.log('exited full')
    }
  }

}