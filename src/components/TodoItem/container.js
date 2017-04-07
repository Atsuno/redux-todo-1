import { connect } from 'react-redux'
import TodoItem from './component'
import { removeItem, toggleItem } from '../../actions/todos'


const mapDispatchToProps = { removeItem, toggleItem }

export default connect(null, mapDispatchToProps)(TodoItem)