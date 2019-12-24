import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    List,
    ListItem,
    Paper,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from '../';

const useStyles = makeStyles(theme => ({
    btnIconPadRight: {
        marginLeft: theme.spacing(),
        paddingRight: theme.spacing(),
    },
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(1),
            width: '100%',
        },
    },
}));

export default function OpenSource() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper variant="outlined">
                <Typography gutterBottom variant={`h5`}>
                    Open Source
                </Typography>

                <Typography gutterBottom variant={`body1`}>
                    PiJS is a Open Source, meaning that everything you see here is available to download and use for free from github.
                </Typography>

                <Typography gutterBottom variant={`body1`}>
                    The GitHub repo contains the Rasberry Pi firmware, the React PWA and the Node Express Server along with all the instructions required to replicate this project yourself.
                </Typography>

                <List>
                    <ListItem button
                        onClick={(e) => {
                            window.open(`https://github.com/listingslab-hardware/pijs`, `_blank`)
                        }}
                    >
                        <Icon
                            icon={`github`}
                            color={`primary`} />
                        <span className={cn(classes.btnIconPadRight)}>
                            View on GitHub</span>
                    </ListItem>

                </List>

            </Paper>
        </div>
    );
}