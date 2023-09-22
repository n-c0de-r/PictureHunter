/* globals __DEV__ */
import Phaser from 'phaser';

import * as Keys from '../data/keys';

import Mushroom from '../sprites/Mushroom';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: Keys.Scenes.Game });
  }
  init() {}
  preload() {}

  create() {
    this.add.text(100, 100, Keys.Names.Game, {
      font: '64px Bangers',
      fill: '#7744ff',
    });
  }
}
