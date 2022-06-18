import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component {
  constructor() {
    super();
    this.canvas = React.createRef();
    this.background = new Image();
    this.background.src = require('./img/background2.png');
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.background, 0, 0, window.innerWidth, window.innerHeight);
  }

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
