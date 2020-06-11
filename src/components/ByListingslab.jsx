import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    byListingslab: {
        opacity: 1,
        display: 'block',
        width: '100vw',
        textAlign: 'center',
        //width: 200,
    },
    logoColor: {
        color: 'rgba(255,255,255,1)',
    },
    logoText:{
        marginTop: -15
    },
    logo: {
        marginRight: theme.spacing(2)
    },
}));

function ByListingslab() {
    const classes = useStyles();
    return (
        <div id={`by-listingslab`} className={classes.byListingslab}>
            <Typography variant={`h6`} className={classes.logoColor}>
                <span className={classes.logo}>
                <Icon
                    icon={`spade`}
                    color={`primary`}     
                />
                </span>
                <span className={classes.logoText}>by listingslab</span>
            </Typography>
        </div>
    );
}

const MemodFuncComponent = React.memo(ByListingslab);
export default MemodFuncComponent;