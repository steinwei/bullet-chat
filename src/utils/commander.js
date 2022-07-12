class Commander {
    waitingQueue = []
    tracks = []
    constructor() {

    }

    add() {
        
    }

    forEach(fn) {
        this.tracks.forEach((...args)=> fn(...args))
    }

    findTrack() {
        let idx = -1, max = -Infinity
        this.forEach((track, index) => {
            const trackOffset = track.offset
            if (trackOffset > this.track.Width) {
                return
            }
            const t = this.trackWidth - trackOffset
            if (t > max) {
                idx = index
                max = t
            }
        })
        return idx
    }

    extractBarrage() {
        this.waitingQueue.forEach()
    }

    render() {
        this.extractBarrage()
        this.animation = requestAnimationFrame(this.render.bind(this))
    }
}