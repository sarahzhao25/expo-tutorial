const defaultState = {
  user_email: '',
  avatar: ''
}

//action type creator
const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER'
const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER'

//action creator
export const changeCurrentUser = ({ user_email, avatar }) => {
  return {
    type: CHANGE_CURRENT_USER,
    user_email,
    avatar
  }
}

export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER
  }
}

const currentUser = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_USER: {
      const { user_email, avatar } = action
      return {
        user_email,
        avatar
      }
    }
    case CLEAR_CURRENT_USER: {
      return {
        user_email: '',
        avatar: ''
      }
    }
    default:
      return state
  }
}

export default currentUser
