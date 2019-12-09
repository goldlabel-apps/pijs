import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import Icon from '../Icon';
import Mapbox from '../Mapbox';

class PaneLocation extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <Card className={cn(classes.location)}>
                <CardHeader
                    title={`Geo Location`}
                    subheader={`Lat -27.19 Lng 153.11`}
                    avatar={(
                        <Avatar
                            alt={`Webcam`}
                            className={classes.avatar}>
                            <Icon icon={'location'} />
                        </Avatar>
                    )}
                    action={
                        <Tooltip title={`More about Geo location`}>
                            <IconButton>
                                <Icon icon={`menu`} />
                            </IconButton>
                        </Tooltip>
                    }
                />
                <Mapbox />
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneLocation))
);


/*

                    <Typography variant={`body2`} className={classes.padTop}>
                        Scarborough, Queensland, Australia<br />
                        <strong>IP</strong> 141.168.211.166 <br />

                    </Typography>


<ExpansionPanel className={classes.padTop}>
    <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header">
        <Typography className={classes.heading}>

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

*/