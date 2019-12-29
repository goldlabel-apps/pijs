import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';
// import { pingPi } from '../redux/system/actions'

// const useStyles = makeStyles(theme => ({
//     connectionStatus: {
//         // paddingTop: theme.spacing(1.5),
//     },
// }));

export default function ConnectionStatus() {
    // const classes = useStyles();
    // const dispatch = useDispatch();
    const { pijs } = useSelector(state => state.system);
    let icon = `disconnected`;
    if (pijs.status === `connected`) {
        icon = `connected`
    }
    return (
        <IconButton disabled>
            <Icon icon={icon} color={`primary`} />
        </IconButton>
    );
}