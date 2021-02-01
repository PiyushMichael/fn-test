import { SET_FORM, SET_NAV } from 'Constants';
import { combineReducers } from 'redux';

const INITIAL_FORM_STATE = {
  name: 'Piyush Michael',
};

const INITIAL_NAV_STATE = {
  screen: 'Home',
};

const formReducer = (state = INITIAL_FORM_STATE, action) => {
  switch (action.type) {
    case SET_FORM:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

const navReducer = (state = INITIAL_NAV_STATE, action) => {
  switch (action.type) {
    case SET_NAV:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  form: formReducer,
  nav: navReducer,
});
