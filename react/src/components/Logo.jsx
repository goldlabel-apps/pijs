import React from 'react';
// import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';
// import { getStore } from '../';
import {
    // Avatar,
    //Button,
    Typography,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    logo: {
        display: 'flex',
    },
    logoText: {
        color: '#F1DD3F',
        marginTop: theme.spacing()
    },
    grow: {
        flexGrow: 1,
    }
}));

function Logo(props) {
    const classes = useStyles();
    // const store = getStore();
    // const {
    //     created,
    //     visits,
    //     // fingerprint,
    // } = useSelector(state => state.system.userEntity);
    return (
        <div
            id={`logo`}
            className={classes.logo}>
            <IconButton
                onClick={(e) => {
                    e.preventDefault();
                }}>
                <Icon icon={`pi`} />
            </IconButton>
            <Typography
                className={classes.logoText}
                variant={`h6`}>
                PiJS.app
            </Typography>
        </div>
    );
}

const MemodFuncComponent = React.memo(Logo);
export default MemodFuncComponent;