import { connect } from 'react-redux'
import ChannelLog from '../Components/ChannelLog'

const mapStateToProps = (state, ownProps) => {
  return {
    channels: state.channels,
    navigate: ownProps.navigation.navigate
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ConnectedChannelLog = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelLog)

export default ConnectedChannelLog
