import TYPE from './types'

export const showFilterTodo = (finish, unfinish) => ({
  type: TYPE.SWITCH.TODO,
  payload: { finish, unfinish }
})