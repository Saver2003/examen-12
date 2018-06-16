import {FETCH_PHOTO_SUCCESS} from '../actions/actionTypes';

const initialState = {
  photo: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTO_SUCCESS:
      return {...state, photo: action.photo};
    default:
      return state;
  }
};

export default reducer;