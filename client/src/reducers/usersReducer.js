const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_USERS':
      return { ...state, users: payload }
    case 'DELETE_USER':
      return { ...state, users: state.users.filter(user => user.googleId !== payload) }
    default:
      return state
  }
}