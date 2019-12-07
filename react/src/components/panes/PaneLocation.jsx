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
    // IconButton,
} from '@material-ui/core/';
import Icon from '../Icon';

class PaneLocation extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <Card className={cn(classes.card)}>
                <CardHeader
                    title={`Geo Location`}
                    subheader={`Where actually is this?`}
                    avatar={(
                        <Avatar
                            alt={`Webcam`}
                            className={classes.avatar}>
                            <Icon icon={'settings'} />
                        </Avatar>
                    )}
                    action={null}
                />
                <CardContent>

                    <Typography variant={`body1`}>
                        From an IP address it's a simple
                        request to a public API like
                        <a href={`https://www.iplocation.net/`}>iplocation</a>
                        to magically reveal your <b>geo-location</b>.
                        This is what our Raspberry Pi's reveals about it.
                    </Typography>

                    <Typography variant={`body2`}>
                        <strong>IP</strong> 141.168.211.166 <br />
                        Scarborough, Queensland, Australia<br />
                        <strong>Latitude</strong> -27.4571 <br />
                        <strong>Longitude</strong> -27.4571 <br />
                        <strong>ISP</strong> Telstra Internet <br />
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneLocation))
);
