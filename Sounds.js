import React from 'react';
import { View, Button } from 'react-native';
import SoundPlayer from 'react-native-sound-player'
import Sound from 'react-native-sound';

export default class Fleet extends React.Component {
    render() {
        return (
            <View>
                <Button onPress={ playMusic2 } title="Play"></Button>
            </View>
        )        
    }
}

const playMusic1 = () => {
    try {
        // or play from url
        //SoundPlayer.playUrl('https://music.youtube.com/watch?v=P_7OWVzChos&list=PLTQImNwft-Cw_ut4MAekHzOfWnBnRQYMI')
        SoundPlayer.playSoundFile('victory_day', 'mp3');
    } catch (e) {
        console.log(`cannot play the sound file`, e)
    }
};

const playMusic2 = () => {
    var music = new Sound('victory_day.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + music.getDuration() + 'number of channels: ' + music.getNumberOfChannels());
       
        // Play the sound with an onEnd callback
        music.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      });
}