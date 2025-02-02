import './index.css'

const DenominationItem = props => {
  const {eachItem, amountDeduction} = props
  const {value} = eachItem

  const demolishAmount = () => {
    amountDeduction(value)
  }
  return (
    <li className="denomination-item">
      <button
        type="button"
        className="button"
        onClick={() => demolishAmount(value)}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
