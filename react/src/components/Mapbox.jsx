import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import {
    IconButton,
    Tooltip
} from '@material-ui/core/';
import Icon from './Icon';
// import { mapboxStyle } from './mapboxStyle';

class Mapbox extends Component {

    state = {
        viewport: {
            // style: mapboxStyle,
            mapboxApiAccessToken: process.env.REACT_APP_MAPBOX,
            width: '100%',
            height: 302,
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

                <ReactMapGL
                    {...this.state.viewport}
                    onViewportChange={(viewport) => {
                        // console.log('viewport change', viewport)
                    }}
                />


                <div className={`burp-centered`}>
                    <Tooltip title={`Zoom In`}>
                        <IconButton
                            onClick={(e) => {
                                e.preventDefault();
                                this.affectMap('zoomin');
                            }}>
                            <Icon icon={`zoomin`} />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={`Zoom Out`}>
                        <IconButton
                            onClick={(e) => {
                                e.preventDefault();
                                this.affectMap('zoomout');
                            }}
                        >
                            <Icon icon={`zoomout`} />
                        </IconButton>
                    </Tooltip>
                </div>

            </React.Fragment>
        );
    }
}

export default Mapbox;