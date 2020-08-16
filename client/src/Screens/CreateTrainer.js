import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col, Table,
FormGroup, Label, Input, Button, Form} from 'reactstrap';

import {  saveTrainer} from '../actions/adminActions';
import  url  from '../icons/return.svg'

function CreateTrainer(props){
    const redirect = props.location.search?props.location.search.split("=")[1]:'/trainers';

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('');
    const [phone, setPhone] = useState('');
    const [password,  setPassword] = useState('');
    const trainerSave = useSelector(state => state.trainerSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = trainerSave;
    
    const trainerDetails = useSelector(state => state.trainerDetails );
    const { trainer, loading, error } = trainerDetails;


    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            props.history.push(redirect);
        }
        return () => {
            // 
        }
    }, [successSave]);

    const openModal = (trainer) => {
        setId(trainer._id);
        setName(trainer.name);
        setEmail(trainer.email);
        setPassword(trainer.password);
        setType(trainer.type);
        setPhone(trainer.phone);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveTrainer({
            _id: id,
            name, email, password, type, phone
        }));
    }


    return (
    <div>
        <div>
            <p className="back-to-home">
                <span>
                    <Link to="/trainers"> <img src={url} width={32} height={32}/></Link>
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
                            <Label for="type">Type</Label>
                            <Input value={type} type="select" name="type" id="type"
                            onChange={(e) => setType(e.target.value)}>
                                <option>Internal</option>
                                <option>External</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input value={phone} type="number" name="phone" id="phone"
                            onChange={(e) => setPhone(e.target.value)}/>
                        </FormGroup>
                        <Button type="submit" outline color="primary" className='mr-2'>Create</Button>
                    </Form>
                </Col>
            </Row>
        )}
    </div>
    )  
}

export default CreateTrainer;