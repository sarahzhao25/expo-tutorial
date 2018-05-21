import { combineReducers } from 'redux'
import ChatReducer from './ChatReducer'
import ChannelReducer from './ChannelReducer'

const simpleChatApp = combineReducers({
  chats: ChatReducer,
  channels: ChannelReducer
})

export default simpleChatApp
export * from './ChatReducer'
export * from './ChannelReducer'
