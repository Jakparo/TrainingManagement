import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { Card, CardBody, CardTitle , Row, Col } from 'reactstrap';


function HomeScreen(props){
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;


    return <>
            { 
                <Row>
                    {
                        userInfo && userInfo.isAdmin && (
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
                            </>  
                        )}
                    {/* // products.map(product => 
                    //     <Col lg='3' md='4' sm='6' key={product._id}>
                            <Card>
                                <Link to={'/product/'+ product._id}>
                                    <CardImg top width="100%" src={product.image} alt="product" />
                                    <CardBody>
                                        <CardTitle className="font-weight-bold">{product.name}</CardTitle>
                                        <CardSubtitle>{product.continent}</CardSubtitle>
                                        <CardSubtitle className="font-weight-bold">${product.price}</CardSubtitle>
                                        <CardSubtitle>{product.rating} stars</CardSubtitle>
                                    </CardBody>
                                </Link>
                            </Card>
                    //     </Col>
                    //      */}
                    
                </Row>
            }
    </>
}

export default HomeScreen;