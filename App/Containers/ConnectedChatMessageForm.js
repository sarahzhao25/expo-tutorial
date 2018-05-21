import { connect } from 'react-redux'
import ChatMessageForm from '../Components/ChatMessageForm'
import { addMessage } from '../Reducers'

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (messageInfo) => dispatch(addMessage(messageInfo))
  }
}

const connectedChatMessageForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatMessageForm)

export default connectedChatMessageForm
