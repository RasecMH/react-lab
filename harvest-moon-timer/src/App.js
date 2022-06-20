import React, { Component } from 'react';
import Timer from './components/Timer/Timer';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import Mobilebg from './components/Mobilebg/Mobilebg';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='canvasComponent'>
          {
            window.innerWidth > 1000
          ? <Canvas />
          : <Mobilebg />
          }
          <div className='timerComponent'>
            <Timer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
