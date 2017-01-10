// @flow
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput
} from 'react-native'
import {playSequence} from '../util/oscillator'

export default () => (
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

    <TextInput
      style={{height: 40}}
      placeholder="Speed"
      onChangeText={value => {}}
    />

    <Text style={{padding: 10, fontSize: 42}}>
      {`🍕`}
    </Text>

    <Button
      title="Hello, World!"
      onPress={() => {
        playSequence();
      }}
    />
  </View>
)

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
