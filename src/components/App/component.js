import React from 'react'
import logo from './assets/logo.svg'
import InputTodo from '../InputTodo'
import TodoList from '../TodoList'
import ShowTodo from '../ShowTodo'
import './assets/style.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <div className="App-intro">
      vCode Dev-Tools<br /><br />
      <InputTodo />
      <ShowTodo />
      <TodoList />
    </div>
  </div>
)

export default App
