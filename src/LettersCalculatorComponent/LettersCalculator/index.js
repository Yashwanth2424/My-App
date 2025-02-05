import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  getCountLetters = event => {
    const char = event.target.value
    this.setState({count: char.length})
  }

  render() {
    const {count} = this.state

    return (
      <div >
        <div className="calculators-letters-bg-container">
          <h1 className="calculator-main-heading">
              Calculate the Letters you enter
            </h1>
          <div className="calculators-letters-inner-container">
          <div className="calculators-letters-input-section">
            <label className="pharse-description" htmlFor="phraseInput">Enter the phrase</label>
            <input
              id="phraseInput"
              placeholder="Enter the Phrase"
              className="input-text"
              onChange={this.getCountLetters}
            />
            <div className="letters-counter-section">
              <p className='counter-section-count'>No.of Letters: {count}</p>
            </div>
          </div>
          <div className='calculators-letters-image-section'>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="calculator-section-img"
            />
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator