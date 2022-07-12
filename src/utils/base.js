export class BulletChat {
  constructor(options) {
    options = options || {};
    this.el = options.el;
    this.maxTrack = options.maxTrack;
    this.trackWidth = options.trackWidth;
    this.trackHeight = options.trackHeight;
    this.duration = options.duration;
  }
}
