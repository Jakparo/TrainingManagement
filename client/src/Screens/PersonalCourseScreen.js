import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Table} from 'reactstrap';
import { listMyCourses } from '../actions/courseActions';
import  url  from '../icons/return.svg'

function PersonalCourseScreen(){
    const dispatch = useDispatch();
    const myCourseList = useSelector(state => state.myCourseList);
    const { loading: loadingCourses, courses, error: errorCourses } = myCourseList;
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    useEffect(() => {
        if (userInfo) {
            console.log(userInfo.name)
        }
        dispatch(listMyCourses());
        return () => {
        };
    }, [userInfo])

    return <>
        <div>
            <p className="back-to-home">
                <span>
                    <Link to="/home"> <img src={url} width={32} height={32}/></Link>
                </span>
            </p>
        </div>
        <Row>
            <Col xl='8' lg='8' md='9' sm='12' xs='12' className='mx-auto'>
            {
            loadingCourses ? <div>Loading...</div> :
                errorCourses ? <div>{errorCourses} </div> :
                <Table >
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>TOPIC</th>
                    </tr>
                    </thead>
                    <tbody>
                    {courses.map(course => <tr key={course._id}>
                        <td>{course.name}</td>
                        <td>{course.description}</td>
                        <td><Link to={'/topic/' + course.topic}>
                                {course.topic}
                            </Link></td>
                    </tr>)}
                    </tbody>
                </Table>
            }
            </Col>
        </Row>
    </>
}

export default PersonalCourseScreen;