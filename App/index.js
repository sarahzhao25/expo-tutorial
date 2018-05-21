import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ConnectedChatLog from './Containers/ConnectedChatLog'
import SimpleChatApp from './Reducers'
import SimpleChatSaga from './Sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  SimpleChatApp,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(SimpleChatSaga)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
           <ConnectedChatLog />
         </View>
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
