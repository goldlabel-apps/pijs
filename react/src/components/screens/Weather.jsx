import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import {
    getWeather
} from '../../redux/weather/actions';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Avatar,
    IconButton,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from '@material-ui/core/';
import { Icon } from '../';

class Weather extends Component {
    render() {
        const {
            classes,
            mode,
            history,
            weather,
        } = this.props;
        let screenMode = `full`;
        let shouldUpdate = false;
        if (mode) { screenMode = mode }
        if (!weather.updated) { shouldUpdate = true }
        if (shouldUpdate) {
            getWeather();
        }
        const lastUpdated = moment.unix(weather.updated / 1000).fromNow() || `never`;
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

        // const name = `${data.name}, ${data.sys.country}`;
        const windSpeed = `${Math.round((data.wind.speed * 3.6) * 10) / 10} km/h`;
        const windDirection = `${degToCompass(data.wind.deg)}`;
        const temperature = `${Math.round((data.main.temp - 273.15) * 10) / 10} °C`;
        // const feelsLike = `${Math.round((data.main.feels_like - 273.15) * 10) / 10} °C`;
        // const tempMin = `${Math.round((data.main.temp_min - 273.15) * 10) / 10} °C`;
        // const tempMax = `${Math.round((data.main.temp_max - 273.15) * 10) / 10} °C`;
        const pressure = `${data.main.pressure} hPa`;
        const humidity = `${data.main.humidity} %`;
        const overview = `${data.weather[0].main} (${data.weather[0].description})`;
        const outlookIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        className={cn(classes.screenCardHeader)}
                        title={`Weather`}
                        subheader={`Updated ${lastUpdated}`}
                        avatar={
                            screenMode === 'preview' ?
                                <IconButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        history.push(`/weather`)
                                    }}
                                >
                                    <Icon
                                        icon={`weather`}
                                        color={`secondary`}
                                    />
                                </IconButton>
                                : <Icon
                                    className={cn(classes.padIcon)}
                                    icon={`weather`}
                                    color={`secondary`}
                                />
                        }
                        action={
                            screenMode === 'full' ?
                                <IconButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        history.push(`/`)
                                    }}
                                >
                                    <Icon icon={`home`} />
                                </IconButton>
                                : null
                        }
                    />
                    <CardContent>

                        <Grid container>

                            <Grid item xs={12} sm={6}>
                                <Typography variant={`h5`}>
                                    Overview
                                </Typography>
                                <Typography variant={`h4`}>
                                    {temperature}
                                </Typography>
                                <Typography variant={`body1`}>
                                    {overview}
                                </Typography>
                                <Avatar
                                    style={{
                                        width: 75,
                                        height: 75,
                                    }}
                                    src={outlookIcon} alt={``} />
                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <Typography variant={`body2`}>
                                    Humidity
                                </Typography>
                                <Typography variant={`h6`}>
                                    {humidity}
                                </Typography>
                                <Typography variant={`body2`}>
                                    Pressure
                                </Typography>
                                <Typography variant={`h6`}>
                                    {pressure}
                                </Typography>
                                <Typography variant={`body2`}>
                                    Wind
                                </Typography>
                                <Typography variant={`h6`}>
                                    {windSpeed}, {windDirection}
                                </Typography>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </div>
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