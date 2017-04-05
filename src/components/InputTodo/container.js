import { connect } from 'react-redux'
import InputTodo from './component'
import { addInput } from '../../actions/todos'

const mapDispatchToProps = { addInput }

export default connect(null, mapDispatchToProps)(InputTodo)