import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    Grid,
} from '@material-ui/core/';
import {
    PaneMap,
    PaneWebcam,
    PaneTemperature,
    PaneHumidity,
    PanePressure,
    PaneOutlook,
} from './';
import { initWeather } from '../redux/weather/actions'

class Dashboard extends Component {

    componentDidMount() {
        initWeather()
    }




    render() {
        const {
            classes,
            cloud,
            humidity,
            map,
            pressure,
            temperature,
            webcam,
            // weather,
        } = this.props;

        // console.log('weather', weather)
        
        return (
            <div className={cn(classes.view)}>
                <Grid container>
                    {webcam.open ? <Grid
                        item
                        xs={12} sm={8} md={8} lg={8} xl={8}
                        className={cn(classes.gridItem)}>
                        <PaneWebcam />
                    </Grid> : null}
                    {map.open ? <Grid
                        item
                        xs={12} sm={4} md={4} lg={4} xl={4}
                        className={cn(classes.gridItem)}>
                        <PaneMap />
                    </Grid> : null}
                    {cloud.open ? <Grid
                        item
                        xs={12} sm={6} md={3} lg={3} xl={2}
                        className={cn(classes.gridItem)}>
                        <PaneOutlook />
                    </Grid>: null}
                    {temperature.open ? <Grid
                        item
                        xs={12} sm={6} md={3} lg={3} xl={2}
                        className={cn(classes.gridItem)}>
                        <PaneTemperature />
                    </Grid> : null}
                    {humidity.open ? <Grid
                        item
                        xs={12} sm={6} md={3} lg={3} xl={2}
                        className={cn(classes.gridItem)}>
                        <PaneHumidity />
                    </Grid> : null}
                    {pressure.open ? <Grid
                        item
                        xs={12} sm={6} md={3} lg={3} xl={2}
                        className={cn(classes.gridItem)}>
                        <PanePressure />
                    </Grid> : null}
                    
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        weather: store.weather,
        webcam: store.system.webcam,
        temperature: store.system.temperature,
        humidity: store.system.humidity,
        map: store.system.map,
        pressure: store.system.pressure,
        cloud: store.system.cloud,
    };
  };
  
  export default (connect(
      mapStateToProps,
      null
    )(withStyles(styles, { withTheme: true })(withRouter(Dashboard))));