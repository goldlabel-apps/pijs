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

    componentDidMount() {
        const {
            mapbox
        } = this.props;
        const { lng, lat, zoom } = mapbox;
        // eslint-disable-next-line no-unused-vars
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/listingslab/ck4c1er100to21co6sd5kl563',
            center: [lng, lat],
            zoom,
            interactive: false,
        });
    }
    render() {
        const {
            classes,
            history,
        } = this.props;

        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        title={`Map`}
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
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Map))));
