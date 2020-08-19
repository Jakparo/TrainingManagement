import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col, Table,
FormGroup, Label, Input, Button, Form} from 'reactstrap';

// import { listTrainees, listCategories} from '../actions/staffActions';
// import { listTrainers} from '../actions/adminActions';
import { detailsCourse,  saveCourse, deleteCourse} from '../actions/staffActions';
import  url  from '../icons/return.svg'

function CourseScreen(props){

    const trainerList =  useSelector(state => state.trainerList);
    const {trainers} = trainerList;

    const traineeList =  useSelector(state => state.traineeList);
    const {trainees} = traineeList;

    const categoryList =  useSelector(state => state.categoryList);
    const {categories} = categoryList;

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [trainer, setTrainer] = useState('');
    const [trainee, setTrainees] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    
    const courseSave = useSelector(state => state.courseSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = courseSave;
    
    const courseDetails = useSelector(state => state.courseDetails );
    const { course, loading, error } = courseDetails;

    const courseDelete = useSelector(state => state.courseDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = courseDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(detailsCourse(props.match.params.id));
        return () => {
        
        }
    }, [successSave]);

    const openModal = (course) => {
        setModalVisible(true);
        setId(course._id);
        setName(course.name);
        setTrainer(course.trainer);
        setTrainees(course.trainees);
        setCategory(course.category);
        setDescription(course.description);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveCourse({
            _id: id,
            name, trainer, trainees, category, description
        }));
    }
    const deleteHandler = (course) => {
        dispatch(deleteCourse(course._id));
        if(successDelete){
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
        {loading?<div><Spinner color="primary" /></div> :
        error? <div>{error}</div>:
        (
            <Row>
                {
                    modalVisible && 
                <Col className='mx-auto' sm='10' xl='4' lg='4' md='4' xs='10'>
                    <h3> Course Profile</h3>
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
                        {/* <FormGroup>
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
                            </Input> */}
                        {/* </FormGroup> */}
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input value={description} type="text" name="description" id="description"
                            onChange={(e) => setDescription(e.target.value)} required/>
                        </FormGroup>
                        <Button type="submit" outline color="primary" className='mr-2'>Update</Button>
                    </Form>
                </Col>}
                <Col className='mx-auto' sm='10' xl='8' lg='8' md='8'>
            
            <Table dark>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{course.name}</td>
                        <td>{course.description}</td>
                        <td>
                            <Button color="primary" outline onClick={() => openModal(trainer)} >Edit</Button>
                            {' '}
                            <Button color="danger" outline onClick={() => deleteHandler(trainer)} >Delete</Button>
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

export default CourseScreen;