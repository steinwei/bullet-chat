import { Track } from "./track";

export class Commander {
  waitingQueue = [];
  tracks = [];
  trackHeight = 0;
  trackWidth = 0;
  constructor(ctx) {
    for (let index = 0; index < ctx.maxTrack; index++) {
      const track = new Track();
      this.tracks.push(track);
    }
    this.ctx = ctx;
    this.trackHeight = ctx.trackHeight || 0;
    this.trackWidth = ctx.trackWidth || 0;
  }

  add(barrage) {
    const trackId = this.findTrack();
    if (trackId == -1) {
      return false;
    }

    let speed = 20;
    const track = this.tracks[trackId];
    // const trackOffset = track.offset;
    const trackWidth = this.trackWidth;

    //   todo
    speed = Math.min(speed, 50);
    const measureText = this.ctx.canvasCtx.measureText(barrage);
    const { width } = measureText;
    const normaliseBarrage = Object.assign({}, barrage, {
      speed,
      offset: trackWidth,
      width,
    });
    track.push(normaliseBarrage);
    track.offset = trackWidth + width * 1.2;

    return true;
  }

  forEach(fn) {
    this.tracks.forEach((barrage, barrageIndex, arr) =>
      fn(barrage, barrageIndex, arr)
    );
  }

  findTrack() {
    let idx = -1,
      max = -Infinity;
    this.forEach((track, index) => {
      const trackOffset = track.offset;
      if (trackOffset > this.trackWidth) {
        return;
      }
      const t = this.trackWidth - trackOffset;
      if (t > max) {
        idx = index;
        max = t;
      }
    });
    return idx;
  }

  extractBarrage() {
    this.waitingQueue.forEach(
      (barrage) => this.add(barrage) && this.waitingQueue.shift()
    );
  }

  render() {
    this.extractBarrage();
    const ctx = this.ctx.canvasCtx;
    const trackHeight = this.ctx.trackHeight;
    let removeTop = false;
    this.forEach((track, trackIndex) => {
      track.forEach((barrage, barrageIndex) => {
        const { fontColor, text, offset, speed, width, fontSize } = barrage;
        ctx.fillStyle = fontColor;
        ctx.font = `${fontSize}px`;
        ctx.fillText(text, offset, (trackIndex + 1) * trackHeight);

        barrage.offset -= speed;
        if (
          barrageIndex == 0 &&
          barrage.offset < 0 &&
          Math.abs(barrage.offset) >= width
        ) {
          removeTop = true;
        }
      });
      track.updateOffset();
      if (removeTop) {
        track.removeTop();
      }
    });
  }
}

// todo
export class ScrollCommander extends Commander {
  constructor() {
    super();
  }
}

// todo
export class FixTopCommander extends Commander {
  constructor() {
    super();
  }
}
