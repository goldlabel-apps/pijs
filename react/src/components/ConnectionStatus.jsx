import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

export default function ConnectionStatus() {
    // const classes = useStyles();
    const { pijs } = useSelector(state => state.system);
    let icon = `disconnected`;
    if (pijs.status === `connected`) {
        icon = `connected`
    }
    // console.log(pijs.data)
    return (
        <IconButton disabled>
            <Icon icon={icon} color={`primary`} />
        </IconButton>
    );
}