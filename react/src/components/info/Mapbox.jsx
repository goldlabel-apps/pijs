import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import cn from 'classnames';
import {
    // List,
    // ListItem,
    Paper,
    Typography,
} from '@material-ui/core/';
// import {
//     Icon,
// } from '../';

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

export default function Mapbox() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper variant="outlined">
                <Typography gutterBottom variant={`body1`}>
                    Mapbox gives us precise location data and powerful developer tools.
                </Typography>

                {/* <List>
                    <ListItem button
                        onClick={(e) => {
                            console.log('useRouter?')
                        }}
                    >
                        <Icon
                            icon={`map`}
                            color={`primary`} />
                        <span className={cn(classes.btnIconPadRight)}>
                            View Map</span>
                    </ListItem>
                </List> */}

            </Paper>
        </div>
    );
}