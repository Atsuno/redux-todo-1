import { initialStore } from '../store'
import TYPE from '../actions/types'

const createNewTodo = (todos, text) => ({
  id: todos.length ? todos[todos.length - 1].id + 1 : 1,
  text,
  finish: false
})

export default (todos = initialStore.todos, action) => {
  switch (action.type) {
    case TYPE.TODO.ADD: {
      return [...todos, createNewTodo(todos, action.payload.text)]
    }
    case TYPE.TODO.SUBTRACT: {
      return todos.filter(todo => todo.id !== action.payload.id)
    }
    case TYPE.TODO.TOGGLE: {
      return todos.map(todo => todo.id === action.payload.id ? { ...todo, finish: !todo.finish } : todo)
    }
    case TYPE.SEARCH.TODO: {
      return todos.map(todo => todo.id === action.payload.id ? { ...todo, text: todo.text.includes(event.target.value) } : todo)
    }
    default: {
      return todos
    }
  }
}