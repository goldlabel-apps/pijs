import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getWeather
} from '../../redux/weather/actions';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    CardContent,
    Avatar,
    Grid,
    Typography,
} from '@material-ui/core/';
import {
    ScreenHeader,
    Nav,
} from '../';

class Weather extends Component {
    render() {
        const {
            classes,
            weather,
        } = this.props;
        const sinceLastUpdate = (Date.now() - weather.updated) / 1000 / 60;
        if (!weather.updated || sinceLastUpdate > 15) {
            getWeather();
        }
        // const lastUpdated = moment.unix(weather.updated / 1000).fromNow() || `never`;
        const { data } = weather;
        if (!data) { return null }

        function degToCompass(num) {
            while (num < 0) num += 360;
            while (num >= 360) num -= 360;
            let val = Math.round((num - 11.25) / 22.5);
            let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE",
                "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
            return arr[Math.abs(val)];
        }

        const windSpeed = `${Math.round((data.wind.speed * 3.6) * 10) / 10} km/h`;
        const windDirection = `${degToCompass(data.wind.deg)}`;
        const temperature = `${Math.round((data.main.temp - 273.15) * 10) / 10} °C`;
        const pressure = `${data.main.pressure} hPa`;
        const humidity = `${data.main.humidity} %`;
        const overview = `${data.weather[0].main} (${data.weather[0].description})`;
        const outlookIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        return (

            <React.Fragment>
                <ScreenHeader title={`Weather`} icon={`weather`} />
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={8}>

                            <Typography variant={`h6`} gutterBottom>
                                In Scarborough, Queensland, Australia it is now
                            </Typography>
                            <div className={classes.weather}>

                                <Grid container>
                                    <Grid item xs={12} md={8}>

                                        <Grid container>
                                            <Grid item>
                                                <Avatar
                                                    style={{
                                                        width: 75,
                                                        height: 75,
                                                    }}
                                                    src={outlookIcon} alt={`outlook`}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant={`h3`}
                                                    style={{
                                                        paddingLeft: 8,
                                                        paddingTop: 8
                                                    }}>
                                                    {temperature}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    </Grid>

                                    <Grid item xs={12} md={4}>
                                        <Typography variant={`body1`}>
                                            {overview}
                                        </Typography>
                                        <Typography variant={`body1`}>
                                            Humidity {humidity}
                                        </Typography>

                                        <Typography variant={`body1`}>
                                            Pressure {pressure}
                                        </Typography>

                                        <Typography variant={`body1`}>
                                            Wind {windSpeed}, from {windDirection}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </div>



                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Nav isHome={true} />
                        </Grid>
                    </Grid>
                </CardContent>


            </React.Fragment>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        weather: store.weather
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Weather))));

/*
// const feelsLike = `${Math.round((data.main.feels_like - 273.15) * 10) / 10} °C`;
// const tempMin = `${Math.round((data.main.temp_min - 273.15) * 10) / 10} °C`;
// const tempMax = `${Math.round((data.main.temp_max - 273.15) * 10) / 10} °C`;
*/