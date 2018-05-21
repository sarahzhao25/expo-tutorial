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

let id = 3

//action type creator
const ADD_CHANNEL = 'ADD_CHANNEL'

//action creator
export const addChannel = ({ name }) => {
  id++
  return {
    type: ADD_CHANNEL,
    name,
    id
  }
}

const channel = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CHANNEL:
      let { name, id } = action;
      return [
        ...state,
        {
          id,
          name
        }
      ]
    default:
      return state
  }
}

export default channel
