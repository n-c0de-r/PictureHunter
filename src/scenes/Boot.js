import Phaser from 'phaser';
import WebFont from 'webfontloader';

import * as Keys from '../data/keys';

export default class Boots extends Phaser.Scene {
  constructor() {
    super({ key: Keys.Scenes.Boot });
  }

  preload() {
    this.fontsReady = false;
    this.fontsLoaded = this.fontsLoaded.bind(this);
    this.add.text(100, 100, 'loading fonts...');

    this.load.image('loaderBg', './assets/images/loader-bg.png');
    this.load.image('loaderBar', './assets/images/loader-bar.png');

    WebFont.load({
      google: {
        families: ['Bangers'],
      },
      active: this.fontsLoaded,
    });
  }

  update() {
    if (this.fontsReady) {
      this.scene.start(Keys.Scenes.Splash);
    }
  }

  fontsLoaded() {
    this.fontsReady = true;
  }
}
