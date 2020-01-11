import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStore } from '../';
import { withStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const styles = theme => ({
    map: {
        border: '1px solid rgba(0,0,0,0.5)',
        height: 450,
    }
});

class Mapbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            map: null,
            defaultLocation: {
                lat: 0,
                lng: 0,
                zoom: 1,
                flySpeed: 0.75,
            }
        }
    }

    componentDidMount() {
        const {
            lat,
            lng,
            mapbox,
            userLocation,
        } = this.props;
        const {
            mapboxStyle,
            zoom,
        } = mapbox;
        
        let mapOptions = {
            container: this.mapContainer,
            style: mapboxStyle,
            center: [lng, lat],
            zoom,
            interactive: false,
        }

        if (userLocation) {
            mapOptions.center = [userLocation.lng, userLocation.lat];
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
                    lat,
                    lng,
                    zoom: 11,
                    flySpeed: 0.5,
                })
            }
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
    }
};

export default (connect( mapStateToProps, null )(withStyles(styles, { withTheme: true })(Mapbox)));
