import { LOGIN } from './actions';

const initialState = {
  logged: false,
  username: 'admin',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return { ...state, logged: !state.Logged };
    }
    default:
      return { ...state };
  }
};

export default reducer;
