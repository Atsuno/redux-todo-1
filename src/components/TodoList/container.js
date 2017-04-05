import { connect } from 'react-redux'
import TodoItem from './component'

const mapStateToProps = state => ({
  todos: state.todos,
  showTodo: state.showTodo
})

export default connect(mapStateToProps)(TodoItem)