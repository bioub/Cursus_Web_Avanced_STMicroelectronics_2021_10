// import css from './horloge.module.css';

export class Horloge {
  constructor(private container: HTMLElement) {}

  private render() {
    const now = new Date();
    this.container.innerText = now.toLocaleTimeString();
  }

  start() {
    // this.container.className = css.horloge;
    this.render();
    setInterval(this.render.bind(this), 1000);
  }
}
