import {Component} from 'react'
import DenominationItem from '../DenominationItem/index'
import './index.css'

const denominationsList = [
      {
        id: 1,
        value: 50,
      },
      {
        id: 2,
        value: 100,
      },
      {
        id: 3,
        value: 200,
      },
      {
        id: 4,
        value: 500,
      },
    ]
    

class CashWithdrawal extends Component {
  state = {initialAmount: 2000}

  amountDeduction = value => {
    this.setState(prevState => ({
      initialAmount:
        prevState.initialAmount >= value
          ? prevState.initialAmount - value
          : prevState.initialAmount,
    }))
  }

  render() {
    const {initialAmount} = this.state

    console.log('Props received in CashWithdrawal:', this.props)

    return (
      <div >
        <div className="cashwithdrawal-inner-container">
          <div className="head-section">
            <div className="account-name-alphabet">T</div>
            <p className="main-heading">Yashwanth Thalka</p>
          </div>
          <div className="rupees-section">
            <div>
              <p className="your-balance-heading">Your Balance</p>
            </div>
            <div>
              <p className="amount">{initialAmount}</p>
              <p className="amount-description">In Rupees</p>
            </div>
          </div>
          <div className="widthdraw-section">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-money-para">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denomination-item-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                amountDeduction={this.amountDeduction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
