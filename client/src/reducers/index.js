import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import authReducer from './authReducer';
import initialConfiguration from './initialConfiguration';
import surveysReducer from './surveysReducer';
import usersReducer from './usersReducer'
import choseConfig from './choseConfig';

export default combineReducers({
    auth: authReducer,
    initialConfiguration: initialConfiguration,
    config: choseConfig,
    surveys: surveysReducer,
    users: usersReducer,
    form: reduxForm
});