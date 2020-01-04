import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Avatar,
    List,
    ListItem,    
    ListItemText,
    ListItemAvatar,
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function Messages() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/png/avatars/be-more-steve.png" />
                </ListItemAvatar>
                <ListItemText
                    style={{
                        color: 'white'
                    }}
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color={`inherit`}>
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}
