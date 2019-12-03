import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardMedia,
    CardActions,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
    ViewActions
} from './';

const imgSrc = `/jpg/camera/deck.jpg`;

class Home extends Component {
    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.view)}>
                <div className={cn(classes.pad)}>
                    <Card className={cn(classes.card)}>
                        <CardHeader
                            title={`Listingslab Raspberry Pi Server`}
                            // subheader={`github.com/listingslab-hardware/pi-firmware`}
                            avatar={(
                                <Avatar alt={`home`} className={classes.avatar}>
                                    <Icon icon={`pi`} />
                                </Avatar>
                            )}
                            action={
                                <ViewActions />
                            }
                        />
                        <CardMedia
                            className={classes.media}
                            image={imgSrc}
                            title={`Home`}
                        />
                        <CardActions disableSpacing>
                            <div className={cn(classes.grow)} />
                            <IconButton
                                color={`primary`}
                                aria-label="share">
                                <Icon icon={`share`} />
                            </IconButton>
                            <IconButton
                                color={`primary`}
                                aria-label={`Settings`}
                                onClick={() => { }}>
                                <Icon icon={`settings`} />
                            </IconButton>
                        </CardActions>

                    </Card>
                </div>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(Home))
);
