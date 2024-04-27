import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
var vertical ='top';
var horizontal = 'right';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function SuccessMessage(props) {
    return (
        <Snackbar open={props.open} autoHideDuration={6000}>
            <Alert severity="success">
                {props.message}
            </Alert>
        </Snackbar>
    )
}

export function ErrorMessage(props) {
    return (
        <Snackbar open={props.open} autoHideDuration={6000} anchorOrigin={{ vertical, horizontal }}>
            <Alert severity="error">
                {props.message}
            </Alert>
        </Snackbar>
    )
}