import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@material-ui/core/';
import {
    Nav,
    ScreenHeader,
} from '../';

const useStyles = makeStyles(theme => ({
    content: {
        marginRight: theme.spacing(),
        marginLeft: theme.spacing(),
    },
    media: {
        height: 0,
        paddingTop: '50%',
        marginBottom: theme.spacing(),
    },
}));

export default function About() {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <ScreenHeader icon={`docs`} title={`About PiJS`} />
            <CardContent>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            className={classes.media}
                            title={`About PiJS`}
                            image={`/png/open-graph.png`}
                        />
                        <Typography variant={`body1`} gutterBottom>
                            PiJS is a Open Source, meaning that everything you see here is available to download and use for free from github.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Nav />
                    </Grid>
                </Grid>
            </CardContent>
        </div>
    );
}