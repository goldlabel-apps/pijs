import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
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
import IconLocation from '@material-ui/icons/LocationCity';
import IconLink from '@material-ui/icons/Link';


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

            case `location`:
                return (<IconLocation className={cn()} />);

            case `link`:
                return (<IconLink className={cn()} />);

            case `help`:
                return (<IconHelp className={cn()} />);

            case `github`:
                return (<GithubSVG className={classes.navIcon} />);

            case `pi`:
                return (<PiSVG className={classes.navIcon} />);

            case `home`:
                return (<IconHome className={cn()} />);

            case `share`:
                return (<IconShare className={cn()} />);

            case `contact`:
                return (<IconContact className={cn()} />);

            case `docs`:
                return (<IconDocs className={cn()} />);

            case `reset`:
                return (<IconReset className={cn()} />);

            case `refresh`:
                return (<IconReset className={cn()} />);

            case `go`:
                return (<IconGo className={cn()} />);

            case `settings`:
                return (<IconSettings className={cn()} />);

            case `social`:
                return (<IconSocial className={cn()} />);

            case `back`:
                return (<IconBack className={cn()} />);

            case `menu`:
                return (<IconMenu className={cn()} />);

            case `privacy`:
                return (<IconPrivacy className={cn()} />);

            case `api`:
                return (<IconApi className={cn()} />);

            default: {
                return null;
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
);
