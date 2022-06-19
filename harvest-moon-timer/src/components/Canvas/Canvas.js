import React, { Component } from 'react';
import './Canvas.css';
import Sprite from './classes';
import { Sprites } from './Sprites';

// const xRem = window.innerWidth / 100;
let yRem = window.innerHeight / 100;

const background = new Image();
background.src = require('./img/background2.png');

// const getScale = () => {
//   let spriteScale = 5;
//   if (window.innerWidth < 1366) {
//     return (spriteScale = 3);
//   }

//   return spriteScale;
// };

const getInitialPositionRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

class Canvas extends Component {
  constructor() {
    super();
    this.canvas = React.createRef();
    this.ctx = null;

    this.width = null;
    this.height = null;
    this.framesCounter = 0;
  }

  componentDidMount() {
    this.ctx = this.canvas.current.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;

    this.background = new Sprite({
      position: {
        x: 0,
        y: 0,
      },
      speed: {
        x: 0,
        y: 0,
      },
      size: {
        width: this.canvas.current.width,
        height: this.canvas.current.height,
      },
      image: background,
      ctx: this.ctx,
    });

    this.queueAnimation = [];
    this.unmountedAnimation = Sprites.map((sprite) => {
      sprite.ctx = this.ctx;
      sprite.speed.x = 3;
      sprite.scale = yRem / 2;
      sprite.markedPositionY = getInitialPositionRange(30, 45);
      sprite.position.y = yRem * sprite.markedPositionY;
      return new Sprite(sprite);
    }).sort(() => Math.random() - 0.5);

    this.spawnAnimation();

    this.animate();

    window.addEventListener('resize', () => {
      this.canvas.current.width = window.innerWidth;
      this.canvas.current.height = window.innerHeight;
      this.background.size.width = window.innerWidth;
      this.background.size.height = window.innerHeight;
      yRem = window.innerHeight / 100;
      this.ctx.imageSmoothingEnabled = false;
      this.queueAnimation.forEach((sprite) => {
        sprite.scale = yRem / 2;
        sprite.position.y = yRem * 40;
      });
      this.unmountedAnimation.forEach((sprite) => {
        sprite.scale = yRem / 2;
        sprite.position.y = yRem * getInitialPositionRange(30, 45);
      });
    });
  }

  spawnAnimation = () => {
    this.queueAnimation.push(this.unmountedAnimation[0]);
    this.unmountedAnimation.splice(0, 1);
  };

  animate = () => {
    window.requestAnimationFrame(this.animate);
    this.background.drawBackground();
    this.queueAnimation.forEach((sprite, i) => {
      sprite.update();

      if (sprite.position.x >= window.innerWidth) {
        sprite.position.x = sprite.initialPosition;
        this.spawnAnimation();
        this.unmountedAnimation.push(sprite);
        this.queueAnimation.splice(i, 1);
      }
    });
  };

  render() {
    return (
      <div>
        <canvas
          ref={this.canvas}
          width={window.innerWidth}
          height={window.innerHeight}></canvas>
      </div>
    );
  }
}
export default Canvas;
