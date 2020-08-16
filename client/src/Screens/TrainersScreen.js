import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardBody, CardTitle ,Spinner, Row, Col,
Form, FormGroup, Input, Button} from 'reactstrap';
import { listTrainers } from '../actions/adminActions';
import search from '../icons/search.svg';

function TrainersScreen(props){
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;
    const [searchKeyword, setSearchKeyword] = useState('');
    const name = props.match.params.id ? props.match.params.id : '';
    const trainerList =  useSelector(state => state.trainerList);
    const {trainers, loading, error} = trainerList;
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(listTrainers(name));
        return () => {
            //
        };
    }, [name])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listTrainers(name, searchKeyword))
    }

    return <>
        {name && <h2>{name}</h2>}
        <Row>
            <Col className="mx-auto" xl="4" md="6" sm="6" xs='10'>
                <Form onSubmit={submitHandler} className="d-flex">
                    <FormGroup className="d-flex">
                        <Input className="border"  name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
                        <Button color="light" className="border"><img src={search} width={22} height={22}/></Button>
                        <Button color="success" className="border ml-5">
                            <Link to="/createTrainer" style={{textDecoration:'none', color: 'white'}}>
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
                        userInfo && userInfo.isAdmin && (
                            <>
                            {
                                trainers.map(trainer => 
                                    <Col lg='3' md='4' sm='6' xs='6' key={trainer._id}>
                                        <Card>
                                            <Link to={'/trainer/'+ trainer._id}>
                                            <div style={{backgroundColor: '#646566', height:'22vh'}}/>
                                                <CardBody>
                                                    <CardTitle className="font-weight-bold">{trainer.name}</CardTitle>
                                                </CardBody>
                                            </Link>
                                        </Card>
                                    </Col>
                            )
                            }
                            </>
                        )
                    }

                </Row>
            }
    </>
}

export default TrainersScreen;