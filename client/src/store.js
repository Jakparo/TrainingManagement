import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

// import { productListReducer, productDetailsReducer, 
//         productSaveReducer, productDeleteReducer } 
// from './reducers/productReducers';

import { trainerListReducer, trainerDetailsReducer, trainerSaveReducer, trainerDeleteReducer } from './reducers/adminReducers'

import { userSigninReducer, userUpdateReducer } from './reducers/userReducers';




const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { userSignin:{userInfo}};
const reducer = combineReducers({
    trainerList: trainerListReducer,
    trainerDetails: trainerDetailsReducer,
    trainerSave: trainerSaveReducer,
    trainerDelete: trainerDeleteReducer,
    userSignin: userSigninReducer,
    userUpdate: userUpdateReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers((applyMiddleware(thunk))))

export default store;