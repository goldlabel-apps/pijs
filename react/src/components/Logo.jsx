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
// import PiJSSVG from '../graphics/PiJSSVG'

const useStyles = makeStyles(theme => ({
    logo: {
        display: 'flex',
        marginRight: theme.spacing(),
        marginBottom: theme.spacing(),
    },
    logoText: {
        color: '#F1DD3F',
        marginTop: theme.spacing(0.65)
    },
    content: {
        width: 350,
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
                    variant={`h4`}>
                    PiJS.app
                </Typography>
            </div>
    );
}

const MemodFuncComponent = React.memo(Logo);
export default MemodFuncComponent;