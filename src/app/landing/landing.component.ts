import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.css'],
})
export class LandingComponent implements OnInit, OnDestroy {
  playMusic: Boolean = true;
  audio = new Audio();
  ngOnInit() {
    this.playAudio();
  }
  ngOnDestroy() {
    this.stopAudio();
  }
  toggleMusic() {
    if (this.playMusic) {
      this.muteAudio();
      this.playMusic = false;
    } else {
      this.unmuteAudio();
      this.playMusic = true;
    }
  }
  unmuteAudio() {
    this.audio.muted = false;
    this.audio.volume = 0.7;
  }
  playAudio() {
    this.audio.src =
      'https://github.com/pidobear/testt1roll9q123123qweqw31/raw/master/src/assets/music/Nico%20Staf%20_%20Fast%20and%20Run.mp3';
    this.audio.load();
    this.audio.play();
    this.audio.loop = true;
    this.audio.volume = 0.7;
    // console.log('play');
  }
  muteAudio() {
    this.audio.muted = true;
    this.audio.volume = 0;
    // this.audio.pause();
    // this.audio.currentTime = 0;
    // console.log('stop');
  }
  stopAudio() {
    // this.audio.pause();
    // this.audio.currentTime = 0;
    this.audio.src = '';
    console.log('stop');
  }
}
