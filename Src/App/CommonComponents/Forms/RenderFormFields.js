import React from 'react';
import {OutlinedInput, InputLabel} from '@material-ui/core';

export const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) => (
    <div>
        {touched && error ?
            <InputLabel style={{ color: '#f44336', fontSize: '14px', marginBottom: '5px'}}>
                {label}
            </InputLabel> :
            <InputLabel style={{ color: 'black', fontSize: '14px', marginBottom: '5px'}}>
                {label}
            </InputLabel>
        }
        
        <OutlinedInput
            key={label}
            style={{ marginTop:'4px', borderRadius: '0px', width:'99%' }}
            margin="dense"
            error={touched && error}
            id={label}
            {...input}
            {...custom}
        />
        {touched && error ? 
            <span style={{color: '#f44336'}}>{error}</span> : null}
    </div>
  )