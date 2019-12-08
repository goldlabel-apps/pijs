import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Mapbox extends Component {

    state = {
        viewport: {
            mapboxApiAccessToken: process.env.REACT_APP_MAPBOX,
            width: '100%',
            height: 280,
            latitude: -27.199699,
            longitude: 153.114990,
            zoom: 7,
            // styles: 'mapbox://styles/listingslab/ck3xhp0z84a2m1co2qgche4fv'
        }
    };

    affectMap = (payload) => {
        console.log('affectMap', payload)
    }

    render() {

        return (
            <ReactMapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => {
                    // console.log('viewport change', viewport)
                }}
            />
        );
    }
}

export default Mapbox;