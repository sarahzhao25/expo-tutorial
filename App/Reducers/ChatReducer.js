const defaultState = [
  {
    user_email: 'a@b.com',
    message: 'Hello world!',
  },
]


const chat = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      let { user_email, message } = action;
      return [
        ...state,
        {
          user_email,
          message,
        }
      ]
    default:
      return state
  }
}

export default chat
