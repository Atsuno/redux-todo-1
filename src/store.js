import { combineReducers } from 'redux'
import todos from './reducers/todos'

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
  ]
}

const rootReducer = combineReducers({
  todos
})

export default rootReducer