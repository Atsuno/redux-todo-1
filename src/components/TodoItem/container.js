import { connect } from 'react-redux'
import TodoItem from './component'
import { removeItem, toggleItem } from '../../actions/todos'

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = { removeItem, toggleItem }

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem)