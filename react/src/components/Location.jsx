import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    // Avatar,
    // Card,
    // CardHeader,
    // CardMedia,
    // CardContent,
    Typography
} from '@material-ui/core/';
import {
    Icon
} from './';

class Location extends Component {

    state = {
        updated: Date.now(),
        timer: null,
        timerDelay: 60,
    }


    render() {
        const {
            classes,
        } = this.props;

        return (
            <div className={cn(classes.view)}>
                <div className={cn(classes.pad)}>
                    <Typography variant={`h5`}>
                        Pi Location
                    </Typography>
                    <Typography variant={`body1`}>
                        Brisbane, Australia
                    </Typography>
                    <Icon icon={`location`} />

                </div>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(Location))
);
