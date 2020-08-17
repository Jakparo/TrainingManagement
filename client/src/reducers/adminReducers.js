import{ TRAINER_LIST_REQUEST, TRAINER_LIST_SUCCESS, TRAINER_LIST_FAIL,
    TRAINER_DETAILS_REQUEST, TRAINER_DETAILS_SUCCESS, TRAINER_DETAILS_FAIL,
    TRAINER_SAVE_REQUEST, TRAINER_SAVE_SUCCESS, TRAINER_SAVE_FAIL, 
    TRAINER_DELETE_SUCCESS, TRAINER_DELETE_FAIL, TRAINER_DELETE_REQUEST, 
    STAFF_SAVE_REQUEST, STAFF_SAVE_SUCCESS, STAFF_SAVE_FAIL, 
    STAFF_DELETE_REQUEST, STAFF_DELETE_SUCCESS, STAFF_DELETE_FAIL, 
    STAFF_DETAILS_FAIL, STAFF_DETAILS_SUCCESS, STAFF_DETAILS_REQUEST, 
    STAFF_LIST_FAIL, STAFF_LIST_SUCCESS, STAFF_LIST_REQUEST }
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

function staffListReducer(state= {staffs: [] }, action) {
    switch (action.type) {
        case STAFF_LIST_REQUEST:
            return { loading: true, staffs: [] };
        case STAFF_LIST_SUCCESS:
            return { loading: false, staffs: action.payload };
        case STAFF_LIST_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function staffDetailsReducer(state= {staff: {} }, action) {
    switch (action.type) {
        case STAFF_DETAILS_REQUEST:
            return {loading: true};
        case STAFF_DETAILS_SUCCESS:
            return { loading: false, staff: action.payload };
        case STAFF_DETAILS_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function staffDeleteReducer(state = { staff: {} }, action) {
    switch (action.type) {
        case STAFF_DELETE_REQUEST:
            return{ loading: true };
        case STAFF_DELETE_SUCCESS:
            return{ loading: false, staff: action.payload, success: true };
        case STAFF_DELETE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

function staffSaveReducer(state = { staff: {} }, action) {
    switch (action.type) {
        case STAFF_SAVE_REQUEST:
            return{ loading: true };
        case STAFF_SAVE_SUCCESS:
            return{ loading: false, success: true, staff: action.payload };
        case STAFF_SAVE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
    }

export { trainerListReducer, trainerDetailsReducer, trainerSaveReducer, trainerDeleteReducer, 
        staffListReducer, staffDetailsReducer, staffSaveReducer, staffDeleteReducer } 

