import { connect } from 'react-redux'
import ChatLog from '../Components/ChatLog'


const mapStateToProps = state => {
  return {
    chats: state.chats,
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
