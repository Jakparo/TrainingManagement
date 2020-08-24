import { MY_COURSE_LIST_FAIL, MY_COURSE_LIST_SUCCESS, MY_COURSE_LIST_REQUEST } 
from "../constants/courseContants" ;

function myCourseListReducer(state = {
    courses: []
}, action) {
    switch (action.type) {
        case MY_COURSE_LIST_REQUEST:
            return { loading: true };
        case MY_COURSE_LIST_SUCCESS:
            return { loading: false, courses: action.payload };
        case MY_COURSE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

export { myCourseListReducer}