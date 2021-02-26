export const LOGIN = 'LOGIN';
export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const TOGGLE_NAV_MENU = 'TOGGLE_NAV_MENU';
export const TOGGLE_HEADER = 'TOGGLE_HEADER';
export const TOGGLE_FOOTER = 'TOGGLE_FOOTER';
export const SET_FOOTER_ID = 'SET_FOOTER_ID';

export const login = () => ({ type: LOGIN });
export const toggleSearch = () => ({ type: TOGGLE_SEARCH });
export const toggleNavMenu = () => ({ type: TOGGLE_NAV_MENU });
export const toggleHeader = () => ({ type: TOGGLE_HEADER });
export const toggleFooter = () => ({ type: TOGGLE_FOOTER });
export const setFooterId = (payload) => ({ type: SET_FOOTER_ID, payload });
