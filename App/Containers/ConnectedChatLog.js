import { connect } from 'react-redux'
import ChatLog from '../Components/ChatLog'

const mapStateToProps = (state, ownProps) => {
  return {
    chats: state.chats.filter(chat => Number(chat.channelId) === Number(ownProps.channelId)),
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const ConnectedChatLog = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatLog)

export default ConnectedChatLog
