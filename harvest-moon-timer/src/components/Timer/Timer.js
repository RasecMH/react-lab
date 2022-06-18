import React, { Component } from 'react';
import './Timer.css';

const INITIAL_TIME_IN_SECONDS = 5 * 60;

class Timer extends Component {
  state = {
    secondsAmount: INITIAL_TIME_IN_SECONDS,
    setInputMinutes: 1,
    timerStarted: false,
    isTimerRunnig: false,
  };

  handleSetMinute = (e) => {
    if (e.target.name === 'decrease' && this.state.setInputMinutes > 1) {
      return this.setState((prevState) => ({
        setInputMinutes: prevState.setInputMinutes - 1,
        timerStarted: false,
        isTimerRunnig: false,
      }));
    }
    if (e.target.name === 'increase') {
      return this.setState((prevState) => ({
        setInputMinutes: prevState.setInputMinutes + 1,
        timerStarted: false,
        isTimerRunnig: false,
      }));
    }
    if (e.target.name === 'inputMinute') {
      if (isNaN(e.target.value)) {
        return this.setState({
          setInputMinutes: 1,
          timerStarted: false,
          isTimerRunnig: false,
        });
      }
      return this.setState({
        setInputMinutes:
          e.target.value && e.target.value > 0 ? parseInt(e.target.value) : 1,
        timerStarted: false,
        isTimerRunnig: false,
      });
    }
    return;
  };

  handleTimer = () => {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        secondsAmount: prevState.secondsAmount - 1,
      }));
    }, 1000);
  };

  handleSubmit = (e) => {
    const { setInputMinutes, timerStarted, isTimerRunnig } = this.state;
    clearInterval(this.intervalId);
    if (isTimerRunnig) {
      this.setState({ isTimerRunnig: false });
      return this.handleTimer();
    }
    if (!timerStarted) {
      this.setState({
        secondsAmount: setInputMinutes * 60,
        timerStarted: true,
      });
      this.handleTimer();
    } else {
      clearInterval(this.intervalId);
      this.setState((prevState) => ({
        secondsAmount: prevState.secondsAmount,
        isTimerRunnig: true,
      }));
    }
  };

  handleResetTimer = () => {
    clearInterval(this.intervalId);
    this.setState({
      secondsAmount: 0,
      timerStarted: false,
      isTimerRunnig: false,
    });
  };

  componentDidUpdate() {
    const { secondsAmount, timerStarted } = this.state;
    if (secondsAmount === 0 && timerStarted) {
      this.handleResetTimer();
    }
  }

  render() {
    const { setInputMinutes, secondsAmount, timerStarted, isTimerRunnig } =
      this.state;
    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;
    return (
      <div className='timerContainer'>
        <div className='screen'>
          <span>{String(minutes).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(seconds).padStart(2, '0')}</span>
        </div>
        <div className='inputContainer'>
          <button
            className='changeMinuteBtn decrease'
            name='decrease'
            type='button'
            onClick={this.handleSetMinute}></button>
          <input
            name='inputMinute'
            id='inputMinute'
            value={setInputMinutes}
            onChange={this.handleSetMinute}
            type='number'></input>
          <button
            className='changeMinuteBtn increase'
            name='increase'
            type='button'
            onClick={this.handleSetMinute}></button>
        </div>
        <div className='submitContainer'>
          <button
            className='submitBtn'
            type='button'
            onClick={this.handleSubmit}>
            {timerStarted && !isTimerRunnig ? (
              <img
                className='btnImg'
                alt='playbutton'
                src={require('./img/PauseButton.png')}
              />
            ) : (
              <img
                className='btnImg'
                alt='playbutton'
                src={require('./img/PlayButton.png')}
              />
            )}
          </button>
          <button
            className='submitBtn'
            type='button'
            onClick={this.handleResetTimer}>
            <img
              className='btnImg'
              alt='playbutton'
              src={require('./img/ResetButton.png')}
            />
          </button>
          <button className='submitBtn' type='button'>
            <img
              className='btnImg'
              alt='playbutton'
              src={require('./img/SoundButton.png')}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
