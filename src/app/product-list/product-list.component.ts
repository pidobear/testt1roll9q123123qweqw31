import { Component, OnInit, OnDestroy } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  products = products;
  day: number = 0;
  playMusic: Boolean = true;
  audio = new Audio();
  share() {
    window.alert('The product has been shared!');
  }
  ngOnInit() {
    this.nextLine();
    this.playAudio();
  }

  ngOnDestroy() {
    this.stopAudio();
  }

  nextLine() {
    this.day++;
    if (this.day == 6) {
      this.day = 1;
    }

    switch (this.day) {
      case 1:
        document.getElementById('textbox')!.textContent =
          'I choose you, Pikachu!';
        break;
      case 2:
        document.getElementById('textbox')!.textContent =
          'I am your personal guide!';
        break;
      case 3:
        document.getElementById('textbox')!.textContent =
          'I like being a dog3!';
        break;
      case 4:
        document.getElementById('textbox')!.textContent =
          'I like being a dog4!';
        break;
      case 5:
        document.getElementById('textbox')!.textContent =
          'I like being a dog5!';
        break;
      case 6:
        document.getElementById('textbox')!.textContent =
          'I like being a dog6!';
        break;
      default:
        console.log('No such day exists!');
        break;
    }
    var el = document.getElementById('textbox');
    el!.style.animation = 'none';
    el!.offsetHeight; /* trigger reflow */
    el!.style.animation = null!;

    var e2 = document.getElementById('showArrow');
    e2!.style.animation = 'none';
    e2!.offsetHeight; /* trigger reflow */
    e2!.style.animation = null!;
  }

  changeColorOver1() {
    var e3 = document.getElementById('optionbox1');
    e3!.style.color = 'red';
  }

  changeColorOut1() {
    var e3 = document.getElementById('optionbox1');
    e3!.style.color = 'white';
  }

  changeColorOver2() {
    var e4 = document.getElementById('optionbox2');
    e4!.style.color = 'red';
  }

  changeColorOut2() {
    var e4 = document.getElementById('optionbox2');
    e4!.style.color = 'white';
  }
  // BG-music
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
      'https://github.com/pidobear/testt1roll9q123123qweqw31/raw/master/src/assets/music/Dan%20Henig%20_%20Danger%20Snow.mp3';
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

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
