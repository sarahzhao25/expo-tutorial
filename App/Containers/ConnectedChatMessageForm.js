import { connect } from 'react-redux'
import ChatMessageForm from '../Components/ChatMessageForm'
import { addMessage, changeCurrentUser } from '../Reducers'

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: messageInfo => {
      const { user_email } = messageInfo
      dispatch(changeCurrentUser({ user_email }))
      dispatch(addMessage(messageInfo, ownProps.channelId))
    }
  }
}

const connectedChatMessageForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatMessageForm)

export default connectedChatMessageForm
