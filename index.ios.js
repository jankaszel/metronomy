// @flow
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app';

export default function Metronomy() {
  return (
    <App />
  )
}

AppRegistry.registerComponent('metronomy', () => Metronomy);
