import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from './createDataContext';
import authApi from '../api/auth';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'addError':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { isSignedIn: true, errorMessage: '', token: action.payload };
    case 'signout':
      return { isSignedIn: false, token: null };
  }
};

// login
const signin = (dispatch) => {
  return async ({ email, password }) => {
    // make api request to sign in with email and password
    // if request succeds, modify our state and say we are authenticated
    // if fails, show some error message
    try {
      const response = await authApi.post('/signin', { email, password });
      dispatch({
        type: 'signin',
        payload: response.data.token,
      });
      await AsyncStorage.setItem('token', response.data.token);
      navigate('mainFlow', {});
    } catch (err) {
      dispatch({
        type: 'addError',
        payload: 'Something went wrong with sign in.',
      });
      console.log(err);
    }
  };
};

// logout
const signout = (dispatch) => {
  return async () => {
    // modify state so we are signed out
    try {
      await AsyncStorage.removeItem('token');
      dispatch({
        type: 'signout',
      });
      navigate('loginFlow', {});
    } catch (err) {
      console.log(err);
    }
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout },
  { isSignedIn: false, errorMessage: '', token: null }
);
