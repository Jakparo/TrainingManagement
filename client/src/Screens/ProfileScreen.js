import React, { useState, useEffect } from 'react';

import {  Row, Col, Form, FormGroup,
    Label, Input, Button } from 'reactstrap';
import { logout, update } from '../actions/userAction';

import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {
const [name, setName] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const dispatch = useDispatch();

const userSignin = useSelector(state => state.userSignin);
const { userInfo } = userSignin;
const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
}
const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }))
}
const userUpdate = useSelector(state => state.userUpdate);
const { loading, success, error } = userUpdate;


useEffect(() => {
    if (userInfo) {
        console.log(userInfo.name)
        setEmail(userInfo.email);
        setName(userInfo.name);
        setPassword(userInfo.password);
    }
    return () => {

    };
}, [userInfo])

return  (
    <Row>
        <Col className='mx-auto' xl='3' xs='8' md='5' lg='5' sm='6'>
            <h3> User Profile</h3>
            <Form onSubmit={submitHandler}>
                <div>
                    {loading && <div>Loading...</div>}
                    {error && <div>{error}</div>}
                    {success && <div>Profile Saved Successfully.</div>}
                </div>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input value={name} type="name" name="name" id="name" 
                    onChange={(e) => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input value={email} type="email" name="email" id="email"
                    onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input value={password} type="password" name="password" id="password"
                    onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <Button type="submit" outline color="primary" className='mr-2'>Update</Button>
                <Button outline color="danger" onClick={handleLogout}>Log out</Button>
            </Form>
        </Col>

    </Row>
)
}

export default ProfileScreen; 