import{ TRAINER_LIST_REQUEST, TRAINER_LIST_SUCCESS, TRAINER_LIST_FAIL,
    TRAINER_DETAILS_REQUEST, TRAINER_DETAILS_SUCCESS, TRAINER_DETAILS_FAIL,
    TRAINER_SAVE_REQUEST, TRAINER_SAVE_SUCCESS, TRAINER_SAVE_FAIL, 
    TRAINER_DELETE_SUCCESS, TRAINER_DELETE_FAIL, TRAINER_DELETE_REQUEST }
from "../constants/adminContants"

function trainerListReducer(state= {trainers: [] }, action) {
    switch (action.type) {
        case TRAINER_LIST_REQUEST:
            return { loading: true, trainers: [] };
        case TRAINER_LIST_SUCCESS:
            return { loading: false, trainers: action.payload };
        case TRAINER_LIST_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function trainerDetailsReducer(state= {trainer: {} }, action) {
    switch (action.type) {
        case TRAINER_DETAILS_REQUEST:
            return {loading: true};
        case TRAINER_DETAILS_SUCCESS:
            return { loading: false, trainer: action.payload };
        case TRAINER_DETAILS_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function trainerDeleteReducer(state = { trainer: {} }, action) {
    switch (action.type) {
        case TRAINER_DELETE_REQUEST:
            return{ loading: true };
        case TRAINER_DELETE_SUCCESS:
            return{ loading: false, trainer: action.payload, success: true };
        case TRAINER_DELETE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

function trainerSaveReducer(state = { trainer: {} }, action) {
    switch (action.type) {
        case TRAINER_SAVE_REQUEST:
            return{ loading: true };
        case TRAINER_SAVE_SUCCESS:
            return{ loading: false, success: true, trainer: action.payload };
        case TRAINER_SAVE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
    }

export { trainerListReducer, trainerDetailsReducer, trainerSaveReducer, trainerDeleteReducer } 

