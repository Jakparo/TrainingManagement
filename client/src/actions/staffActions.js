import axios from 'axios';
import Axios from "axios";

import {TRAINEE_LIST_REQUEST, TRAINEE_LIST_SUCCESS, TRAINEE_LIST_FAIL,
        TRAINEE_DETAILS_REQUEST, TRAINEE_DETAILS_SUCCESS, TRAINEE_DETAILS_FAIL,
        TRAINEE_SAVE_REQUEST, TRAINEE_SAVE_SUCCESS, TRAINEE_SAVE_FAIL,
        TRAINEE_DELETE_REQUEST, TRAINEE_DELETE_SUCCESS, TRAINEE_DELETE_FAIL, 
    } from '../constants/staffContants';

import{ CATEGORY_DELETE_FAIL, CATEGORY_DELETE_SUCCESS, CATEGORY_DELETE_REQUEST,
        CATEGORY_SAVE_FAIL, CATEGORY_SAVE_SUCCESS, CATEGORY_SAVE_REQUEST, 
        CATEGORY_DETAILS_FAIL, CATEGORY_DETAILS_SUCCESS, CATEGORY_DETAILS_REQUEST, 
        CATEGORY_LIST_FAIL, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_REQUEST
    } from '../constants/staffContants';

import{ COURSE_DELETE_FAIL, COURSE_DELETE_SUCCESS, COURSE_DELETE_REQUEST,
    COURSE_SAVE_FAIL, COURSE_SAVE_SUCCESS, COURSE_SAVE_REQUEST, 
    COURSE_DETAILS_FAIL, COURSE_DETAILS_SUCCESS, COURSE_DETAILS_REQUEST, 
    COURSE_LIST_FAIL, COURSE_LIST_SUCCESS, COURSE_LIST_REQUEST,
    COURSE_CATEGORY_REQUEST, COURSE_CATEGORY_SUCCESS, COURSE_CATEGORY_FAIL 
} from '../constants/staffContants';

import{ TOPIC_DELETE_FAIL, TOPIC_DELETE_SUCCESS, TOPIC_DELETE_REQUEST,
    TOPIC_SAVE_FAIL, TOPIC_SAVE_SUCCESS, TOPIC_SAVE_REQUEST, 
    TOPIC_DETAILS_FAIL, TOPIC_DETAILS_SUCCESS, TOPIC_DETAILS_REQUEST, 
    TOPIC_LIST_FAIL, TOPIC_LIST_SUCCESS, TOPIC_LIST_REQUEST
} from '../constants/staffContants';

//COURSE CATEGORY
const courseCategoryLists = (categoryId) => async (dispatch) =>{
    try{
        dispatch({type: COURSE_CATEGORY_REQUEST});
        const {data} = await axios.get("/api/course/category/" + categoryId);
        dispatch({type: COURSE_CATEGORY_SUCCESS, payload:data});
    } catch (error){
        dispatch({type: COURSE_CATEGORY_FAIL, payload: error.message});
    }
}

// TOPIC
const listTopics = (name = '', searchKeyword ='') => async (dispatch) => {
    try {
        dispatch({ type: TOPIC_LIST_REQUEST });
        const { data } = await axios.get("/api/topics?name=" 
        + name + "&searchKeyword=" + searchKeyword);
        dispatch({ type: TOPIC_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: TOPIC_LIST_FAIL, payload: error.message });
    }
}

const detailsTopic = (topicId) => async (dispatch) => {
    try{
        dispatch({type: TOPIC_DETAILS_REQUEST, payload: topicId});
        const{data} = await axios.get("/api/topics/" + topicId);
        dispatch({type: TOPIC_DETAILS_SUCCESS, payload: data});
    } catch(error){
        dispatch({type:TOPIC_DETAILS_FAIL, payload: error.message});
    }
}

const saveTopic = (topic) => async (dispatch, getState) => {
    try {
        dispatch({ type: TOPIC_SAVE_REQUEST, payload: topic });
        const { userSignin: { userInfo } } = getState();
        if (!topic._id) {
            const { data } = await Axios.post('/api/topics', topic, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: TOPIC_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await Axios.put('/api/topics/' + topic._id, topic, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: TOPIC_SAVE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: TOPIC_SAVE_FAIL, payload: error.message });
    }
}

const deleteTopic = (topicId) => async (dispatch, getState) => {
    try {
        const { userSignin: { userInfo } } = getState();
        dispatch({ type: TOPIC_DELETE_REQUEST, payload: topicId });
        const { data } = await axios.delete("/api/topics/" + topicId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token
            }
        });
        dispatch({ type: TOPIC_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: TOPIC_DELETE_FAIL, payload: error.message });
    }
}

// course
const listCourses = (name = '', searchKeyword ='') => async (dispatch) => {
    try {
        dispatch({ type: COURSE_LIST_REQUEST });
        const { data } = await axios.get("/api/courses?name=" 
        + name + "&searchKeyword=" + searchKeyword);
        dispatch({ type: COURSE_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: COURSE_LIST_FAIL, payload: error.message });
    }
}

