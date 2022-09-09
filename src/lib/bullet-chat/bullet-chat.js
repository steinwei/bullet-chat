import { Barrage } from "./barrage";
import { Commander } from "./commander";

const defaultConfig = {
  maxTrack: 4,
  fontSize: 50,
  fontColor: "#fff",
};

export class BulletChat {
  constructor(options) {
    options = {
      ...defaultConfig,
      ...options,
    };
    this.el = options.el;
    this.maxTrack = options.maxTrack || defaultConfig;
    this.trackWidth = options.el.offsetWidth;
    this.trackHeight = options.trackHeight;
    this.duration = options.duration;
    this.canvas = options.el;
    this.canvasCtx = options.el.getContext("2d");
    this.options = this.makeOptions(options);

    this.init();
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

  init() {
    this.commander = new Commander(this);
    this.watcher = new Barrage(this);
  }

  add(barrage) {
    this.watcher.add(barrage);
  }

  start() {
    this.watcher.start();
  }

  // todo: register event
  // addEvent() {}

  render() {
    this.watcher._render();
  }
}
