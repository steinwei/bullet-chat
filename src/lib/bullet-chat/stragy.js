export class Stragy {
  animation = null;

  constructor(ctx) {
    super();
  }

  _render() {
    const ctx = this.ctx.ctx;
    const canvas = this.ctx.canvas;
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowBlur = 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   this.
    this.animation = requestAnimationFrame(this._render.bind(this));
  }
}
