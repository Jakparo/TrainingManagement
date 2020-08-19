import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col, Table,
FormGroup, Label, Input, Button, Form} from 'reactstrap';

import {saveCourse, listTrainees, listCategories} from '../actions/staffActions';
import { listTrainers} from '../actions/adminActions';


import  url  from '../icons/return.svg'

function CreateCategory(props){

    const trainerList =  useSelector(state => state.trainerList);
    const {trainers} = trainerList;

    const traineeList =  useSelector(state => state.traineeList);
    const {trainees} = traineeList;

    const categoryList =  useSelector(state => state.categoryList);
    const {categories} = categoryList;

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [trainer, setTrainer] = useState('');
    const [trainee, setTrainees] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const courseSave = useSelector(state => state.courseSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = courseSave;
    
    const courseDetails = useSelector(state => state.courseDetails );
    


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTrainers());
        dispatch(listTrainees());
        dispatch(listCategories());
        return () => {
            // 
        }
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveCourse({
            _id: id,
            name, description, trainer, trainees, category
        }));
        if(submitHandler){
            props.history.push('/courses');
        }
    }


    return (
    <div>
        <div>
            <p className="back-to-home">
                <span>
                    <Link to="/courses"> <img src={url} width={32} height={32}/></Link>
                </span>
            </p>
        </div>
        {
        (
            <Row>
                <Col className='mx-auto' sm='10' xl='4' lg='4' md='4' xs='10'>
                    <h3> Course Detail</h3>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input value={name} type="text" name="name" id="name" 
                            onChange={(e) => setName(e.target.value)} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="trainer">Trainer</Label>
                            <Input type="select" name="trainer" id="trainer" 
                            onChange={(e) => setTrainer(e.target.value)} required>
                            {
                                trainers.map(trainer=> 
                                    <option value={trainer._id} >{trainer.name}</option>
                                )
                            }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="trainees">Trainees</Label>
                            <Input type="select" name="trainees" id="trainees" multiple
                            onChange={(e) => setTrainees(e.target.value)} required>
                            {
                                trainees.map(trainee=> 
                                    <option value={trainee._id}>{trainee.name}</option>
                                )
                            }
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="category">Category</Label>
                            <Input  type="select" name="category" id="category"
                            onChange={(e) => setCategory(e.target.value)} required>
                            {
                                categories.map(category=> 
                                    <option value={category._id}>{category.name}</option>
                                )
                            }
                            </Input>
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