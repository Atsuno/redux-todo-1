import TYPE from './types'

export const showFilterTodo = (finish, unfinish) => ({
  type: TYPE.FILTER.TODO,
  payload: { finish, unfinish }
})