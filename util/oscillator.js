import {NativeModules} from 'react-native'
const {NativeOscillator} = NativeModules

let noteId = 0;

export function playNote(frequency = 440) {
  NativeOscillator.play(frequency);

  setTimeout(() => {
    NativeOscillator.stop();
  }, 150);
}

export async function playSequence() {
  playNote(880);

  setTimeout(() => {
    playNote();

    setTimeout(() => {
      playNote();

      setTimeout(() => {
        playNote()
      }, 800)
    }, 800)
  }, 800)
}
