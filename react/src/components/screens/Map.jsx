import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
// import {
//     IconButton,
// } from '@material-ui/core/';
// import {
//     Icon,
// } from '../';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

class Map extends Component {

    state = {
        map: null,
        defaultLocation: {
            region: `Scarborough`,
            state: `QLD`,
            country: `Australia`,
            lat: -27.211579,
            lng: 153.107658,
            zoom: 15,
            flySpeed: 0.75,
        }
    }

    componentDidMount() {
        const {
            mapbox
        } = this.props;
        const { lng, lat, zoom } = mapbox;
        const { defaultLocation } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/listingslab/ck4uugpxf13y11cqp72z8snc4',
            center: [lng, lat],
            zoom,
            interactive: false,
        });
        map.on('load', () => {
            const { hasZoomed } = this.props.mapbox;
            if (!hasZoomed) {
                this.zoomIn(defaultLocation)
            }
        });


        map.on('styleimagemissing', (e) => {
            return null;
        });


        this.setState({ map })
    }

    zoomIn = (location) => {
        const { map } = this.state;
        map.flyTo({
            center: [location.lng, location.lat],
            zoom: location.zoom,
            speed: location.flySpeed,
            essential: true
        });
        map.once('moveend', () => {
            console.log('ENDE.')
        })
    }

    zoomOut = () => {
        // const location = {
        //     lat: 0,
        //     lng: 0,
        //     zoom: 1,
        // }
        // console.log('zoomIn', location)
    }

    render() {
        const {
            classes,
        } = this.props;
        // console.log ()
        return (
            <React.Fragment>
                <div
                    ref={el => this.mapContainer = el}
                    className={cn(classes.map)}
                />
                {/* <IconButton
                    className={classes.mapBtn}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    <Icon icon={`zoomin`} color={`primary`} />
                </IconButton>

                <IconButton
                    className={classes.mapBtn}
                    variant={`contained`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault();
                    }}>
                    <Icon icon={`zoomout`} color={`primary`} />
                </IconButton> */}
            </React.Fragment>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        mapbox: store.mapbox,
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Map))));
