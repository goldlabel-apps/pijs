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
    PaneCloud,
} from './';
import { getWeather } from '../redux/openWeather/actions'

// var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

class Dashboard extends Component {

    // state = {
    //     updated: Date.now(),
    //     timer: null,
    //     timerDelay: 15,
    // }

    // componentDidMount() {
        // const {
        //     timer,
        //     timerDelay
        // } = this.state;
        // if (!timer) {
        //     this.setState({ timer: setInterval(this.update, timerDelay * 1000) });
        // }


        // let lat = -27.19;
        // let lon = 153.11;
        // let baseURL = `https://api.openweathermap.org/data/2.5/weather`;
        // let endpoint = `${baseURL}?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_OPEN_WEATHER}`;
        // console.log(endpoint);

    // }

    // componentWillUnmount() {
    //     const {
    //         timer
    //     } = this.state;
    //     clearInterval(timer);
    // }

    // update = () => {
    //     this.setState({ updated: Date.now() })
    // }

    render() {
        const {
            classes,
            cloud,
            humidity,
            map,
            pressure,
            temperature,
            webcam,
        } = this.props;
        
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
                    {cloud.open ? <Grid
                        item
                        xs={12} sm={6} md={3} lg={3} xl={2}
                        className={cn(classes.gridItem)}>
                        <PaneCloud />
                    </Grid>: null}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        webcam: store.system.webcam,
        temperature: store.system.temperature,
        humidity: store.system.humidity,
        map: store.system.map,
        pressure: store.system.pressure,
        cloud: store.system.cloud,
    };
  };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//      systemOpenMessage: (params) => dispatch(systemOpenMessage(params)),
//     };
//   };
  
  export default (connect(
      mapStateToProps,
      null
    )(withStyles(styles, { withTheme: true })(withRouter(Dashboard))));