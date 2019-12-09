import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core/';
import Icon from '../Icon';

class PaneAirQuality extends Component {

    render() {
        const {
            classes,
        } = this.props;
        const airQuality = `${87} %`;
        return (
            <Card className={cn(classes.cardMinHeight)}>
                <CardHeader
                    title={`Air Quality`}
                    subheader={`(Percentage of best)`}
                    avatar={(
                        <Avatar
                            alt={`Listingslab's Open Source Raspberry Pi Node Server`}
                            className={classes.avatar}>
                            <Icon icon={'airquality'} />
                        </Avatar>
                    )}
                    action={null}
                />
                <CardContent>
                    <Typography variant={`h3`} className={cn(classes.centered)}>
                        {airQuality}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneAirQuality))
);
