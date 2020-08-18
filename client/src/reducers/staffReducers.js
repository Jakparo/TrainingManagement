import { TRAINEE_LIST_REQUEST, TRAINEE_LIST_SUCCESS, TRAINEE_LIST_FAIL,
        TRAINEE_DETAILS_REQUEST, TRAINEE_DETAILS_SUCCESS, TRAINEE_DETAILS_FAIL,
        TRAINEE_DELETE_REQUEST, TRAINEE_DELETE_SUCCESS, TRAINEE_DELETE_FAIL,
        TRAINEE_SAVE_REQUEST, TRAINEE_SAVE_SUCCESS, TRAINEE_SAVE_FAIL
    } from "../constants/staffContants"

import{ CATEGORY_SAVE_REQUEST, CATEGORY_SAVE_SUCCESS, CATEGORY_SAVE_FAIL, 
    CATEGORY_DELETE_FAIL, CATEGORY_DELETE_SUCCESS, CATEGORY_DELETE_REQUEST, 
    CATEGORY_DETAILS_FAIL, CATEGORY_DETAILS_REQUEST, CATEGORY_DETAILS_SUCCESS,
    CATEGORY_LIST_FAIL, CATEGORY_LIST_SUCCESS, CATEGORY_LIST_REQUEST 
} from "../constants/staffContants"

function traineeListReducer(state= {trainees: [] }, action) {
    switch (action.type) {
        case TRAINEE_LIST_REQUEST:
            return { loading: true, trainees: [] };
        case TRAINEE_LIST_SUCCESS:
            return { loading: false, trainees: action.payload };
        case TRAINEE_LIST_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function traineeDetailsReducer(state= {trainee: {} }, action) {
    switch (action.type) {
        case TRAINEE_DETAILS_REQUEST:
            return {loading: true};
        case TRAINEE_DETAILS_SUCCESS:
            return { loading: false, trainee: action.payload };
        case TRAINEE_DETAILS_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function traineeDeleteReducer(state = { trainee: {} }, action) {
    switch (action.type) {
        case TRAINEE_DELETE_REQUEST:
            return{ loading: true };
        case TRAINEE_DELETE_SUCCESS:
            return{ loading: false, trainee: action.payload, success: true };
        case TRAINEE_DELETE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

function traineeSaveReducer(state = { trainee: {} }, action) {
    switch (action.type) {
        case TRAINEE_SAVE_REQUEST:
            return{ loading: true };
        case TRAINEE_SAVE_SUCCESS:
            return{ loading: false, success: true, trainee: action.payload };
        case TRAINEE_SAVE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

//category
function categoryListReducer(state= {categories: [] }, action) {
    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return { loading: true, categories: [] };
        case CATEGORY_LIST_SUCCESS:
            return { loading: false, categories: action.payload };
        case CATEGORY_LIST_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function categoryDetailsReducer(state= {category: {} }, action) {
    switch (action.type) {
        case CATEGORY_DETAILS_REQUEST:
            return {loading: true};
        case CATEGORY_DETAILS_SUCCESS:
            return { loading: false, category: action.payload };
        case CATEGORY_DETAILS_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function categoryDeleteReducer(state = { category: {} }, action) {
    switch (action.type) {
        case CATEGORY_DELETE_REQUEST:
            return{ loading: true };
        case CATEGORY_DELETE_SUCCESS:
            return{ loading: false, category: action.payload, success: true };
        case CATEGORY_DELETE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

function categorySaveReducer(state = { category: {} }, action) {
    switch (action.type) {
        case CATEGORY_SAVE_REQUEST:
            return{ loading: true };
        case CATEGORY_SAVE_SUCCESS:
            return{ loading: false, success: true, category: action.payload };
        case CATEGORY_SAVE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

export {traineeListReducer, traineeDetailsReducer, traineeSaveReducer, traineeDeleteReducer, 
        categoryListReducer, categoryDetailsReducer, categorySaveReducer, categoryDeleteReducer}