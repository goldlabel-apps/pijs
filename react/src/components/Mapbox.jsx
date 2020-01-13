import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from '../';
import { withStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const styles = theme => ({
    map: {
        border: '1px solid rgba(241,221,63,0.25)',
        borderRadius: theme.spacing(),
        height: 220,
    }
});

class Mapbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            map: null,
        }
    }

    componentDidMount() {
        const {
            lat,
            lng,
            mapbox,
            userLocation,
            piLat,
            piLon,
        } = this.props;
        const {
            mapboxStyle,
            zoom,
        } = mapbox;
        
        let mapOptions = {
            container: this.mapContainer,
            style: mapboxStyle,
            center: [lng || 0, lat || 0],
            zoom,
            interactive: false,
        }

        if (userLocation) {
            mapOptions.center = [userLocation.lng || 0, userLocation.lat || 0];
            mapOptions.zoom = userLocation.zoom;
        }

        const map = new mapboxgl.Map(mapOptions);

        map.on('load', () => {
            const {
                hasZoomed,
                userLocation
            } = this.props.mapbox;
            if (!hasZoomed && !userLocation) {
                this.zoomIn({
                    lat: piLat || 0,
                    lng: piLon || 0,
                    zoom: 11,
                    flySpeed: 0.3,
                })
            }
        });
        this.setState({ map })
    }

    zoomIn = (location) => {
        const { map } = this.state;
        map.flyTo({
            center: [location.lng || 0, location.lat || 0],
            zoom: location.zoom,
            speed: location.flySpeed,
            essential: true
        });
        map.once('moveend', () => {
            const store = getStore();
            store.dispatch({ type: `SYSTEM/USERENTITY/MAP_COMPLETE`, userLocation: location })
        })
    }

    render() {
        const {
            classes,
        } = this.props;
        return (
            <React.Fragment>
                <div ref={el => this.mapContainer = el} className={ classes.map } />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        userLocation: store.system.mapbox.userLocation,
        mapbox: store.system.mapbox,
        lat: store.system.userEntity.ipgeo.data.latitude,
        lng: store.system.userEntity.ipgeo.data.longitude,
        piLat: store.weather.data.coord.lat,
        piLon: store.weather.data.coord.lon,
    }
};

export default (connect( mapStateToProps, null )(withStyles(styles, { withTheme: true })(Mapbox)));
