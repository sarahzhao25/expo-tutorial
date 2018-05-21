const defaultState = [
  {
    user_email: 'a@b.com',
    message: 'Hello world!',
    isUser: false,
    channelId: 1
  },
]

//action type creators
const ADD_MESSAGE = 'ADD_MESSAGE'

//action creators
export const addMessage = ({user_email, message}, channelId) => {
  return {
    type: ADD_MESSAGE,
    user_email,
    message,
    isUser: true,
    channelId
  }
}

const chat = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let { user_email, message, isUser, channelId } = action;
      return [
        ...state,
        {
          user_email,
          message,
          isUser,
          channelId
        }
      ]
    default:
      return state
  }
}

export default chat
