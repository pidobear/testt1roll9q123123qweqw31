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
      this.playAudio();
      this.playMusic = true;
    } else {
      this.stopAudio();
      this.playMusic = false;
    }
  }
  playAudio() {
    this.audio.src = '../../../assets/music/Nico Staf _ Fast and Run.mp3';
    this.audio.load();
    this.audio.play();
  }
  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
