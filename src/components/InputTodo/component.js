import React, { Component } from 'react'

class InputTodo extends Component {
  state = {
    inputText: ''
  }

  eventChange = event => {
    this.setState({
      inputText: event.target.value
    })
  }

  eventEnter = event => {
    if (event.key === 'Enter' && this.state.inputText.length) {
      this.props.addInput(this.state.inputText)
      this.setState({
        inputText: ''
      })
    }
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="what would you to do?" value={this.state.inputText} onChange={this.eventChange} onKeyPress={this.eventEnter} />
      </div>
    )
  }
}

export default InputTodo