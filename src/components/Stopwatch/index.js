import {Component} from 'react'

import './index.css'

const initialState = {secondsTimer: 0, minutesTimer: 0}

class Stopwatch extends Component {
  state = initialState

  onStartTimer = () => {
    this.intervalId = setInterval(this.updateSeconds, 1000)
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onStopTimer = () => {
    this.clearTimerInterval()
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  getTimerValue = () => {
    const {secondsTimer, minutesTimer} = this.state
    const updatedSec = secondsTimer % 60
    const updatedMin = minutesTimer + parseInt(secondsTimer / 60)

    const stringifiedSeconds =
      updatedSec > 9 ? `${updatedSec}` : `0${updatedSec}`
    const stringifiedMinutes =
      updatedMin > 9 ? `${updatedMin}` : `0${updatedMin}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  updateSeconds = () => {
    this.setState(prevState => ({
      secondsTimer: prevState.secondsTimer + 1,
    }))
  }

  render() {
    return (
      <div className="app-container">
        <div className="stopwatch-timer-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="timer">{this.getTimerValue()}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-btn btn"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-btn btn"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-btn btn"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
