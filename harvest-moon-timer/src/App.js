import React, { Component } from 'react';
import Timer from './components/Timer/Timer';
import './App.css';
import Canvas from './components/Canvas/Canvas';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='canvasComponent'>
          <Canvas />
          <div className='timerComponent'>
            <Timer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
