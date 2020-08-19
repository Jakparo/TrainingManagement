import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col,
FormGroup, Label, Input, Button, Form} from 'reactstrap';

import {saveCategory} from '../actions/staffActions';
import  url  from '../icons/return.svg'

function CreateCategory(props){
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const categorySave = useSelector(state => state.categorySave);
    const { loading: loadingSave, success: successSave, error: errorSave } = categorySave;
    
    const categoryDetails = useSelector(state => state.categoryDetails );
    const { category, loading, error } = categoryDetails;


    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
    
        }
        return () => {
            // 
        }
    }, [successSave]);

    const openModal = (category) => {
        setId(category._id);
        setName(category.name);
        setDescription(category.description);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveCategory({
            _id: id,
            name, description
        }));
        props.history.push('/categories');
    }


    return (
    <div>
        <div>
            <p className="back-to-home">
                <span>
                    <Link to="/categories"> <img src={url} width={32} height={32}/></Link>
                </span>
            </p>
        </div>
        {loading?<div><Spinner color="primary" /></div> :
        error? <div>{error}</div>:
        (
            <Row>
                <Col className='mx-auto' sm='10' xl='4' lg='4' md='4' xs='10'>
                    <h3> Category Detail</h3>
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
                            <Label for="description">Description</Label>
                            <Input value={description} type="text" name="description" id="description"
                            onChange={(e) => setDescription(e.target.value)} required/>
                        </FormGroup>
                        <Button type="submit" outline color="primary" className='mr-2'>Create</Button>
                    </Form>
                </Col>
            </Row>
        )}
    </div>
    )  
}

export default CreateCategory;