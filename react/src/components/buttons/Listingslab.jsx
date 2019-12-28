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
                variant={`contained`}
                color={`primary`}
                onClick={() => {
                    window.open(`https://listingslab.com`, `_blank`)
                }}>
                <Icon icon={`listingslab`} color={`#F1DD3F`} />
                <span className={classes.btnIconPadRight}>
                    listingslab</span>
            </Button>
        </React.Fragment>
    );
}