import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
export function Header(props) {
    return (
        <AppBar>
          <Toolbar>
            <Typography variant="h6">{props.title}</Typography>
          </Toolbar>
        </AppBar>
    )
}