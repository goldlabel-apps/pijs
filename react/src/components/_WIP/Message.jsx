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
    message: {
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function Message() {
    const classes = useStyles();

    return (
        <List className={classes.message}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Steve" src="/png/avatars/anon.png" />
                </ListItemAvatar>
                <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color={`inherit`}>
                                Steve
                            </Typography>
                            {` > I'll be in your neighborhood doing errands this…`}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}
