import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col, Table,
FormGroup, Label, Input, Button, Form} from 'reactstrap';

import {saveStaff} from '../actions/adminActions';
import  url  from '../icons/return.svg'

function CreateStaff(props){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const staffSave = useSelector(state => state.staffSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = staffSave;
    
    const staffDetails = useSelector(state => state.staffDetails );
    const { staff, loading, error } = staffDetails;


    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
    
        }
        return () => {
            // 
        }
    }, [successSave]);

    const openModal = (staff) => {
        setId(staff._id);
        setName(staff.name);
        setEmail(staff.email);
        setPassword(staff.password);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveStaff({
            _id: id,
            name, email, password
        }));
        props.history.push('/staffs');
    }


    return (
    <div>
        <div>
            <p className="back-to-home">
                <span>
                    <Link to="/staffs"> <img src={url} width={32} height={32}/></Link>
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
                        <Button type="submit" outline color="primary" className='mr-2'>Create</Button>
                    </Form>
                </Col>
            </Row>
        )}
    </div>
    )  
}

export default CreateStaff;