import React from 'react'
import { View, StyleSheet } from 'react-native'
import ConnectedChatLog from '../Containers/ConnectedChatLog'
import ChatMessageForm from './ChatMessageForm'

const SingleChat = () => (
  <View style={styles.container}>
    <ConnectedChatLog />
    <ChatMessageForm />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SingleChat
