import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconPrivacy from '@material-ui/icons/Accessibility';
import IconHome from '@material-ui/icons/Home';
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
import IconTime from '@material-ui/icons/Restore';
import IconEnviro from '@material-ui/icons/InsertChart';

import {
    GithubSVG,
    PiJSSVG,
    // TimeSVG,
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
            color,
        } = this.props;
        let iconColor = `secondary`;
        if (color) {
            iconColor = color
        }
        switch (icon) {

            case `enviro`:
                return (<IconEnviro color={iconColor} />);

            case `time`:
                return (<IconTime color={iconColor} />);

            case `github`:
                return (<GithubSVG color={`#000`} className={classes.navIcon} />);

            case `weather`:
                return (<IconWeather color={iconColor} />);

            case `close`:
                return (<IconClose color={iconColor} />);

            case `fullscreen`:
                return (<IconFullscreen color={iconColor} />);

            case `zoomout`:
                return (<IconZoomOut color={iconColor} />);

            case `zoomin`:
                return (<IconZoomIn color={iconColor} />);

            case `humidity`:
                return (<IconHumidity color={iconColor} />);

            case `pressure`:
                return (<IconPressure color={iconColor} />);

            case `airquality`:
                return (<IconAirQuality color={iconColor} />);

            case `temperature`:
                return (<IconTemperature color={iconColor} />);

            case `webcam`:
                return (<IconWebcam color={iconColor} />);

            case `map`:
                return (<IconMap color={iconColor} />);

            case `link`:
                return (<IconLink color={iconColor} />);

            case `help`:
                return (<IconHelp color={iconColor} />);

            case `pi`:
                return (<PiJSSVG className={classes.navIcon} />);

            case `home`:
                return (<IconHome color={iconColor} />);

            case `share`:
                return (<IconShare color={iconColor} />);

            case `contact`:
                return (<IconContact color={iconColor} />);

            case `docs`:
                return (<IconDocs color={iconColor} />);

            case `reset`:
                return (<IconReset color={iconColor} />);

            case `refresh`:
                return (<IconReset color={iconColor} />);

            case `go`:
                return (<IconGo color={iconColor} />);

            case `settings`:
                return (<IconSettings color={iconColor} />);

            case `social`:
                return (<IconSocial color={iconColor} />);

            case `back`:
                return (<IconBack color={iconColor} />);

            case `menu`:
                return (<IconMenu color={iconColor} />);

            case `privacy`:
                return (<IconPrivacy color={iconColor} />);

            case `api`:
                return (<IconApi color={iconColor} />);

            default: {
                return null;
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
);
