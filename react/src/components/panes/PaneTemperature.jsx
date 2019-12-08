import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    // IconButton,
} from '@material-ui/core/';
import Icon from '../Icon';

class PaneTemperature extends Component {

    render() {
        const {
            classes,
        } = this.props;
        const temperature = `${30.27} &#176; C`;
        return (
            <Card className={cn(classes.card)}>
                <CardHeader
                    title={`Temperature`}
                    subheader={temperature}
                    avatar={(
                        <Avatar
                            alt={`Listingslab's Open Source Raspberry Pi Node Server`}
                            className={classes.avatar}>
                            <Icon icon={'temperature'} />
                        </Avatar>
                    )}
                    action={null}
                />
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneTemperature))
);
