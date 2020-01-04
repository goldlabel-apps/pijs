// eslint-disable-next-line no-unused-vars
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function SidebarHeader() {
    const classes = useStyles();
    return (
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Sidebar"
                    edge="start"
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    <Icon icon={`pi-back`} />
                </IconButton>
                <Typography
                    noWrap
                    color={`textSecondary`}
                    className={classes.menuButton}
                    variant={`h6`}>
                    PiJS.app
                </Typography>
            </Toolbar>
    );
}
