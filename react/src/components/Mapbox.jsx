import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/MUI.Style';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

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
            mapbox
        } = this.props;
        const {
            lng,
            lat,
            mapboxStyle,
            zoom,
        } = mapbox;
        const { defaultLocation } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: mapboxStyle,
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

    render() {
        const {
            classes,
        } = this.props;
        return (
            <React.Fragment>
                <div
                    ref={el => this.mapContainer = el}
                    className={ classes.map }
                />
            </React.Fragment>
        );
    }
}


const mapStateToProps = (store) => { return { mapbox: store.system.mapbox } };

export default (connect( mapStateToProps, null )(withStyles(styles, { withTheme: true })(Mapbox)));
