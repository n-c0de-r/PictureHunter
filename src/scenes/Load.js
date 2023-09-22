/* eslint-disable quotes */
import Phaser from 'phaser';

import * as Keys from '../data/keys';

import SkyImage from '../assets/sprites/sky.png';
import PlanetImage from '../assets/sprites/emeraldar_norings.png';
import GroundImage from '../assets/sprites/platform2.png';
import StarImage from '../assets/sprites/star.png';
import BombImage from '../assets/sprites/bomb.png';
import DudeImage from '../assets/sprites/dude.png';
import ExplosionImage from '../assets/sprites/EXPLOSION_ANIMATION.png';

import BigBombAtlas from '../assets/atlas/bigBomb.png';
import BigBombJson from '../assets/atlas/bigBomb.json';
import BigBangAtlas from '../assets/atlas/bigBang.png';
import BigBangJson from '../assets/atlas/bigBang.json';
import NineSliceAtlas from '../assets/atlas/nine-slice.png';
import NineSliceJson from '../assets/atlas/nine-slice.json';

import HealthContainerImage from '../assets/sprites/HealthContainer.png';
import HealthIconImage from '../assets/sprites/HealthIcon.png';

import StarSound from '../assets/sounds/spell2.mp3';
import BombSound from '../assets/sounds/rumble.mp3';
import BigBombSound from '../assets/sounds/explosion.mp3';
import JumpSound from '../assets/sounds/jump.mp3';
import ClickSound from '../assets/sounds/flopp.mp3';

import Level1Music from '../assets/music/spaceranger3.mp3';
import Level2Music from '../assets/music/magicspace.mp3';
import GameOverMusic from '../assets/music/space.mp3';

export default class extends Phaser.Scene {
  constructor() {
    super({ key: Keys.Scenes.Load });
  }

  init() {
    // Force a Kickstart on Custom Webfonts
    this.fonts = [Keys.UI.Font];

    // Workaround for Phaser 3 not loading fonts until used
    this.fonts.forEach((font) => {
      this.add.text(0, 0, '', { fontFamily: font });
    });
  }

  preload() {
    // Images
    this.load.image(Keys.Assets.Sky, SkyImage);
    this.load.image(Keys.Assets.Planet, PlanetImage);
    this.load.image(Keys.Assets.Ground, GroundImage);
    this.load.image(Keys.Assets.Star, StarImage);
    this.load.image(Keys.Assets.Bomb, BombImage);
    this.load.spritesheet(Keys.Assets.Dude, DudeImage, {
      frameWidth: 32,
      frameHeight: 48,
    });
    this.load.spritesheet(Keys.Assets.Explosion, ExplosionImage, {
      frameWidth: 32,
      frameHeight: 32,
    });

    // Atlases
    this.load.atlas(Keys.Assets.BigBomb, BigBombAtlas, BigBombJson);
    this.load.atlas(Keys.Assets.BigBang, BigBangAtlas, BigBangJson);
    this.load.atlas(Keys.Assets.NineSlice, NineSliceAtlas, NineSliceJson);

    // UI
    this.load.image(Keys.UI.HealthContainer, HealthContainerImage);
    this.load.image(Keys.UI.HealthIcon, HealthIconImage);

    // Sounds
    this.load.audio(Keys.Assets.Star, StarSound);
    this.load.audio(Keys.Assets.Bomb, BombSound);
    this.load.audio(Keys.Assets.BigBomb, BigBombSound);
    this.load.audio(Keys.Assets.Dude, JumpSound);
    this.load.audio(Keys.UI.Click, ClickSound);

    // Music
    this.load.audio(Keys.Scenes.Level1, Level1Music);
    this.load.audio(Keys.Scenes.Level2, Level2Music);
    this.load.audio(Keys.Scenes.Over, GameOverMusic);
  }

  create() {
    this.scene.start(Keys.Scenes.Level1);
  }
}
