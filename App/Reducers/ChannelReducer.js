const defaultState = [
  {
    id: 1,
    name: 'All About Cats'
  },
  {
    id: 2,
    name: 'All About Dogs'
  },
  {
    id: 3,
    name: 'All About Frisbees'
  }
]

//action type creator
const ADD_CHANNEL = 'ADD_CHANNEL'

//action creator
const addChannel = channel => {
  return {
    type: ADD_CHANNEL,
    channel
  }
}

const channel = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      return [...state, action.channel]
    default:
      return state
  }
}

export default channel
