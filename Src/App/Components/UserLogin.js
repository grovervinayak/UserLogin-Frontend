import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import UserLoginForm from '../CommonComponents/Forms/UserLoginForm';
import {Button, Grid, Paper} from '@material-ui/core';
import {submit} from 'redux-form';
import {Header} from '../CommonComponents/Headers/PageHeader';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import { redirectFalse } from '../Actions/UserSignupActions';

function UserLogin(props) {
    useEffect(() => {
        props.redirectFalse();
    }, []);
    useEffect(() => {
        fetchRedirect();
    }, [props.login_success])
    const fetchRedirect = () => {
        if(props.login_success === true) {
            props.redirectFalse();
            return (
                <Redirect to="/home"/>
            )     
        }
    }
    return (
        <div>
            {fetchRedirect()}
            <Header title="User Login - Login Page"/>
            <Grid container spacing={3} style={{marginTop:'80px'}}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} style={{padding:'40px'}}>
                        <UserLoginForm />
                        <Button variant="contained"
                            style={{backgroundColor: '#027c66', color:'white'}}
                            onClick={()=>{
                                props.submit('userLoginForm');
                            }}
                        >
                            Login
                        </Button>
                        <div style={{marginTop:'20px'}}><Link to="/signup">Not a member? Signup</Link></div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    
                </Grid>
            </Grid>
            
        </div>
    )
}

const WrappedComponent = connect(({userSignupReducer}) => ({
    login_success: userSignupReducer.login_success
}),
(dispatch) => ({
    submit: (formName) => dispatch(submit(formName)),
    redirectFalse: () => dispatch(redirectFalse())
}))(UserLogin);

export default WrappedComponent;