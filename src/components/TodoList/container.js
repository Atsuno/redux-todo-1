import { connect } from 'react-redux'
import TodoItem from './component'

const mapStateToProps = state => ({
  todos: state.todos,
  filter: state.filter
})

export default connect(mapStateToProps)(TodoItem)