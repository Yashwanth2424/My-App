import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem/index'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {reqTodosList: initialTodosList}

  deleteItem = id => {
    const {reqTodosList} = this.state
    const finalTodoList = reqTodosList.filter(each => each.id !== id)
    this.setState({reqTodosList: finalTodoList})
  }

  render() {
    const {reqTodosList} = this.state
    return (
      <div className='todo-app-bg-container'>
        <div className="todo-app-inner-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className='todo-list-items'>
            {reqTodosList.length === 0 ? <p className='Empty-todos-text'>Empty Todos</p> : (reqTodosList.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                eachItem={eachItem}
                deleteItem={this.deleteItem}
              />
            )))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos