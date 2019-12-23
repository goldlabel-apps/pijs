import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardHeader,
    IconButton,
} from '@material-ui/core/';
import { Icon } from '../';
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
            zoom: 12,
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
            style: 'mapbox://styles/listingslab/ck4c1er100to21co6sd5kl563',
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
        this.setState({ map })
    }

    zoomIn = (location) => {
        const { map } = this.state;
        map.flyTo({
            center: [location.lng, location.lat],
            zoom: 12,
            speed: 0.4,
            essential: true
        });
    }

    zoomOut = () => {
        const location = {
            lat: 0,
            lng: 0,
            zoom: 1,
        }
        console.log('zoomIn', location)
    }

    render() {
        const {
            classes,
            history,
            // mapbox,
        } = this.props;
        // console.log('mapbox', mapbox)
        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        className={cn(classes.screenHeader)}
                        title={`PiJS Map`}
                        avatar={
                            <IconButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    history.push(`/`);
                                }}>
                                <Icon icon={`pi`} color={`primary`} />
                            </IconButton>
                        }
                    />
                    <div
                        ref={el => this.mapContainer = el}
                        className={cn(classes.mapFullSize)}
                    />
                </Card>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        mapbox: store.mapbox,
        weather: store.weather,
        pijs: store.system.pijs,
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Map))));
