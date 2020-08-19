import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';

import { trainerListReducer, trainerDetailsReducer, trainerSaveReducer, trainerDeleteReducer,
        staffListReducer, staffDetailsReducer, staffSaveReducer, staffDeleteReducer,
    } from './reducers/adminReducers'

import {traineeListReducer, traineeDetailsReducer, traineeSaveReducer, traineeDeleteReducer, 
        categoryListReducer, categoryDetailsReducer, categorySaveReducer, categoryDeleteReducer,
        courseListReducer, courseDetailsReducer, courseSaveReducer, courseDeleteReducer,
        topicListReducer, topicDetailsReducer, topicSaveReducer, topicDeleteReducer} from './reducers/staffReducers'

import { userSigninReducer, userUpdateReducer } from './reducers/userReducers';


const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { userSignin:{userInfo}};
const reducer = combineReducers({
//trainer
    trainerList: trainerListReducer,
    trainerDetails: trainerDetailsReducer,
    trainerSave: trainerSaveReducer,
    trainerDelete: trainerDeleteReducer,
//staff
    staffList: staffListReducer,
    staffDetails: staffDetailsReducer,
    staffSave: staffSaveReducer,
    staffDelete: staffDeleteReducer,
//user
    userSignin: userSigninReducer,
    userUpdate: userUpdateReducer,
//trainee
    traineeList: traineeListReducer,
    traineeDetails: traineeDetailsReducer,
    traineeSave: traineeSaveReducer,
    traineeDelete: traineeDeleteReducer,
//category
    categoryList: categoryListReducer,
    categoryDetails: categoryDetailsReducer,
    categorySave: categorySaveReducer,
    categoryDelete: categoryDeleteReducer,
// course
    courseList: courseListReducer,
    courseDetails: courseDetailsReducer,
    courseSave: courseSaveReducer,
    courseDelete: courseDeleteReducer,
// topic
    topicList: topicListReducer,
    topicDetails: topicDetailsReducer,
    topicSave: topicSaveReducer,
    topicDelete: topicDeleteReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers((applyMiddleware(thunk))))

export default store;