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
    this.addSimpleListeners();
  }

  addSimpleListeners() {
    this.leftArrow.addEventListener('click', () => { this.markCircle(); });
    this.rightArrow.addEventListener('click', () => { this.markCircle(); });
  }

  createCircles() {
    for (let i = 0; i < this.imageSrc.length; i++) {
      this.circle = document.createElement('div');
      this.circle.classList.add('circle');
      this.circlesContainer.appendChild(this.circle);
    }
  }

  markCircle() {
    this.circleNodelist = this.rootElement.querySelectorAll('.circle');
    this.circleNodelist.forEach(circle => {
      circle.classList.remove('circle--full');
    })
    this.circleNodelist[this.currentImage].classList.add('circle--full')
  }

}