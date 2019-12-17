import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    // Card,
    Typography,
} from '@material-ui/core/';

class Map extends Component {
    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.screenCentered)}>
                <Typography
                    variant={`h4`}
                    className={cn(classes.secondary)}
                >
                    Map
                </Typography>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(Map)
);
