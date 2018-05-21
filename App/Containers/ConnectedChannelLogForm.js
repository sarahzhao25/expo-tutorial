import { connect } from 'react-redux'
import ChannelLogForm from '../Components/ChannelLogForm'
import { addChannel } from '../Reducers'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (name) => dispatch(addChannel(name))
  }
}

const ConnectedChannelLogForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelLogForm)

export default ConnectedChannelLogForm
