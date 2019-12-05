import React, { Component } from 'react';
import moment from 'moment';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardMedia,
    Grid,
    // CardContent,
    // Typography
} from '@material-ui/core/';
import {
    Icon,
    Location,
    ViewActions
} from './';

class View extends Component {

    state = {
        updated: Date.now(),
        timer: null,
        timerDelay: 30,
    }

    componentDidMount() {
        const {
            timer,
            timerDelay
        } = this.state;
        if (!timer) {
            this.setState({ timer: setInterval(this.update, timerDelay * 1000) });
        }
    }

    componentWillUnmount() {
        const {
            timer
        } = this.state;
        clearInterval(timer);
    }

    update = () => {
        this.setState({ updated: Date.now() })
    }

    render() {
        const {
            classes,
        } = this.props;
        const currentPhotoUrl = `http://pi.listingslab.io/jpg/current-photo.jpg?cb=${Date.now()}`;
        // const localDate = `${moment(Date.now()).format(`dddd, MMMM Do, h:mm:ss a`)}`;
        const piDate = `${moment(Date.now()).format(`ddd, MMM Do, h:mm:ss a`)}`;

        return (
            <div className={cn(classes.view)}>
                <div className={cn(classes.pad)}>
                    <Card className={cn(classes.card)}>
                        <CardHeader
                            title={`Pi Node Server`}
                            subheader={piDate}
                            avatar={(
                                <Avatar
                                    alt={`Pi Node Serevr`}
                                    className={classes.avatar}>
                                    <Icon icon={`pi`} />
                                </Avatar>
                            )}
                            action={
                                <ViewActions />
                            }
                        />
                        <Grid container>
                            <Grid
                                item
                                xs={12} md={9}
                                className={cn(classes.gridItem)}>
                                <CardMedia
                                    className={classes.media}
                                    image={currentPhotoUrl}
                                    alt={`Current Photo`}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12} md={3}
                                className={cn(classes.gridItem)}>
                                <Location />
                            </Grid>
                        </Grid>


                    </Card>
                </div>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(View))
);
