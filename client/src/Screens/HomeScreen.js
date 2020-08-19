import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { Card, CardBody, CardTitle , Row, Col } from 'reactstrap';


function HomeScreen(props){
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;


    return (
        <Row>
        {
            userInfo && userInfo.isAdmin ? 
                <>
                    <Col lg='3' md='4' sm='6' xs='6'>
                        <Card>
                            <Link to={'/trainers'}>
                                <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Trainer</CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col lg='3' md='4' sm='6' xs='6'>
                        <Card>
                            <Link to={'/staffs'}>
                                <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Training staff</CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                </>: userInfo.isTraining ?
                <>
                    <Col lg='3' md='4' sm='6' xs='6'>
                        <Card>
                            <Link to={'/trainers'}>
                                <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Trainers</CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col lg='3' md='4' sm='6' xs='6'>
                        <Card>
                            <Link to={'/trainees'}>
                                <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Trainees</CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col lg='3' md='4' sm='6' xs='6'>
                        <Card>
                            <Link to={'/categories'}>
                                <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Categories</CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col lg='3' md='4' sm='6' xs='6'>
                        <Card>
                            <Link to={'/courses'}>
                                <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Courses</CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                    <Col lg='3' md='4' sm='6' xs='6'>
                        <Card>
                            <Link to={'/topics'}>
                                <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                <CardBody>
                                    <CardTitle className="font-weight-bold">Topics</CardTitle>
                                </CardBody>
                            </Link>
                        </Card>
                    </Col>
                </>:
                <div></div>
        }

    </Row>
    )
    }          
            


export default HomeScreen;