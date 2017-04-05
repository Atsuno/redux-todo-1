import React from 'react'
import './assets/style.css'

const TodoItem = ({ id, text, finish, removeItem, toggleItem }) => (
  <div>
    <li>
      <span className={finish ? 'finish' : 'unfinish'} onClick={() => toggleItem(id)}>{text}</span>
      <button onClick={() => removeItem(id)}>x</button>
    </li>
  </div>
  )

export default TodoItem