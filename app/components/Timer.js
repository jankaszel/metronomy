import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Timer extends Component {
  timer = null
  initialProps = {
    bpm: 0
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    const {bpm} = this.props;

    return (
      <View>
        <Text>{`${bpm} Beats per Minute`}</Text>
      </View>
    );
  }
}