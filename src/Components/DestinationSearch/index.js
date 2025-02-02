import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      destinationsList: props.destinationsList,
    }
  }

  changeDestinationList = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText, destinationsList} = this.state

    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(inputText.toLowerCase()),
    )

    return (
        <div className="destinationSearch-bg-container">
          <h1 className="destinationSearch-main-heading">Destination Search</h1>
          <div className="inputSearch-bar">
            <input
              type="search"
              className="input-bar"
              placeholder="search"
              onChange={this.changeDestinationList}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search-icon"
              className="search-icon"
            />
          </div>
          <div className="items-container">
            {searchResults.length === 0 ? <p className='nothing-toe-show-text'>There is nothing to show</p> : (searchResults.map(eachItem => (
              <DestinationItem key={eachItem.id} eachItem={eachItem} />
            )))}
            {/* {searchResults.map(eachItem => (
              <DestinationItem key={eachItem.id} eachItem={eachItem} />
            ))} */}
          </div>
        </div>
    )
  }
}

export default DestinationSearch
