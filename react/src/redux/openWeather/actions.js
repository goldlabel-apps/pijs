// Open Weather Actions

import {
    createAction,
} from '@reduxjs/toolkit'

export const getWeather = createAction('OPENWEATHER/GET_WEATHER')



        // import axios from 'axios';
        // let lat = -27.19;
        // let lon = 153.11;
        // let baseURL = `https://api.openweathermap.org/data/2.5/weather`;
        // let endpoint = `${baseURL}?lat=${lat}&lon=${lon}&APPID=${process.env.REACT_APP_OPEN_WEATHER}`;

        // // window.open(endpoint, '_blank')
        
        // axios.get(endpoint)
        //     .then(function (response) {
        //     console.log(response);
        //     })
        //     .catch(function (error) {
        //     console.log(error);
        //     })
        //     .finally(function () {
        //     console.log('finally');
        //     });