export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.onStart = this.onStart.bind(this);
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onEnd() {
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  // eslint-disable-next-line
  onMove() {}

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onMove = this.onMove.bind(this);
  }

  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  init() {
    if (this.slide && this.wrapper) {
      this.bindEvents();
      this.addSlideEvents();
    }
    return this;
  }
}
