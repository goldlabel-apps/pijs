import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import {
  CssBaseline,
  Button
} from '@material-ui/core/';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const styles = theme => ({
  mapdiv: {
    height: 'calc(100vh - 75px)',
    // border: '1px solid red',
    // padding: theme.spacing(3),
    // margin: 'auto',
    // maxWidth: 1200,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 153.114990,
      lat: -27.199699,
      zoom: 12
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
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
    const { classes } = this.props;
    const { lng, lat, zoom } = this.state;
    return (
      <div className={cn(classes.fuck)}>
        <Button
          variant={`contained`}
          color={`primary`}>
          mapbox-redux-toolkit
        </Button>
        <div className="">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className={cn(classes.mapdiv)} />
      </div>
    );
  }

}

export default withStyles(styles, { withTheme: true })(App);