const detailsCourse = (courseId) => async (dispatch) => {
    try{
        dispatch({type: COURSE_DETAILS_REQUEST, payload: courseId});
        const{data} = await axios.get("/api/courses/" + courseId);
        dispatch({type: COURSE_DETAILS_SUCCESS, payload: data});
    } catch(error){
        dispatch({type:COURSE_DETAILS_FAIL, payload: error.message});
    }
}

const saveCourse = (course) => async (dispatch, getState) => {
    try {
        dispatch({ type: COURSE_SAVE_REQUEST, payload: course });
        const { userSignin: { userInfo } } = getState();
        if (!course._id) {
            const { data } = await Axios.post('/api/courses', course, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: COURSE_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await Axios.put('/api/courses/' + course._id, course, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: COURSE_SAVE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: COURSE_SAVE_FAIL, payload: error.message });
    }
}

const deleteCourse = (courseId) => async (dispatch, getState) => {
    try {
        const { userSignin: { userInfo } } = getState();
        dispatch({ type: COURSE_DELETE_REQUEST, payload: courseId });
        const { data } = await axios.delete("/api/courses/" + courseId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token
            }
        });
        dispatch({ type: COURSE_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: COURSE_DELETE_FAIL, payload: error.message });
    }
}

//trainee
const listTrainees = (name = '', searchKeyword ='') => async (dispatch) => {
    try {
        dispatch({ type: TRAINEE_LIST_REQUEST });
        const { data } = await axios.get("/api/users/trainee?name=" 
        + name + "&searchKeyword=" + searchKeyword);
        dispatch({ type: TRAINEE_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: TRAINEE_LIST_FAIL, payload: error.message });
    }
}

const detailsTrainee = (traineeId) => async (dispatch) => {
    try{
        dispatch({type: TRAINEE_DETAILS_REQUEST, payload: traineeId});
        const{data} = await axios.get("/api/users/trainee/" + traineeId);
        dispatch({type: TRAINEE_DETAILS_SUCCESS, payload: data});
    } catch(error){
        dispatch({type:TRAINEE_DETAILS_FAIL, payload: error.message});
    }
}

const saveTrainee = (trainee) => async (dispatch, getState) => {
    try {
        dispatch({ type: TRAINEE_SAVE_REQUEST, payload: trainee });
        const { userSignin: { userInfo } } = getState();
        if (!trainee._id) {
            const { data } = await Axios.post('/api/users/trainee', trainee, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: TRAINEE_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await Axios.put('/api/users/trainee/' + trainee._id, trainee, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: TRAINEE_SAVE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: TRAINEE_SAVE_FAIL, payload: error.message });
    }
}

const deleteTrainee = (traineeId) => async (dispatch, getState) => {
    try {
        const { userSignin: { userInfo } } = getState();
        dispatch({ type: TRAINEE_DELETE_REQUEST, payload: traineeId });
        const { data } = await axios.delete("/api/users/trainee/" + traineeId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token
            }
        });
        dispatch({ type: TRAINEE_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: TRAINEE_DELETE_FAIL, payload: error.message });
    }
}

//category
const listCategories = (name = '', searchKeyword ='') => async (dispatch) => {
    try {
        dispatch({ type: CATEGORY_LIST_REQUEST });
        const { data } = await axios.get("/api/categories?name=" 
        + name + "&searchKeyword=" + searchKeyword);
        dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
    }
}

const detailsCategory = (categoryId) => async (dispatch) => {
    try{
        dispatch({type: CATEGORY_DETAILS_REQUEST, payload: categoryId});
        const{data} = await axios.get("/api/categories/" + categoryId);
        dispatch({type: CATEGORY_DETAILS_SUCCESS, payload: data});
    } catch(error){
        dispatch({type:CATEGORY_DETAILS_FAIL, payload: error.message});
    }
}

const saveCategory = (category) => async (dispatch, getState) => {
    try {
        dispatch({ type: CATEGORY_SAVE_REQUEST, payload: category });
        const { userSignin: { userInfo } } = getState();
        if (!category._id) {
            const { data } = await Axios.post('/api/categories', category, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: CATEGORY_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await Axios.put('/api/categories/' + category._id, category, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: CATEGORY_SAVE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: CATEGORY_SAVE_FAIL, payload: error.message });
    }
    }

const deleteCategory = (categoryId) => async (dispatch, getState) => {
    try {
        const { userSignin: { userInfo } } = getState();
        dispatch({ type: CATEGORY_DELETE_REQUEST, payload: categoryId });
        const { data } = await axios.delete("/api/categories/" + categoryId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token
            }
        });
        dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: CATEGORY_DELETE_FAIL, payload: error.message });
    }
}

export {listTrainees, detailsTrainee, saveTrainee, deleteTrainee,
    listCategories, detailsCategory, saveCategory, deleteCategory,
    listCourses, detailsCourse, saveCourse, deleteCourse,
    listTopics, detailsTopic, saveTopic, deleteTopic, courseCategoryLists}