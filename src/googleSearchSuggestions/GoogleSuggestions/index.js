import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
  {id: 7, suggestion: 'Price of Gold Today'},
  {id: 8, suggestion: 'Cricket Today'},
  {id: 9, suggestion: 'Virat Kohli Records'},
]

class GoogleSuggestions extends Component {
  state = {inputText: ''}

  getInputText = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state

    const filteredList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(inputText.toLowerCase()),
    )
    const changeText = suggestion => {
      this.setState({inputText: suggestion})
    }

    return (
      <div className="GoogleSuggestions-bg-container">
        <div className="GoogleSuggestions-inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            className="google-img"
            alt="google logo"
          />
          <div className="suggestions-container">
            <div className="search-bar-container">
              <img
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon-img"
              />
              <input
                type="search"
                className="GoogleSuggestions-input-search-bar"
                placeholder="Search Google"
                onChange={this.getInputText}
                value={inputText}
              />
            </div>
            <ul className="suggestions-list">
              {filteredList.map(each => (
                <SuggestionItem
                  changeText={changeText}
                  eachItem={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
