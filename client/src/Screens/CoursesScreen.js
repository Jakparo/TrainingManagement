import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardBody, CardTitle ,Spinner, Row, Col,
Form, FormGroup, Input, Button} from 'reactstrap';
import { listCourses } from '../actions/staffActions';
import search from '../icons/search.svg';
import  url  from '../icons/return.svg'

function CoursesScreen(props){
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;
    const [searchKeyword, setSearchKeyword] = useState('');
    const name = props.match.params.id ? props.match.params.id : '';
    const courseList =  useSelector(state => state.courseList);
    const {courses, loading, error} = courseList;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(listCourses(name));
        return () => {
            //
        };
    }, [name])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listCourses(name, searchKeyword))
    }

    return <>
        {name && <h2>{name}</h2>}
        <Row>
            <div className="ml-4">
                <p className="back-to-home">
                    <span>
                        <Link to="/home"> <img src={url} width={32} height={32}/></Link>
                    </span>
                </p>
            </div>
            <Col className="mx-auto" xl="4" md="6" sm="6" xs='10'>
                <Form onSubmit={submitHandler} className="d-flex">
                    <FormGroup className="d-flex">
                        <Input className="border"  name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
                        <Button color="light" className="border"><img src={search} width={22} height={22}/></Button>
                        <Button color="success" className="border ml-5">
                            <Link to="/createCourse" style={{textDecoration:'none', color: 'white'}}>
                                Create
                            </Link>
                        </Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
            {   loading? <div><Spinner color="primary" /></div> : 
                error ? <div> {error}</div> :
                <Row>
                    {
                        userInfo.isAdmin || userInfo.isTraining  ?(
                            <>
                            {
                                courses.map(course => 
                                    <Col lg='3' md='4' sm='6' xs='6' key={course._id}>
                                        <Card>
                                            <Link to={'/course/'+ course._id}>
                                            <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                                <CardBody>
                                                    <CardTitle className="font-weight-bold">{course.name}</CardTitle>
                                                </CardBody>
                                            </Link>
                                        </Card>
                                    </Col>
                            )
                            }
                            </>
                        ):<></>
                    }

                </Row>
            }
    </>
}

export default CoursesScreen;