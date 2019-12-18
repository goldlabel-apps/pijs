import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    IconButton,
    Card,
    CardHeader,
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
            style: 'mapbox://styles/listingslab/ck453ks7712qe1cpj00eseqn5',
            center: [lng, lat],
            zoom
        });
    }
    render() {
        const {
            classes,
            mode,
            history,
        } = this.props;

        let screenMode = `full`;
        if (mode) {
            screenMode = mode;
        } else {
            alert('Map mode not specified');
            return null;
        }


        let mapClass = classes.mapFull;
        if (screenMode === `preview`) {
            mapClass = classes.mapPreview;
        }

        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        className={cn(classes.screenCardHeader)}
                        title={`Map`}
                        avatar={
                            screenMode === 'preview' ?
                                <IconButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        history.push(`/map`)
                                    }}
                                >
                                    <Icon
                                        icon={`map`}
                                        color={`secondary`}
                                    />
                                </IconButton>
                                : <Icon
                                    className={cn(classes.padIcon)}
                                    icon={`map`}
                                    color={`secondary`}
                                />
                        }
                        action={
                            screenMode === 'full' ?
                                <IconButton
                                    onClick={(e) => {
                                        e.preventDefault();
                                        history.push(`/`)
                                    }}
                                >
                                    <Icon icon={`home`} />
                                </IconButton>
                                : null
                        }
                    />
                    <div
                        ref={el => this.mapContainer = el}
                        className={mapClass}
                    />
                </Card>
            </div>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        mapbox: store.mapbox
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Map))));
