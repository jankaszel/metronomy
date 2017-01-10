// @flow
import {sleep} from './sleep'
import {NativeModules} from 'react-native'

const {NativeOscillator} = NativeModules

export async function playNote(frequency: number = 440) {
  NativeOscillator.play(frequency)

  await sleep(175)
  NativeOscillator.stop()
}

export async function playSequence() {
  playNote(880)

  for (let i = 0; i < 3; i++) {
    await sleep(800)
    playNote()
  }
}
