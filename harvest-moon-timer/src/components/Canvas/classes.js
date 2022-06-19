export default class Sprite {
  constructor({
    position,
    speed,
    imageSrc,
    image,
    scale = 1,
    framesMax = 1,
    sprites,
    ctx,
    initialPosition,
    initialAnimation,
    size,
    stopPoint,
  }) {
    this.position = position;
    this.speed = speed;
    this.image = image;
    this.scale = scale;
    this.framesMax = framesMax;
    this.framesCurrent = 0;
    this.framesElapsed = 0;
    this.framesHold = 25;
    this.sprites = sprites;
    this.ctx = ctx;
    this.size = size;
    this.initialPosition = initialPosition;
    this.initialAnimation = initialAnimation;
    this.stopPoint = stopPoint;
  }

  draw() {
    if (!this.ctx) return;

    this.ctx.drawImage(
      this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0,
      this.image.width / this.framesMax,
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / this.framesMax) * this.scale,
      this.image.height * this.scale
    );
  }

  drawBackground() {
    if (!this.ctx) return;

    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  animateFrames() {
    this.framesElapsed += 1;

    if (this.framesElapsed % this.framesHold === 0) {
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent += 1;
      } else {
        this.framesCurrent = 0;
      }
    }
  }

  update() {
    this.draw();
    this.animateFrames();

    // if (this.position.x === this.stopPoint) {
    //   this.switchSprite('idle');
    //   this.position.x += 1;
    //   setTimeout(() => {
    //     this.switchSprite('run');
    //   }, 3000);
    // }

    // if (this.position.x >= window.innerWidth) {
    //   this.position.x = this.initialPosition;
    //   this.switchSprite(this.initialAnimation);
    // }

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }

  switchSprite(sprite) {
    switch (sprite) {
      case 'idle':
        if (this.image !== this.sprites.idle.image) {
          this.image = this.sprites.idle.image;
          this.framesMax = this.sprites.idle.framesMax;
          this.framesCurrent = 0;
          this.speed.x = 0;
        }
        break;
      case 'run':
        if (this.image !== this.sprites.run.image) {
          this.image = this.sprites.run.image;
          this.framesMax = this.sprites.run.framesMax;
          this.framesCurrent = 0;
          this.speed.x = 5;
        }
        break;
      case 'moving':
        if (this.image !== this.sprites.moving.image) {
          this.image = this.sprites.moving.image;
          this.framesMax = this.sprites.moving.framesMax;
          this.framesCurrent = 0;
          this.speed.x = 2;
        }
        break;
      default:
        break;
    }
  }
}
