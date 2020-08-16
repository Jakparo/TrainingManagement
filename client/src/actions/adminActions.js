import axios from 'axios';
import Axios from "axios";

import{ TRAINER_LIST_REQUEST, TRAINER_LIST_SUCCESS, TRAINER_LIST_FAIL,
        TRAINER_DETAILS_REQUEST, TRAINER_DETAILS_SUCCESS, TRAINER_DETAILS_FAIL,
        TRAINER_SAVE_REQUEST, TRAINER_SAVE_SUCCESS, TRAINER_SAVE_FAIL, 
        TRAINER_DELETE_SUCCESS, TRAINER_DELETE_FAIL, TRAINER_DELETE_REQUEST }
from "../constants/adminContants"

const listTrainers = (name = '', searchKeyword ='') => async (dispatch) => {
    try {
        dispatch({ type: TRAINER_LIST_REQUEST });
        const { data } = await axios.get("/api/users/trainer?name=" 
        + name + "&searchKeyword=" + searchKeyword);
        dispatch({ type: TRAINER_LIST_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: TRAINER_LIST_FAIL, payload: error.message });
    }
}

const detailsTrainer = (trainerId) => async (dispatch) => {
    try{
        dispatch({type: TRAINER_DETAILS_REQUEST, payload: trainerId});
        const{data} = await axios.get("/api/users/trainer/" + trainerId);
        dispatch({type: TRAINER_DETAILS_SUCCESS, payload: data});
    } catch(error){
        dispatch({type:TRAINER_DETAILS_FAIL, payload: error.message});
    }
}

const saveTrainer = (trainer) => async (dispatch, getState) => {
    try {
        dispatch({ type: TRAINER_SAVE_REQUEST, payload: trainer });
        const { userSignin: { userInfo } } = getState();
        if (!trainer._id) {
            const { data } = await Axios.post('/api/users/trainer', trainer, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: TRAINER_SAVE_SUCCESS, payload: data });
        } else {
            const { data } = await Axios.put('/api/users/trainer/' + trainer._id, trainer, {
                headers: {
                'Authorization': 'Bearer ' + userInfo.token
                }
            });
            dispatch({ type: TRAINER_SAVE_SUCCESS, payload: data });
        }
    } catch (error) {
        dispatch({ type: TRAINER_SAVE_FAIL, payload: error.message });
    }
    }

const deleteTrainer = (trainerId) => async (dispatch, getState) => {
    try {
        const { userSignin: { userInfo } } = getState();
        dispatch({ type: TRAINER_DELETE_REQUEST, payload: trainerId });
        const { data } = await axios.delete("/api/users/trainer/" + trainerId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token
            }
        });
        dispatch({ type: TRAINER_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: TRAINER_DELETE_FAIL, payload: error.message });
    }
}
        
export { listTrainers, detailsTrainer, saveTrainer, deleteTrainer }