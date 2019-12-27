
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
// import cn from 'classnames';
import {
    Icon,
} from './';
import {
    IconButton,
    Tooltip,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    screenHeader: {
        textAlign: 'center',
    },
    homeBtn: {
        marginRight: theme.spacing(1)
    },
}));

export default function ScreenHeader(props) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.screenHeader}>
            <Tooltip title={`PiJS Home`}>
                <IconButton
                    className={classes.homeBtn}
                    onClick={(e) => {
                        e.preventDefault();
                        history.push(`/`);
                    }}>
                    <Icon
                        icon={`pi`}
                        color={`primary`} />
                </IconButton>
            </Tooltip>
            {props.title || `Title missing`}
        </div>
    );
}
