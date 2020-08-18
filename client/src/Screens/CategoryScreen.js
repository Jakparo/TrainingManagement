import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Row, Col, Table,
FormGroup, Label, Input, Button, Form} from 'reactstrap';

import { detailsCategory,  saveCategory, deleteCategory} from '../actions/staffActions';
import  url  from '../icons/return.svg'

function CategoryScreen(props){

    const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const categorySave = useSelector(state => state.categorySave);
    const { loading: loadingSave, success: successSave, error: errorSave } = categorySave;
    
    const categoryDetails = useSelector(state => state.categoryDetails );
    const { category, loading, error } = categoryDetails;

    const categoryDelete = useSelector(state => state.categoryDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = categoryDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successSave) {
            setModalVisible(false);
        }
        dispatch(detailsCategory(props.match.params.id));
        return () => {
        
        }
    }, [successSave]);

    const openModal = (category) => {
        setModalVisible(true);
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
    }
    const deleteHandler = (category) => {
        dispatch(deleteCategory(category._id));
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
                {
                    modalVisible && 
                <Col className='mx-auto' sm='10' xl='4' lg='4' md='4' xs='10'>
                    <h3> Category Detail</h3>
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
                        <td>{category.name}</td>
                        <td>{category.description}</td>
                        <td>
                            <Button color="primary" outline onClick={() => openModal(category)} >Edit</Button>
                            {' '}
                            <Button color="danger" outline onClick={() => deleteHandler(category)} >Delete</Button>
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

export default CategoryScreen;