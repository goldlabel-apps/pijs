import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;

const useStyles = makeStyles(theme => ({
    mapbox: {
        border: '1px solid green',
    },
}));

function Mapbox(props) {
    
    const classes = useStyles();
    // const {
    //     mapbox,
    // } = useSelector(state => state.system);

    // const {
    //     mapboxStyle,
    //     lat,
    //     lng,
    //     zoom,
    // } = mapbox;
    // const map = new mapboxgl.Map({
    //     container: this.mapContainer,
    //     style: mapboxStyle,
    //     center: [lng, lat],
    //     zoom,
    //     interactive: false,
    // });
    
    return (
        <div className={classes.mapbox}>
            {/* <div
                className={classes.map}
                ref={el => this.mapContainer = el}
            /> */}
        </div>
    );
}

const MemodFuncComponent = React.memo(Mapbox);
export default MemodFuncComponent;
// export default Mapbox;