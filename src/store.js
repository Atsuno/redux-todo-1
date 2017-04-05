import { combineReducers } from 'redux'
import todos from './reducers/todos'
import showTodo from './reducers/filter'

export const initialStore = {
  todos: [
    {
      id: 1,
      text: 'text1',
      finish: true
    },
    {
      id: 2,
      text: 'text2',
      finish: false
    },
    {
      id: 3,
      text: 'text3',
      finish: true
    }
  ],
  showTodo: {
    finish: true,
    unfinish: true
  }
}

const rootReducer = combineReducers({
  todos,
  showTodo
})

export default rootReducer