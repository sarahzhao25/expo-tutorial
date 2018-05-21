import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createStackNavigator } from 'react-navigation'

import ConnectedChatLog from './Containers/ConnectedChatLog'
import SimpleChatApp from './Reducers'
import SimpleChatSaga from './Sagas'
import ChatMessageForm from './Containers/ConnectedChatMessageForm'
import ConnectedChannelLog from './Containers/ConnectedChannelLog'
import SingleChat from './Components/SingleChat'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  SimpleChatApp,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(SimpleChatSaga)

const RootNavigator = createStackNavigator({
  Home: { screen: ConnectedChannelLog },
  SingleChat: { screen: SingleChat }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
