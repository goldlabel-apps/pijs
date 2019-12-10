import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardMedia,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import Icon from '../Icon';

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
                    avatar={(
                        <Avatar
                            className={classes.avatar}
                            alt={`Webcam`}>
                            <Icon icon={'webcam'} />
                        </Avatar>
                    )}
                    action={
                        <Tooltip title={`More about webcam`}>
                            <IconButton>
                                <Icon icon={`menu`} />
                            </IconButton>
                        </Tooltip>
                    }
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
