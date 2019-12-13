import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';

import {
    Card,
    CardHeader,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import { Icon } from '../';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

class PaneMap extends Component {

    componentDidMount() {
        const {
            mapbox
        } = this.props;
        const { lng, lat, zoom } = mapbox;

        const map = new mapboxgl.Map({
          container: this.mapContainer,
          style: 'mapbox://styles/listingslab/ck3xppo6t0qok1clju8b462lu',
          center: [lng, lat],
          zoom
        });
    
        map.on('move', () => {
          const { lng, lat } = map.getCenter();
          this.setState({
            lng: lng.toFixed(4),
            lat: lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
          });
        });
      }

    render() {
        const {
            classes,
        } = this.props;

        return (
            <Card className={cn(classes.location)}>
                <CardHeader
                    title={`Map`}
                    action={
                        <Tooltip title={`Full screen`}>
                            <IconButton
                                size={`small`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log ('redux action -> PaneMap/fullscreen')
                                }}
                            >
                                <Icon icon={`fullscreen`} />
                            </IconButton>
                        </Tooltip>
                    }
                />
                <div ref={el => this.mapContainer = el} className={cn(classes.map)} />
            </Card>
        );
    }
}



const mapStateToProps = (store) => {
    return {
        mapbox: store.mapbox
    };
  };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//      systemOpenMessage: (params) => dispatch(systemOpenMessage(params)),
//     };
//   };
  
  export default (connect(
      mapStateToProps,
      null
)(withStyles(styles, { withTheme: true })(withRouter(PaneMap))));
    
