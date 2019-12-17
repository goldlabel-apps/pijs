import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconPrivacy from '@material-ui/icons/Accessibility';
import IconHome from '@material-ui/icons/HomeOutlined';
import IconGo from '@material-ui/icons/PlayCircleOutline';
import IconSettings from '@material-ui/icons/Settings';
import IconSocial from '@material-ui/icons/PlayCircleOutline';
import IconReset from '@material-ui/icons/Refresh';
import IconDocs from '@material-ui/icons/FileCopy';
import IconApi from '@material-ui/icons/PhonelinkSetupOutlined';
import IconBack from '@material-ui/icons/ArrowBack';
import IconContact from '@material-ui/icons/MailOutline';
import IconMenu from '@material-ui/icons/Menu';
import IconShare from '@material-ui/icons/Share';
import IconHelp from '@material-ui/icons/Help';
import IconLink from '@material-ui/icons/Link';
import IconWebcam from '@material-ui/icons/CameraAlt';
import IconTemperature from '@material-ui/icons/AcUnit';
import IconAirQuality from '@material-ui/icons/ErrorOutline';
import IconPressure from '@material-ui/icons/FormatLineSpacing';
import IconHumidity from '@material-ui/icons/Whatshot';
import IconZoomIn from '@material-ui/icons/ZoomIn';
import IconZoomOut from '@material-ui/icons/ZoomOut';
import IconFullscreen from '@material-ui/icons/Fullscreen';
import IconClose from '@material-ui/icons/Close';
import IconWeather from '@material-ui/icons/AcUnit';
import IconMap from '@material-ui/icons/Explore';

import {
    GithubSVG,
    // PiSVG,
} from '../graphics';

const styles = theme => ({
    navIcon: {
        width: 24,
        height: 24,
    },
    homeIcon: {
        marginRight: theme.spacing(),
    },
    white: {
        color: 'white',
    }
});

class Icon extends Component {

    render() {
        const {
            classes,
            icon,
        } = this.props;

        switch (icon) {

            case `weather`:
                return (<IconWeather color={`secondary`} />);

            case `close`:
                return (<IconClose color={`secondary`} />);

            case `fullscreen`:
                return (<IconFullscreen color={`secondary`} />);

            case `zoomout`:
                return (<IconZoomOut color={`secondary`} />);

            case `zoomin`:
                return (<IconZoomIn color={`secondary`} />);

            case `humidity`:
                return (<IconHumidity color={`secondary`} />);

            case `pressure`:
                return (<IconPressure color={`secondary`} />);

            case `airquality`:
                return (<IconAirQuality color={`secondary`} />);

            case `temperature`:
                return (<IconTemperature color={`secondary`} />);

            case `webcam`:
                return (<IconWebcam color={`secondary`} />);

            case `map`:
                return (<IconMap color={`secondary`} />);

            case `link`:
                return (<IconLink color={`secondary`} />);

            case `help`:
                return (<IconHelp color={`secondary`} />);

            case `github`:
                return (<GithubSVG className={classes.navIcon} />);

            // case `pi`:
            //     return (<PiSVG className={classes.navIcon} />);

            case `home`:
                return (<IconHome color={`secondary`} />);

            case `share`:
                return (<IconShare color={`secondary`} />);

            case `contact`:
                return (<IconContact color={`secondary`} />);

            case `docs`:
                return (<IconDocs color={`secondary`} />);

            case `reset`:
                return (<IconReset color={`secondary`} />);

            case `refresh`:
                return (<IconReset color={`secondary`} />);

            case `go`:
                return (<IconGo color={`secondary`} />);

            case `settings`:
                return (<IconSettings color={`secondary`} />);

            case `social`:
                return (<IconSocial color={`secondary`} />);

            case `back`:
                return (<IconBack color={`secondary`} />);

            case `menu`:
                return (<IconMenu color={`secondary`} />);

            case `privacy`:
                return (<IconPrivacy color={`secondary`} />);

            case `api`:
                return (<IconApi color={`secondary`} />);

            default: {
                return null;
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
);
