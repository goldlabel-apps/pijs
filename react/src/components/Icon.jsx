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
import IconLocation from '@material-ui/icons/MyLocation';
import IconLink from '@material-ui/icons/Link';
import IconWebcam from '@material-ui/icons/Camera';
import IconTemperature from '@material-ui/icons/BeachAccess';
import IconAirQuality from '@material-ui/icons/Person';
import IconPressure from '@material-ui/icons/Security';
import IconHumidity from '@material-ui/icons/CenterFocusWeak';

import {
    GithubSVG,
    PiSVG,
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

            case `humidity`:
                return (<IconHumidity color={`primary`} />);

            case `pressure`:
                return (<IconPressure color={`primary`} />);

            case `airquality`:
                return (<IconAirQuality color={`primary`} />);

            case `temperature`:
                return (<IconTemperature color={`primary`} />);

            case `webcam`:
                return (<IconWebcam color={`primary`} />);

            case `location`:
                return (<IconLocation color={`primary`} />);

            case `link`:
                return (<IconLink color={`primary`} />);

            case `help`:
                return (<IconHelp color={`primary`} />);

            case `github`:
                return (<GithubSVG className={classes.navIcon} />);

            case `pi`:
                return (<PiSVG className={classes.navIcon} />);

            case `home`:
                return (<IconHome color={`primary`} />);

            case `share`:
                return (<IconShare color={`primary`} />);

            case `contact`:
                return (<IconContact color={`primary`} />);

            case `docs`:
                return (<IconDocs color={`primary`} />);

            case `reset`:
                return (<IconReset color={`primary`} />);

            case `refresh`:
                return (<IconReset color={`primary`} />);

            case `go`:
                return (<IconGo color={`primary`} />);

            case `settings`:
                return (<IconSettings color={`primary`} />);

            case `social`:
                return (<IconSocial color={`primary`} />);

            case `back`:
                return (<IconBack color={`primary`} />);

            case `menu`:
                return (<IconMenu color={`primary`} />);

            case `privacy`:
                return (<IconPrivacy color={`primary`} />);

            case `api`:
                return (<IconApi color={`primary`} />);

            default: {
                return null;
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
);
