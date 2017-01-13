// @flow
import React, {Component} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Slider
} from 'react-native'
import TimerControl from './TimerControl'

export default class MetronomyApp extends Component {
  state: {
    speed: number
  } = {
    speed: 128
  }

  handleValueChange(value: string) {
    const speed = parseInt(value)

    this.setState({
      ...this.state,
      speed
    })
  }

  render() {
    const {speed} = this.state
    const delay = 60/speed;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        <View>
          <Slider
            style={styles.slider}
            onSlidingComplete={value => {
              this.handleValueChange(value)
            }}
            minimumValue={10}
            maximumValue={200}
            step={10}
            value={speed}
          />
        </View>

        <Text style={styles.instructions}>
          {`🍕`} The speed is {speed} beats per minute.
        </Text>

        <TimerControl delay={delay} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  slider: {
    height: 10,
    margin: 10,
    width: 300
  },
})
