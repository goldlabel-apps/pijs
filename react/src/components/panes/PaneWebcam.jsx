import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Avatar,
    Card,
    CardActions,
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

        const currentPhotoUrl = `http://pi.listingslab.io/jpg/current-photo.jpg?cb=${Date.now()}`;

        return (
            <Card className={cn(classes.card)}>
                <CardHeader
                    title={`Chicken Cam`}
                    subheader={`real time chuckens`}
                    avatar={(
                        <Avatar
                            className={classes.avatar}
                            alt={`Webcam`}>
                            <Icon icon={'webcam'} />
                        </Avatar>
                    )}
                    action={null}
                />
                <CardMedia
                    className={classes.media}
                    image={currentPhotoUrl}
                    alt={`Webcam`}
                />
                <CardActions disableSpacing>
                    <div className={cn(classes.grow)} />
                    <Tooltip title={`Share`}>
                        <IconButton
                            color={`primary`}
                            aria-label="Share"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log('share')
                            }}>
                            <Icon icon={`share`} />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneWebcam))
);
