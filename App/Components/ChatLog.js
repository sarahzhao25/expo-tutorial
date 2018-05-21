import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import ChatMessage from './ChatMessage'

const ChatLog = ({ chats }) => {
  let i = 0

  return (
    <View style={{flex: 1, flexDirection:'column', width: '100%'}} >
      {chats.map(chatMessage => {
        i = i + 1
        return (
          <ChatMessage key={`chat${i}`} chatMessage={chatMessage} />
        )
      })}
    </View>
  )
}

ChatLog.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      user_email: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default ChatLog

