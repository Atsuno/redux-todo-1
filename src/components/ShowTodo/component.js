import React, { PropTypes } from 'react'

const ShowTodo = ({ showFilterTodo }) => (
  <div>
    <button onClick={() => showFilterTodo(true, true)}>show all</button>
    <button onClick={() => showFilterTodo(false, true)}>show finish</button>
    <button onClick={() => showFilterTodo(true, false)}>show unfinish</button>
  </div>
  )

ShowTodo.propTypes = {
  showFilterTodo: PropTypes.func.isRequired
}

export default ShowTodo