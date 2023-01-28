import BasicSlideshow from "./BasicSlideshow"

export default class SimpleSlideshow extends BasicSlideshow {
  circlesContainer: HTMLDivElement;
  circle: HTMLDivElement;
  circleNodelist: NodeListOf<HTMLDivElement>;

  constructor(selector: string) {
    super(selector);

    this.circlesContainer = this.rootElement.querySelector(".js-circles")

    this.createCircles();
    this.markCircle();
  }

  createCircles() {
    for (let i = 0; i < this.imageSrc.length; i++) {
      this.circle = document.createElement('div');
      this.circle.classList.add('circle');
      this.circlesContainer.appendChild(this.circle);
    }
  }

  slideLeft() {
    super.slideLeft();
    this.markCircle();
  }

  slideRight() {
    super.slideRight();
    this.markCircle();
  }

  markCircle() {
    this.circleNodelist = this.rootElement.querySelectorAll('.circle');
    this.circleNodelist.forEach(circle => {
      circle.classList.remove('circle--full');
    })
    this.circleNodelist[this.currentImage].classList.add('circle--full')
  }

}