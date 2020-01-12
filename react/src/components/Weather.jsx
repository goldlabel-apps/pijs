import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import moment from 'moment';
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    camera: {
        margin: theme.spacing(),
        maxWidth: 360,
    },
    iconBtnSpacer: {
        marginTop: theme.spacing(),
        marginLeft: theme.spacing(2),
        
    },
    moreInfoPanel: {
        background: 'rgba(255,255,255,0.01)',
    },
    grow: {
        flexGrow: 1,
    },
    white: {
        color: 'white',
    },
}));

function degToCompass(num) {
    while (num < 0) num += 360;
    while (num >= 360) num -= 360;
    let val = Math.round((num - 11.25) / 22.5);
    let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE",
        "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[Math.abs(val)];
}

function Weather() {
    
    const classes = useStyles();
    const store = getStore();
    const {
        open,
        data,
    } = useSelector(state => state.weather);
    
    if (!open || !data) {
        return null;
    }

    const title = `Weather`;
    const windSpeed = `${Math.round((data.wind.speed * 3.6) * 10) / 10} km/h`;
    const windDirection = `${degToCompass(data.wind.deg)}`;
    const temperature = `${Math.round((data.main.temp - 273.15) * 10) / 10} °C`;
    const humidity = `${data.main.humidity} %`;
    const overview = `${data.weather[0].main} (${data.weather[0].description})`;
    const outlookIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const sunrise = moment(data.sys.sunrise * 1000).fromNow();
    const sunset = moment(data.sys.sunset * 1000).fromNow();

    return (
        <Card className={classes.camera}>
            <CardHeader
                title={title}
                avatar={<React.Fragment>
                            {/* 
                                <Icon
                                    icon={`weather`}
                                    color={`primary`} /> 
                            */}
                            <Avatar src={outlookIcon} alt={overview} />
                        </React.Fragment>}
                action={
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: "WEATHER/CLOSE" });
                        }}>
                        <Icon
                            icon={`close`}
                            color={`inherit`}
                        />
                    </IconButton>
                } />
            
            <CardContent>
                
                <Typography variant={`h6`}>
                    {overview}
                </Typography>

                <Typography variant={`h5`}>
                    {temperature}
                </Typography>
                <Typography variant={`body1`}>
                    Humidity {humidity}
                </Typography>
                
                
                <Typography variant={`body1`}>
                    Wind {windSpeed}, from {windDirection}
                </Typography>

                <Typography variant={`body1`}>
                    Sunrise {sunrise}
                </Typography>

                <Typography variant={`body1`}>
                    Sunset  {sunset}
                </Typography>
            </CardContent>
        </Card>
    );
}

const MemodFuncComponent = React.memo(Weather);
export default MemodFuncComponent;
