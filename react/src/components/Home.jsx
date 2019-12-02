import React, { Component } from 'react';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core/';
import { Icon } from './';
const imgSrc = `/png/OG_Image.png`;

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
                            title={`Secure Node server running on a Raspberry Pi`}
                            subheader={`https://pi.listingslab.io`}

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
                        <CardContent>
                            <Typography variant={`h6`}>
                                What is a Raspberry Pi?
                            </Typography>
                            <Typography variant={`body1`}>
                                The Raspberry Pi is a very low cost, credit-card sized computer.
                                It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Python.
                            </Typography>
                            <Typography variant={`h6`}>
                                What is it used for?
                            </Typography>

                            <Typography variant={`body1`}>
                                It also give more experienced developers a chance to do some mad cool shit. We're going to turn our Pi into a node server connected to Firebase in the cloud
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(Home))
);
