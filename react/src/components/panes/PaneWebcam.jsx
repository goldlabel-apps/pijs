import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Card,
    CardHeader,
    CardMedia,
} from '@material-ui/core/';

class PaneWebcam extends Component {

    render() {
        const {
            classes,
        } = this.props;

        const currentPhotoUrl = `https://pi.listingslab.io/jpg/current-photo.jpg?cb=${Date.now()}`;

        return (
            <Card className={cn(classes.webcam)}>
                <CardHeader
                    title={`Chicken Cam`}
                    subheader={`Real time chuckens`}
                />
                <CardMedia
                    className={classes.media}
                    image={currentPhotoUrl}
                    alt={`Webcam`}
                />
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneWebcam))
);
