import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
    CardMedia,
    List,
    ListItem,
    Paper,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
    ScreenHeader,
} from '../';

const useStyles = makeStyles(theme => ({
    btnIconPadRight: {
        marginLeft: theme.spacing(),
        paddingRight: theme.spacing(),
    },
    infoPaper: {
        marginRight: theme.spacing(),
        marginLeft: theme.spacing(),
        boxShadow: 'none',
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

export default function About() {
    const classes = useStyles();

    return (
        <Paper variant="outlined" className={classes.infoPaper}>

            <ScreenHeader icon={`docs`} title={`About PiJS`} />

            <Typography gutterBottom variant={`body1`}>
                PiJS is a Open Source, meaning that everything you see here is available to download and use for free from github.
            </Typography>

            <CardMedia
                className={cn(classes.mediaSq)}
                title={`What is a Raspberry Pi?`}
                image={`/jpg/pi.jpg`}
            />

            <List>
                <ListItem button
                    onClick={(e) => {
                        // window.open(`https://github.com/listingslab-hardware/pijs`, `_blank`)
                    }}
                >
                    <Icon
                        icon={`github`}
                        color={`primary`} />
                    <span className={cn(classes.btnIconPadRight)}>
                        Open Source</span>
                </ListItem>
            </List>

        </Paper>
    );
}