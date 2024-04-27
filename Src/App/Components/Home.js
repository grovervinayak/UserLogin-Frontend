import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {Button, Grid, Paper} from '@material-ui/core';
import {Header} from '../CommonComponents/Headers/PageHeader';
import { redirectFalse } from '../Actions/UserSignupActions';

function Home(props) {
    useEffect(() => {
        props.redirectFalse();
    }, []);
    return (
        <div>
            <Header title="User Login - Home Page"/>
            <Grid container spacing={3} style={{marginTop:'80px'}}>
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={3} style={{padding:'40px'}}>
                        <div><h2>Successfully Logged In</h2></div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    
                </Grid>
            </Grid>
            
        </div>
    )
}

const WrappedComponent = connect(({userSignupReducer}) => ({
}),
(dispatch) => ({
    redirectFalse: () => dispatch(redirectFalse())
}))(Home);

export default WrappedComponent;