import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from '@material-ui/core/';
import {
    Nav,
    ScreenHeader,
} from '../';

const useStyles = makeStyles(theme => ({
    infoPaper: {
        marginRight: theme.spacing(),
        marginLeft: theme.spacing(),
        boxShadow: 'none',
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
        <Paper variant="outlined" className={classes.infoPaper}>
            <ScreenHeader icon={`docs`} title={`About PiJS`} />
            <CardContent>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <CardMedia
                            className={classes.media}
                            title={`About PiJS`}
                            image={`/png/open-graph.png`}
                        />
                        <Typography variant={`body1`} gutterBottom>
                            PiJS is a Open Source, meaning that everything you see here is available to download and use for free from github.
                            </Typography>


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Nav />
                    </Grid>
                </Grid>
            </CardContent>
        </Paper>
    );
}