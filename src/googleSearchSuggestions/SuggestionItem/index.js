import './index.css'

const SuggestionItem = props => {
  const {eachItem, changeText} = props
  const {suggestion} = eachItem
  const onChangeTextInput = () => {
    changeText(suggestion)
  }

  return (
    <li className="Suggestion-list-item">
      <p className='google-suggestion'>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="suggestion-arrow-icon"
        className="arrow-icon"
        onClick={() => onChangeTextInput(suggestion)}
      />
    </li>
  )
}

export default SuggestionItem