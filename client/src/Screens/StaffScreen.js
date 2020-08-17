import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col, Table,
FormGroup, Label, Input, Button, Form} from 'reactstrap';

import { detailsStaff,  saveStaff, deleteStaff} from '../actions/adminActions';
import  url  from '../icons/return.svg'




function StaffScreen(props){
    const redirect = props.location.search?props.location.search.split("=")[1]:'/staffs';

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const staffSave = useSelector(state => state.staffSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = staffSave;
    
    const staffDetails = useSelector(state => state.staffDetails );
    const { staff, loading, error } = staffDetails;

    const staffDelete = useSelector(state => state.staffDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = staffDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(detailsStaff(props.match.params.id));
        return () => {
            // 
        }
    }, [successSave]);

    const openModal = (staff) => {
        setModalVisible(true);
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
    }
    const deleteHandler = (staff) => {
        dispatch(deleteStaff(staff._id));
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
                {
                    modalVisible && 
                <Col className='mx-auto' sm='10' xl='4' lg='4' md='4' xs='10'>
                    <h3> User Profile</h3>
                    <Form onSubmit={submitHandler}>
                        <div>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                            {/* {success && <div>Profile Saved Successfully.</div>} */}
                        </div>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input value={name} type="text" name="name" id="name" 
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
                    </Form>
                </Col>}
        <Col className='mx-auto' sm='8' xl='6' lg='6' md='6'>
            
            <Table dark>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{staff.name}</td>
                        <td>{staff.email}</td>
                        <td>
                            <Button color="primary" outline onClick={() => openModal(staff)} >Edit</Button>
                            {' '}
                            <Button color="danger" outline onClick={() => deleteHandler(staff)} >Delete</Button>
                        </td>
                    </tr>
                
                </tbody>
            </Table>    
            </Col>
            </Row>
        )}
    </div>
    )  
}

export default StaffScreen;