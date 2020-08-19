import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col, Table} from 'reactstrap';

import { courseCategoryLists} from '../actions/staffActions';
import  url  from '../icons/return.svg'

function CourseCategoryScreen(props){

    const dispatch = useDispatch();
    const courseList =  useSelector(state => state.courseList);
    const {courses, loading, error} = courseList;

    useEffect(() => {
        dispatch(courseCategoryLists(props.match.params.id));
        return () => {
        
        }
    }, []);

    return (
    <div>
        <div>
            <p className="back-to-home">
                <span>
                    <Link to="/home"> <img src={url} width={32} height={32}/></Link>
                </span>
            </p>
        </div>
        {loading?<div><Spinner color="primary" /></div> :
        error? <div>{error}</div>:
        (
            <Row>
                <Col className='mx-auto' sm='10' xl='8' lg='8' md='8'>
            
                <Table dark>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Trainer</th>
                            <th>Topic</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            {
                                courses.map(course =>
                                    <tr>
                                    <td>
                                        <Link to={'/course/'+ course._id}>
                                            {course.name}
                                        </Link>

                                    </td>    
                                    <td>
                                        <Link to={'/trainer/'+ course.trainer}>
                                            {course.trainer}
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={'/topic/' + course.topic}>
                                            {course.topic}
                                        </Link>
                                    </td>
                                    <td>
                                        {course.description}
                                    </td>
                                    </tr>
                                )
                            }
                        
                    </tbody>
                </Table>    
                </Col>
            </Row>
        )}
    </div>
    )  
}

export default CourseCategoryScreen;