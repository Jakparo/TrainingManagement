import React from 'react';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const PinkBotton = withStyles((theme) => ({
    root: {
    color: 'black',
    backgroundColor: '#f4f4f4',
    opacity: 0.8,
    boxShadow: 'none',
    width: '23em',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    '&:hover': {
        color: 'white',
        backgroundColor: '#E00099',
        opacity: 0.9,
        boxShadow: "none",
    },'&:active': {
        boxShadow: 'none',
        borderColor: 'none',
    },'&:focus': {
        boxShadow: 'none',
        borderColor: '#E00099',
    },
    },
}))(Button);

const PurpleBotton = withStyles((theme) => ({
    root: {
    color: 'black',
    backgroundColor: '#f4f4f4',
    opacity: 0.8,
    boxShadow: 'none',
    width: '23em',
    alignItems: 'center',
    '&:hover': {
        color: 'white !importance',
        backgroundColor: '#7364ff',
        opacity: 0.9,
        boxShadow: "none",
        textDecoration:'none',
    },'&:active': {
        boxShadow: 'none',
        borderColor: 'none',
        outline:'none'
    },'&:focus': {
        boxShadow: 'none',
        borderColor: '#E00099',
    },
    },
}))(Button);


export const FirstBtn = function (props) {
    const children = props.children;
    return (
        <PinkBotton type='submit' variant="contained">
            {children}
        </PinkBotton>
    );
}

export const SecondBtn=function (props) {
    const children = props.children;
    return (
        <PurpleBotton variant="contained">
            {children}
        </PurpleBotton>
    );
}



