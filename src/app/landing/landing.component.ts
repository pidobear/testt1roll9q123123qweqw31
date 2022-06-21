import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.css'],
})
export class LandingComponent {
  playMusic: Boolean = false;
  audio = new Audio();
  toggleMusic() {
    if (this.playMusic) {
      this.stopAudio();
      this.playMusic = false;
    } else {
      this.playAudio();
      this.playMusic = true;
    }
  }
  playAudio() {
    this.audio.src =
      "https://github.com/pidobear/testt1roll9q123123qweqw31/raw/master/src/assets/music/Nico%20Staf%20_%20Fast%20and%20Run.mp3";
    this.audio.load();
    this.audio.play();
    this.audio.volume = 0.7;
    console.log('play');
  }
  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
    console.log('stop');
  }
}
