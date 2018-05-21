import { connect } from 'react-redux'
import ChatMessageForm from '../Components/ChatMessageForm'
import { addMessage } from '../Reducers'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (messageInfo) => dispatch(addMessage(messageInfo, ownProps.channelId))
  }
}

const connectedChatMessageForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatMessageForm)

export default connectedChatMessageForm
