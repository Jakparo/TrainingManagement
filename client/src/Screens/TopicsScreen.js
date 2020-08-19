import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardBody, CardTitle ,Spinner, Row, Col,
Form, FormGroup, Input, Button} from 'reactstrap';
import { listTopics } from '../actions/staffActions';
import search from '../icons/search.svg';
import  url  from '../icons/return.svg'

function TopicsScreen(props){
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;
    const [searchKeyword, setSearchKeyword] = useState('');
    const name = props.match.params.id ? props.match.params.id : '';
    const topicList =  useSelector(state => state.topicList);
    const {topics, loading, error} = topicList;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(listTopics(name));
        return () => {
            //
        };
    }, [name])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listTopics(name, searchKeyword))
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
                            <Link to="/createTopic" style={{textDecoration:'none', color: 'white'}}>
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
                                topics.map(topic => 
                                    <Col lg='3' md='4' sm='6' xs='6' key={topic._id}>
                                        <Card>
                                            <Link to={'/topic/'+ topic._id}>
                                            <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                                <CardBody>
                                                    <CardTitle className="font-weight-bold">{topic.name}</CardTitle>
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

export default TopicsScreen;