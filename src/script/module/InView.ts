/**
 * InView :
 *   要素が画面に入ったらCSSクラスをつける
 */
export class InView {
  targetElement: NodeListOf<HTMLElement>;
  showName: string;
  observer: IntersectionObserver;

  constructor() {
    this.targetElement = document.querySelectorAll("[data-inview]");
    this.showName = "-show";
    this.observer = new IntersectionObserver(
      (observes: IntersectionObserverEntry[]) => {
        this.observeTarget(observes);
      },
      {
        // 0だと1pxでも画面に入った瞬間に、1だと全て画面に入ったら isInteresting = true になる
        threshold: [0],
      }
    );
  }

  init() {
    if (!this.targetElement.length) return;
    this.attachEvent();
  }

  attachEvent() {
    this.targetElement.forEach((elem) => {
      this.observer.observe(elem);
    });
  }

  observeTarget(observes: IntersectionObserverEntry[]) {
    observes.forEach((observe) => {
      if (observe.isIntersecting) {
        observe.target.classList.add(this.showName);
        // 監視をやめる
        this.observer.unobserve(observe.target);
        // } else {
        //   observe.target.classList.remove('-show')
      }
    });
  }

  detachEvent() {
    this.targetElement.forEach((elem) => {
      this.observer.unobserve(elem);
    });
  }
}
