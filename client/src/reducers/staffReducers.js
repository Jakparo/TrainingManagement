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

import{ COURSE_SAVE_REQUEST, COURSE_SAVE_SUCCESS, COURSE_SAVE_FAIL, 
    COURSE_DELETE_FAIL, COURSE_DELETE_SUCCESS, COURSE_DELETE_REQUEST, 
    COURSE_DETAILS_FAIL, COURSE_DETAILS_REQUEST, COURSE_DETAILS_SUCCESS,
    COURSE_LIST_FAIL, COURSE_LIST_SUCCESS, COURSE_LIST_REQUEST, 
    COURSE_CATEGORY_REQUEST, COURSE_CATEGORY_SUCCESS, COURSE_CATEGORY_FAIL
} from "../constants/staffContants"

import{ TOPIC_DELETE_FAIL, TOPIC_DELETE_SUCCESS, TOPIC_DELETE_REQUEST,
    TOPIC_SAVE_FAIL, TOPIC_SAVE_SUCCESS, TOPIC_SAVE_REQUEST, 
    TOPIC_DETAILS_FAIL, TOPIC_DETAILS_SUCCESS, TOPIC_DETAILS_REQUEST, 
    TOPIC_LIST_FAIL, TOPIC_LIST_SUCCESS, TOPIC_LIST_REQUEST
} from '../constants/staffContants';


//COURSE CATEGORY
function courseCategoryListReducer(state={courses:[]}, action) {
    switch (action.type) {
        case COURSE_CATEGORY_REQUEST:
            return {loading: true, courses: []};
        case COURSE_CATEGORY_SUCCESS:
            return {loading: false, courses: action.payload};
        case COURSE_CATEGORY_FAIL:
            return{ loading: true, error: action.payload}
        default:
            return state;
    }
}

// Topic
function topicListReducer(state= {topics: [] }, action) {
    switch (action.type) {
        case TOPIC_LIST_REQUEST:
            return { loading: true, topics: [] };
        case TOPIC_LIST_SUCCESS:
            return { loading: false, topics: action.payload };
        case TOPIC_LIST_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function topicDetailsReducer(state= {topic: {} }, action) {
    switch (action.type) {
        case TOPIC_DETAILS_REQUEST:
            return {loading: true};
        case TOPIC_DETAILS_SUCCESS:
            return { loading: false, topic: action.payload };
        case TOPIC_DETAILS_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function topicDeleteReducer(state = { topic: {} }, action) {
    switch (action.type) {
        case TOPIC_DELETE_REQUEST:
            return{ loading: true };
        case TOPIC_DELETE_SUCCESS:
            return{ loading: false, topic: action.payload, success: true };
        case TOPIC_DELETE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

function topicSaveReducer(state = { topic: {} }, action) {
    switch (action.type) {
        case TOPIC_SAVE_REQUEST:
            return{ loading: true };
        case TOPIC_SAVE_SUCCESS:
            return{ loading: false, success: true, topic: action.payload };
        case TOPIC_SAVE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

// Course
function courseListReducer(state= {courses: [] }, action) {
    switch (action.type) {
        case COURSE_LIST_REQUEST:
            return { loading: true, courses: [] };
        case COURSE_LIST_SUCCESS:
            return { loading: false, courses: action.payload };
        case COURSE_LIST_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function courseDetailsReducer(state= {course: {
    trainees: [],
    trainer: {},
    category: {},
} }, action) {
    switch (action.type) {
        case COURSE_DETAILS_REQUEST:
            return {loading: true};
        case COURSE_DETAILS_SUCCESS:
            return { loading: false, course: action.payload };
        case COURSE_DETAILS_FAIL:
            return { loading: true, error: action.payload}
        default:
            return state;
    }
}

function courseDeleteReducer(state = { course: {} }, action) {
    switch (action.type) {
        case COURSE_DELETE_REQUEST:
            return{ loading: true };
        case COURSE_DELETE_SUCCESS:
            return{ loading: false, course: action.payload, success: true };
        case COURSE_DELETE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

function courseSaveReducer(state = { course: {} }, action) {
    switch (action.type) {
        case COURSE_SAVE_REQUEST:
            return{ loading: true };
        case COURSE_SAVE_SUCCESS:
            return{ loading: false, success: true, course: action.payload };
        case COURSE_SAVE_FAIL:
            return{ loading: false, error: action.payload }
        default:
            return state;
    }
}

// TRAINEE
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
        categoryListReducer, categoryDetailsReducer, categorySaveReducer, categoryDeleteReducer,
        courseListReducer, courseDetailsReducer, courseSaveReducer, courseDeleteReducer, courseCategoryListReducer,
        topicListReducer, topicDetailsReducer, topicSaveReducer, topicDeleteReducer}