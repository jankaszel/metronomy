import {NativeModules} from 'react-native'
const {NativeOscillator} = NativeModules

let noteId = 0;

export function playNote() {
  NativeOscillator.play();

  setTimeout(() => {
    NativeOscillator.stop();
  }, 150);
}
