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
class PaneHumidity extends Component {

    render() {
        const {
            classes,
            weather,
        } = this.props;
        if (!weather.data) {
            return null;
        }
        // console.log (weather.data)
        const { humidity } = weather.data.main;
        const humidityDisplay = `${humidity} %`;
        return (
            <Card className={cn(classes.cardMinHeight)}>
                <CardHeader
                    title={`Humidity`}
                    action={
                        <Tooltip title={`Full screen`}>
                            <IconButton
                                size={`small`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log ('redux action -> PaneHumidity/fullscreen')
                                }}
                            >
                                <Icon icon={`fullscreen`} />
                            </IconButton>
                        </Tooltip>
                    }
                />
                <CardContent>
                    <Typography variant={`h3`} className={cn(classes.centered)}>
                        {humidityDisplay}
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
)(withStyles(styles, { withTheme: true })(withRouter(PaneHumidity))));