import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import {
    Button,
    IconButton,
} from '@material-ui/core/';
import Icon from './Icon';
import { mapboxStyle } from './mapboxStyle';

class Mapbox extends Component {

    state = {
        viewport: {
            // style: mapboxStyle,
            mapboxApiAccessToken: process.env.REACT_APP_MAPBOX,
            width: '100%',
            height: 450,
            latitude: -27.199699,
            longitude: 153.114990,
            zoom: 12,
        }
    };

    affectMap = (payload) => {
        console.log('affectMap', payload)
    }

    render() {

        return (
            <React.Fragment>
                <Button variant={`contained`}>
                    Zoom In
                </Button>
                <Button variant={`contained`}>
                    Zoom Out
                </Button>
                <IconButton>
                    <Icon icon={`help`} />
                </IconButton>
                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={(viewport) => {
                        // console.log('viewport change', viewport)
                    }}
                />
            </React.Fragment>
        );
    }
}

export default Mapbox;