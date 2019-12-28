import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
} from '@material-ui/core/';
import {
    Icon,
} from '../';

const useStyles = makeStyles(theme => ({
    btnIconPadRight: {
        marginLeft: theme.spacing(),
        paddingRight: theme.spacing(),
        paddingTop: -theme.spacing(),
    },
}));

export default function Listingslab() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Button
                variant={`outlined`}
                color={`primary`}
                onClick={() => {
                    window.open(`https://listingslab.com`, `_blank`)
                }}>
                <Icon icon={`link`} color={`primary`} />
                <span className={classes.btnIconPadRight}>
                    listingslab</span>
            </Button>
        </React.Fragment>
    );
}