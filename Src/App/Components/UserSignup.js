import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import UserSignupForm from '../CommonComponents/Forms/UserSignupForm';
import {Button, Grid, Paper} from '@material-ui/core';
import {submit} from 'redux-form';
import { SuccessMessage } from '../CommonComponents/MessageBars/FormSnackbars';
import {Header} from '../CommonComponents/Headers/PageHeader';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import { redirectFalse } from '../Actions/UserSignupActions';

function UserSignup(props) {
    useEffect(() => {
        props.redirectFalse();
    }, []);
    useEffect(() => {
        fetchRedirect();
    }, [props.signup_success])
    const fetchRedirect = () => {
        if(props.signup_success === true) {
            props.redirectFalse();
            return (
                <Redirect to="/login"/>
            )     
        }
    }
    return (
        <div>
            {fetchRedirect()}
            <Header title="user Login - Signup Page"/>
            <Grid container spacing={3} style={{marginTop:'80px'}}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} style={{padding:'40px'}}>
                        <UserSignupForm />
                        <Button variant="contained"
                            style={{backgroundColor: '#027c66', color:'white'}}
                            onClick={()=>{
                                props.submit('userSignupForm');
                            }}
                        >
                            Signup
                        </Button>
                        <div style={{marginTop:'20px'}}><Link to="/login">Already Signed Up? Login</Link></div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    
                </Grid>
            </Grid>
            
        </div>
    )
}

const WrappedComponent = connect(({userSignupReducer}) => ({
    signup_success: userSignupReducer.signup_success
}),
(dispatch) => ({
    submit: (formName) => dispatch(submit(formName)),
    redirectFalse: () => dispatch(redirectFalse())
}))(UserSignup);

export default WrappedComponent;