import axios from '../../axios-api';
import {push} from 'react-router-redux';
import {ADD_PHOTO_SUCCESS, FETCH_PHOTO_SUCCESS} from './actionTypes';

export const addPhotoSuccess = () => {
  return {type: ADD_PHOTO_SUCCESS}
};

export const addPhoto = photoData => {
  return dispatch => {
    return axios.post('/photo', photoData).then(
      response => {
        dispatch(addPhotoSuccess());
        dispatch(push('/'));
      }
    );
  };
};

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