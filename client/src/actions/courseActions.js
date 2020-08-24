import Axios from "axios";
import { MY_COURSE_LIST_REQUEST, MY_COURSE_LIST_SUCCESS, MY_COURSE_LIST_FAIL } from "../constants/courseContants";

const listMyCourses = () => async (dispatch, getState) => {
    try {
        dispatch({ type: MY_COURSE_LIST_REQUEST});
        const { userSignin: { userInfo } } = getState();
        const { data } = await Axios.get("/api/courses/mine", {
        headers:
            { Authorization: 'Bearer ' + userInfo.token }
        });
        dispatch({ type: MY_COURSE_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: MY_COURSE_LIST_FAIL, payload: error.message });
    }
}

export {listMyCourses}