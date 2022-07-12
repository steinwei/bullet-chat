export class Track {
  barrages = [];
  offset = 0;

  constructor() {}

  reset() {
    this.barrages = [];
    this.offset = 0;
  }

  removeTop() {
    this.barrages.shift();
  }

  push(...items) {
    this.barrages.push(items);
  }

  forEach(fn) {
    this.barrages.forEach((barrage, i, arr) => fn(barrage, i, arr));
  }

  updateOffset() {
    const last = this.barrages[this.barrages.length - 1];
    if (last) {
      const { speed = 0 } = last;
      this.offset -= speed;
    }
  }
}
