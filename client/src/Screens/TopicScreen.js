import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col, Table,
FormGroup, Label, Input, Button, Form} from 'reactstrap';

import { detailsTopic,  saveTopic, deleteTopic} from '../actions/staffActions';
import  url  from '../icons/return.svg'

function TopicScreen(props){

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const topicSave = useSelector(state => state.topicSave);
    const { loading: loadingSave, success: successSave, error: errorSave } = topicSave;
    
    const topicDetails = useSelector(state => state.topicDetails );
    const { topic, loading, error } = topicDetails;

    const topicDelete = useSelector(state => state.topicDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = topicDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(detailsTopic(props.match.params.id));
        return () => {
        
        }
    }, [successSave]);

    const openModal = (topic) => {
        setModalVisible(true);
        setId(topic._id);
        setName(topic.name);
        setDescription(topic.description);
        }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveTopic({
            _id: id,
            name, description
        }));
    }
    const deleteHandler = (topic) => {
        dispatch(deleteTopic(topic._id));
        props.history.push('/topics');
    }


    return (
    <div>
        <div>
            <p className="back-to-home">
                <span>
                    <Link to="/topics"> <img src={url} width={32} height={32}/></Link>
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
                    <h3> Topic Detail</h3>
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
                            <Label for="description">Description</Label>
                            <Input value={description} type="text" name="description" id="description"
                            onChange={(e) => setDescription(e.target.value)}/>
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{topic.name}</td>
                        <td>{topic.description}</td>
                        <td>
                            <Button color="primary" outline onClick={() => openModal(topic)} >Edit</Button>
                            {' '}
                            <Button color="danger" outline onClick={() => deleteHandler(topic)} >Delete</Button>
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

export default TopicScreen;