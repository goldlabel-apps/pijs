import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            weather,
        } = this.props;
        if (!weather.data) {
            return null;
        }
        const { temp } = weather.data.main;
        const temperatureDisplay = `${Math.round((temp - 273.15) * 10 ) / 10} °C`;
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
                        {temperatureDisplay}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        weather: store.weather,
    };
  };
  
  export default (connect(
      mapStateToProps,
      null
)(withStyles(styles, { withTheme: true })(withRouter(PaneTemperature))));
    