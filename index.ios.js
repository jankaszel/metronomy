/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native';
import Timer from './components/Timer';
import {playNote} from './util/oscillator'

function multiply(n1: number, n2: number): number {
  return n1 * n2;
}

export default class metronomy extends Component {
  state: {
    speed: number
  } = {
    speed: 125
  }

  render() {
    const {speed} = this.state;

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
        <Text>{multiply(14, 14)}</Text>

        <TextInput
          style={{height: 40}}
          placeholder="Speed"
          onChangeText={value => this.setState({
            ...this.state,
            speed: parseInt(value)
          })}
        />

        <Timer bpm={speed} />

        <Text style={{padding: 10, fontSize: 42}}>
          {`${speed} 🍕`}
        </Text>

        <Button
          title="Hello, World!"
          onPress={() => {
            playNote();
          }}
        />
      </View>
    );
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
});

AppRegistry.registerComponent('metronomy', () => metronomy);
