import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import ReactMapboxGl, { /*Layer, */Feature } from 'react-mapbox-gl';
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

const MapLocation = ReactMapboxGl({
    accessToken: process.env.REACT_APP_MAPBOX
});

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
                            <Icon icon={'location'} />
                        </Avatar>
                    )}
                    action={null}
                />
                <CardContent>



                    <Typography variant={`body2`}>
                        <strong>IP</strong> 141.168.211.166 <br />
                        Scarborough, Queensland, Australia<br />
                        <strong>Latitude</strong> -27.4571 <br />
                        <strong>Longitude</strong> -27.4571 <br />
                        <strong>ISP</strong> Telstra Internet <br /><br />
                    </Typography>

                    <MapLocation
                        // eslint-disable-next-line react/style-prop-object
                        style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: '125px',
                            width: '100%'
                        }}
                    >
                        <Feature coordinates={[0, 0]} />
                    </MapLocation>

                    <ExpansionPanel className={classes.padTop}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
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
