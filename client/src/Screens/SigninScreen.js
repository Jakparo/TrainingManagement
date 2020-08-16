import React, { useEffect, useState } from 'react';

import {  Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles, TextField} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';


import { signin } from '../actions/userAction';
import {FirstBtn} from '../components/buttons';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(2, 0),
        width: '20em',
        },
    },
}));

function SigninScreen(props){
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const {loading, userInfo, error} = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search?props.location.search.split("=")[1]:'/home';
    useEffect(() => {
        if(userInfo){
            props.history.push(redirect);
        }
        return () => {
            // 
        }
    }, [userInfo]);

    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(signin(email,password));
    }
    return (
        <Row>
            <Col className='mx-auto scale-in-center' xl='3' xs='8' md='5' lg='5' sm='6' >
                <h3> FPT Login</h3>
                {loading && <div>Loading..</div>}
                {error && <Alert className='shake-horizontal' severity="error">{error}</Alert>}
                <form onSubmit={submitHandler} className={classes.root}  >
                    <TextField  label="Email" variant="outlined" value={email}
                    name="email" id="email" type="email" onChange={(e)=> setEmail(e.target.value)} />
                    <TextField  label="Password" variant="outlined" value={password}
                    name="password" id="password" type='password' onChange={(e) => setPassword(e.target.value)} />
                    <FirstBtn>Log in</FirstBtn>
                </form>
            </Col>
        </Row>
    )
}

export default SigninScreen;