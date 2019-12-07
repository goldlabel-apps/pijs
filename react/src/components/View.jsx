import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    // Card,
    // CardMedia,
    Grid,
} from '@material-ui/core/';
import {
    // Icon,
    // Location,
    PaneLocation,
    PaneTitle,
    PaneWebcam,
    // ViewActions,
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

        return (
            <div className={cn(classes.view)}>
                <Grid container>
                    <Grid
                        item
                        xs={12} md={12}
                        className={cn(classes.gridItem)}>
                        <PaneTitle />
                    </Grid>
                    <Grid
                        item
                        xs={12} md={6}
                        className={cn(classes.gridItem)}>
                        <PaneWebcam />
                    </Grid>
                    <Grid
                        item
                        xs={12} md={6}
                        className={cn(classes.gridItem)}>
                        <PaneLocation />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(View))
);
