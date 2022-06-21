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
    this.audio.src = '/../assets/music/Nico Staf _ Fast and Run.mp3';
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
