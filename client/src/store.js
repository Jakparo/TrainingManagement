import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import { trainerListReducer, trainerDetailsReducer, trainerSaveReducer, trainerDeleteReducer,
        staffListReducer, staffDetailsReducer, staffSaveReducer, staffDeleteReducer 
    } from './reducers/adminReducers'

import { userSigninReducer, userUpdateReducer } from './reducers/userReducers';


const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { userSignin:{userInfo}};
const reducer = combineReducers({
    trainerList: trainerListReducer,
    trainerDetails: trainerDetailsReducer,
    trainerSave: trainerSaveReducer,
    trainerDelete: trainerDeleteReducer,
    staffList: staffListReducer,
    staffDetails: staffDetailsReducer,
    staffSave: staffSaveReducer,
    staffDelete: staffDeleteReducer,
    userSignin: userSigninReducer,
    userUpdate: userUpdateReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers((applyMiddleware(thunk))))

export default store;