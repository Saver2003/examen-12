import axios from '../../axios-api';
import {push} from 'react-router-redux';
import {ADD_PHOTO_SUCCESS, FETCH_PHOTO_SUCCESS} from './actionTypes';



export const fetchPhotoSuccess = photo => {
  return {type: FETCH_PHOTO_SUCCESS, photo};
};

export const fetchPhoto = () => {
  return dispatch => {
    axios.get('/photo').then(
      response => dispatch(fetchPhotoSuccess(response.data))
    );
  }
};

export const addPhotoSuccess = () => {
  return {type: ADD_PHOTO_SUCCESS}
};

export const addPhoto = (photoData) => {
  return (dispatch, getState) => {
    const token = getState().users.user.token;
    const headers = {'AuthToken': token};

    return axios.post('/photo', photoData, {headers}).then(
      response => {
        dispatch(addPhotoSuccess());
        dispatch(push('/'));
      }
    );
  };
};