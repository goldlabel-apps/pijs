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
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
} from '@material-ui/core/';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Icon from '../Icon';
import Mapbox from '../Mapbox';

class PaneLocation extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <Card className={cn(classes.card)}>
                <CardHeader
                    title={`Geo Location`}
                    subheader={`Where is this?`}
                    avatar={(
                        <Avatar
                            alt={`Webcam`}
                            className={classes.avatar}>
                            <Icon icon={'location'} />
                        </Avatar>
                    )}
                    action={null}
                />
                <CardContent>
                    <Mapbox />

                    <Typography variant={`body2`} className={classes.padTop}>
                        Scarborough, Queensland, Australia<br />
                        <strong>IP</strong> 141.168.211.166&nbsp;
                        <strong>Latitude </strong>-27.199699<strong>
                            Longitude</strong> 153.114990
                    </Typography>

                    <ExpansionPanel className={classes.padTop}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header">
                            <Typography className={classes.heading}>
                                About IP addresses
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography variant={`body1`}>
                                From your IP address it's easy to find information
                                about your real wold loction by using a service like
                                &nbsp;<a
                                    style={{ color: 'black' }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://www.iplocation.net/`}>
                                    iplocation</a> which magically reveal your <b>geo-location</b>. Above is what our Raspberry Pi's IP reveal.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </CardContent>
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneLocation))
);
