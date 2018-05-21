import { connect } from 'react-redux'
import ChatLog from '../Components/ChatLog'
import ChatLogFlatlist from '../Components/ChatLogFlatlist'

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
)(ChatLogFlatlist)

export default ConnectedChatLog
