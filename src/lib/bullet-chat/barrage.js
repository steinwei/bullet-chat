const defaultConfig = {
  fontSize: 20,
  fontColor: "#fff",
  duration: 10000,
  trackHeight: 20 * 1.5,
};

export class Barrage {
  animation = null;
  ctx = null;
  constructor(ctx) {
    this.ctx = ctx;
  }

  makeOptions(options) {
    const { fontSize, fontColor, duration, trackHeight } = Object.assign(
      defaultConfig,
      options
    );
    const handled = {
      fontSize,
      fontColor,
      duration,
      trackHeight,
    };
    return handled;
  }

  add(barrage) {
    const { text, fontColor, fontSize } = {
      ...this.makeOptions(this.ctx.options),
      ...barrage,
    };
    const ctx = this.ctx.canvasCtx;
    ctx.font = `${fontSize}px`;
    const { width } = ctx.measureText(text);
    const barrageOpt = {
      text,
      width,
      fontColor,
      fontSize,
      speed: 0,
      offset: 0,
    };
    this.ctx.commander.waitingQueue.push(barrageOpt);
  }

  start() {
    this.animation = requestAnimationFrame(this._render.bind(this));
  }

  stop() {
    this.animation = null;
  }

  forEachManager() {
    this.ctx.commander.render();
  }

  _render() {
    const ctx = this.ctx.canvasCtx;
    const canvas = this.ctx.canvas;
    ctx.shadowColor = "rgba(0,0,0,0.8)";
    ctx.shadowBlur = 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.forEachManager();
    this.animation = requestAnimationFrame(this._render.bind(this));
  }
}
