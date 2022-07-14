import { Barrage } from "./barrage";
import { Commander } from "./commander";

const defaultConfig = {
  maxTrack: 4,
  fontSize: 20,
  fontColor: "#fff",
};

export class BulletChat {
  constructor(options) {
    options = {
      ...defaultConfig,
      ...options,
    };
    // this.options = { ...options };
    this.el = options.el;
    this.maxTrack = options.maxTrack;
    this.trackWidth = options.el.offsetWidth;
    this.trackHeight = options.trackHeight;
    this.duration = options.duration;
    this.canvas = options.el;
    this.canvasCtx = options.el.getContext("2d");

    this.init();
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

  // todo: register evt
  // addEvent() {}

  render() {
    this.watcher._render();
  }
}
