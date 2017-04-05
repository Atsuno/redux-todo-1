import { connect } from 'react-redux'
import ShowTodo from './component'
import { showFilterTodo } from '../../actions/filter'

const mapDispatchToProps = ({ showFilterTodo })

export default connect(null, mapDispatchToProps)(ShowTodo)