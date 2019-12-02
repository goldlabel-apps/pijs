import React, { Component } from 'react';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardMedia,
} from '@material-ui/core/';
import { Icon } from './';
const imgSrc = `/jpg/brisvegas.jpg`;

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
                            title={`Listingslab Raspberry Pi Firmware`}
                            subheader={`github.com/listingslab-hardware/pi-firmware`}

                            avatar={(
                                <Avatar alt={`home`} className={classes.avatar}>
                                    <Icon icon={`pi`} />
                                </Avatar>
                            )}
                        // action={
                        //     <ViewActions />
                        // }
                        />
                        <CardMedia
                            className={classes.media}
                            image={imgSrc}
                            title={`Home`}
                        />

                    </Card>
                </div>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(Home))
);
