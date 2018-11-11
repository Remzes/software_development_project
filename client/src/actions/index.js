import {loadAllImages} from "../fixures/index";
import axios from 'axios';
import {FETCH_USER, FETCH_CONFIG, SELECT_CONFIG, FETCH_SURVEYS} from './types';

//Authenticate user to the system and get his info
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload: res.data});
};
