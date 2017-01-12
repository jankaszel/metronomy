// @flow
import React, {Component} from 'react'
import {Button} from 'react-native'
import Timer from '../util/Timer'
import {playNote} from '../util/oscillator'

type Props = {
  delay: number
}

export default class TimerControl extends Component {
  state: {
    running: boolean,
    tick: number
  } = {
    running: false,
    tick: 0
  }

  timer = null

  handleTick() {
    let {tick} = this.state

    playNote(tick === 0 ? 880 : 440)

    this.setState({
      ...this.state,
      tick: ++tick % 4
    })
  }

  handlePress() {
    const {delay} = this.props
    const {running} = this.state

    if (!this.timer) {
      this.timer = new Timer
    }

    if (running) {
      this.timer.stop()
    } else {
      this.timer.start(() => this.handleTick(), delay * 1000)
    }

    this.setState({
      ...this.state,
      running: !running
    })
  }

  render() {
    const {running} = this.state

    return (
      <Button
        title={running ? 'Stop' : 'Start'}
        onPress={() => {
          this.handlePress()
        }}
      />
    )
  }
}