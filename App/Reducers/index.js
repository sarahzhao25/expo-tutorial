import { combineReducers } from 'redux'
import ChatReducer from './ChatReducer'
import ChannelReducer from './ChannelReducer'
import CurrentUserReducer from './CurrentUserReducer'

const simpleChatApp = combineReducers({
  chats: ChatReducer,
  channels: ChannelReducer,
  currentUser: CurrentUserReducer
})

export default simpleChatApp
export * from './ChatReducer'
export * from './ChannelReducer'
export * from './CurrentUserReducer'
