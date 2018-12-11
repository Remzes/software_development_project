const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_USERS':
      return { ...state, users: payload }
    default:
      return state
  }
}