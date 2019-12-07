import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import Icon from './Icon';

class ViewActions extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <React.Fragment>
                <Tooltip title={`Refresh`}>
                    <IconButton
                        className={cn(classes.none)}
                        color={`primary`}
                        aria-label="Refresh"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.assign(`/?reset=${Date.now()}`);
                        }}>
                        <Icon icon={`refresh`} />
                    </IconButton>
                </Tooltip>
                <Tooltip title={`GitHub`}>
                    <IconButton
                        className={cn(classes.none)}
                        color={`primary`}
                        aria-label="Refresh"
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(`https://github.com/listingslab-hardware/pi-firmware`, `_blank`);
                        }}>
                        <Icon icon={`github`} />
                    </IconButton>
                </Tooltip>
            </React.Fragment>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(ViewActions))
);
