import './index.css'
import {Component} from 'react'

class Counter extends Component  {
      state = {count:0}
      onIncrement = () => {
           this.setState((prevState) => ({count : prevState.count + 1}))
      }

      onDecrement = () => {
            this.setState((prevState) => ({count : prevState.count - 1}))
       }

      render(){
            const {count} = this.state;
            return (
                  <div className='counter-container'>
                        <h1 className='counter-heading'>Counter</h1>
                        <h2 className='counter'>{count}</h2>
                        <div className='buttons-container'>
                              <button className='counter-button' onClick={this.onIncrement}>Increase</button>
                              <button className='counter-button' onClick={this.onDecrement}>Decrease</button>
                        </div>
                  </div>
            )
      }
      
}

export default Counter