import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {startNum: 0, text: 'Count is Even'}

  generateRandomNumber = () => {
    return Math.floor(Math.random() * 101) // Generates a number between 0 and 100
  }

  changeRandomNum = () => {
    this.setState(prevState => {
      const randomIncrement = this.generateRandomNumber()
      const newNum = prevState.startNum + randomIncrement
      const newText = newNum % 2 === 0 ? 'Count is Even' : 'Count is Odd'
      return {
        startNum: newNum,
        text: newText,
      }
    })
  }

  render() {
    const {startNum, text} = this.state

    return (
        <div className="inner-todo-container">
          <h1>{`Count ${startNum}`}</h1>
          <p>{text}</p>
          <button
            type="button"
            className="increment-button"
            onClick={this.changeRandomNum}
          >
            Increment
          </button>
          <p className='description'>*Increase By Random Number Between 0 to 100</p>
        </div>
    )
  }
}

export default EvenOddApp