import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col, Table,
FormGroup, Label, Input, Button, Form} from 'reactstrap';
import {  saveTrainee} from '../actions/staffActions';
import  url  from '../icons/return.svg'

function CreateTrainee(props){

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [toeic, setToeic] = useState('');
    const [password,  setPassword] = useState('');
    const [address, setAddress] = useState('');
    const traineeSave = useSelector(state => state.traineeSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = traineeSave;
    
    const traineeDetails = useSelector(state => state.traineeDetails );
    const { trainee, loading, error } = traineeDetails;


    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {

        }
        return () => {
        
        }
    }, [successSave]);

    const openModal = (trainee) => {
        setId(trainee._id);
        setName(trainee.name);
        setEmail(trainee.email);
        setPassword(trainee.password);
        setDepartment(trainee.department);
        setToeic(trainee.toeic);
        setAddress(trainee.address);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveTrainee({
            _id: id,
            name, email, password, department, toeic, address
        }));
        props.history.push("/trainees");
    }


    return (
    <div>
        <div>
            <p className="back-to-home">
                <span>
                    <Link to="/trainees"> <img src={url} width={32} height={32}/></Link>
                </span>
            </p>
        </div>
        {loading?<div><Spinner color="primary" /></div> :

        error? <div>{error}</div>:
        (
            <Row>
                <Col className='mx-auto' sm='10' xl='4' lg='4' md='4' xs='10'>
                    <h3> User Profile</h3>
                    <Form onSubmit={submitHandler}>
                        <div>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                        </div>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input value={name} type="text" name="name" id="name" 
                            onChange={(e) => setName(e.target.value)} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input value={email} type="email" name="email" id="email"
                            onChange={(e) => setEmail(e.target.value)} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input value={password} type="password" name="password" id="password"
                            onChange={(e) => setPassword(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="department">Department</Label>
                            <Input value={department} type="text" name="department" id="department"
                            onChange={(e) => setDepartment(e.target.value)}>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="toeic">Toeic</Label>
                            <Input value={toeic} type="number" name="toeic" id="toeic"
                            onChange={(e) => setToeic(e.target.value)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input value={address} type="text" name="address" id="address"
                            onChange={(e) => setAddress(e.target.value)}>
                            </Input>
                        </FormGroup>
                        <Button type="submit" outline color="primary" className='mr-2'>Create</Button>
                    </Form>
                </Col>
            </Row>
        )}
    </div>
    )  
}

export default CreateTrainee;