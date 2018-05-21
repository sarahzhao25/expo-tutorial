const defaultState = [
  {
    user_email: 'a@b.com',
    message: 'Hello world!',
    isUser: false
  },
]

//action type creators
const ADD_MESSAGE = 'ADD_MESSAGE'

//action creators
export const addMessage = ({user_email, message}) => {
  return {
    type: ADD_MESSAGE,
    user_email,
    message,
    isUser: true
  }
}

const chat = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      let { user_email, message, isUser } = action;
      return [
        ...state,
        {
          user_email,
          message,
          isUser
        }
      ]
    default:
      return state
  }
}

export default chat
