import { SET_FORM } from 'Constants';

export const setForm = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_FORM,
      payload: data,
    });
  };
};
