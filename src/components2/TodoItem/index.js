import './index.css'

const TodoItem = props => {
  const {eachItem, deleteItem} = props
  const {id, title} = eachItem
  const onDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li className="todo-item">
      <p className='todo-item-heading'>{title}</p>
      <button type="button" className="delete-button" onClick={onDeleteItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem