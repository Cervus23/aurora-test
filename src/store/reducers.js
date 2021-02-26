import {
  LOGIN,
  TOGGLE_SEARCH,
  TOGGLE_HEADER,
  TOGGLE_FOOTER,
  SET_FOOTER_ID,
  TOGGLE_NAV_MENU,
} from './actions';

const initialState = {
  logged: false,
  username: 'admin',
  showSearch: false,
  showNavMenu: false,
  activateHeader: false,
  activateFooter: false,
  footerId: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN: {
      return { ...state, logged: true };
    }
    case TOGGLE_SEARCH: {
      return { ...state, showSearch: !state.showSearch };
    }
    case TOGGLE_NAV_MENU: {
      return { ...state, showNavMenu: !state.showNavMenu };
    }
    case TOGGLE_HEADER: {
      return { ...state, activateHeader: !state.activateHeader };
    }
    case TOGGLE_FOOTER: {
      return { ...state, activateFooter: !state.activateFooter };
    }
    case SET_FOOTER_ID: {
      return { ...state, footerId: payload };
    }
    default:
      return { ...state };
  }
};

export default reducer;
