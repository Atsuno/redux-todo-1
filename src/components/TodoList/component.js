import React, { PropTypes } from 'react'
import TodoItem from '../TodoItem'

const TodoList = ({ todos, showTodo }) => (
  <ul>
    {
      todos.filter(todo => (todo.finish && showTodo.finish) || (!todo.finish && showTodo.unfinish))
        .map(todo => <TodoItem key={todo.id} {...todo} />)
    }
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      finish: PropTypes.bool.isRequired
    })
  ).isRequired,
  showTodo: PropTypes.objectOf(
    PropTypes.bool.isRequired
  ).isRequired
}

export default TodoList
