// @flow
export default class Timer {
  delay: ?number
  handle: ?number

  setDelay(delay: number) {
    this.delay = delay
  }

  start(callback: () => void, delay: number) {
    this.stop()
    this.delay = delay

    callback()

    this.handle = setInterval(() => {
      if (delay !== this.delay && this.delay) {
        this.start(callback, this.delay);
      } else {
        callback()
      }
    }, delay)
  }

  stop() {
    if (this.handle) {
      clearInterval(this.handle)
      this.handle = null
    }
  }
}
