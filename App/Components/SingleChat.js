import React from 'react'
import { View, StyleSheet } from 'react-native'
import ConnectedChatLog from '../Containers/ConnectedChatLog'
import ConnectedChatMessageForm from '../Containers/ConnectedChatMessageForm'

const SingleChat = ({ navigation }) => {
  const { channelId } = navigation.state.params
  return (
  <View style={styles.container}>
    <ConnectedChatLog channelId={ channelId } />
    <ConnectedChatMessageForm channelId={ channelId } />
  </View>
)}

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
