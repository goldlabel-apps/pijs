import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import moment from 'moment';
import {
    Avatar,
    Card,
    CardHeader,
    // IconButton,
} from '@material-ui/core/';
import ViewActions from '../ViewActions';
import Icon from '../Icon';

class PaneTitle extends Component {

    render() {
        const {
            classes,
        } = this.props;
        const piDate = `${moment(Date.now()).format(`ddd, MMM Do, h:mm:ss a`)}`;
        return (
            <Card className={cn(classes.cardTitle)}>
                <CardHeader
                    title={`Scarborough`}
                    subheader={piDate}
                    avatar={(
                        <Avatar
                            alt={`Listingslab's Open Source Raspberry Pi Node Server`}
                            className={classes.avatar}>
                            <Icon icon={'pi'} />
                        </Avatar>
                    )}
                    action={
                        <ViewActions />
                    }
                />
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneTitle))
);
