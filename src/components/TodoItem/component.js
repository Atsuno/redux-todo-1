import React, { PropTypes } from 'react'
import './assets/style.css'

const TodoItem = ({ id, text, finish, removeItem, toggleItem }) => (
  <div>
    <li>
      <span className={finish ? 'finish' : 'unfinish'} onClick={() => toggleItem(id)}>{text}</span>
      <button onClick={() => removeItem(id)}>x</button>
    </li>
  </div>
  )
TodoItem.propTypes = {
  id: PropTypes.number,
  text: PropTypes.string,
  finish: PropTypes.bool,
  removeItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired
}
TodoItem.defaultProps = {
  id: 1,
  text: 'text',
  finish: true
}

export default TodoItem