import TYPE from './types'

export const addInput = text => ({
  type: TYPE.TODO.ADD,
  payload: { text }
})

export const removeItem = id => ({
  type: TYPE.TODO.SUBTRACT,
  payload: { id }
})

export const toggleItem = id => ({
  type: TYPE.TODO.TOGGLE,
  payload: { id }
})

export const searchTodo = text => ({
  type: TYPE.SEARCH.TODO,
  payload: { text }
})