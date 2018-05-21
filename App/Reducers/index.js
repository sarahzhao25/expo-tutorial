import { combineReducers } from 'redux'
import ChatReducer from './ChatReducer'

const simpleChatApp = combineReducers({
  chats: ChatReducer,
})

export default simpleChatApp
