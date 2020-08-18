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
    listCategories, detailsCategory, saveCategory, deleteCategory}