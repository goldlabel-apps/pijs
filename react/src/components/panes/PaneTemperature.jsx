import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core/';
import { Icon } from '../';

class PaneTemperature extends Component {

    render() {
        const {
            classes,
        } = this.props;
        // const temperature = `${30.27} C`;
        // Temperature in Kelvin. Subtracted 273.15 from this figure to convert to Celsius.
        const temperature = `...`;
        return (
            <Card className={cn(classes.cardMinHeight)}>
                <CardHeader
                    title={`Temperature`}
                    action={
                        <Tooltip title={`Full screen`}>
                            <IconButton
                                size={`small`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log ('redux action -> map/fullscreen')
                                }}
                            >
                                <Icon icon={`fullscreen`} />
                            </IconButton>
                        </Tooltip>
                    }
                />
                <CardContent>
                    <Typography variant={`h3`} className={cn(classes.centered)}>
                        {temperature}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneTemperature))
);
