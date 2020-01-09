import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
// import { getStore } from '../';
// import {
//     // Button,
//     Card,
//     // CardActions,
//     CardContent,
//     CardHeader,
//     IconButton,
// } from '@material-ui/core/';
// import {
//     Icon,
// } from './';

const useStyles = makeStyles(theme => ({
    mapbox: {
        border: '1px solid orange',
    },
}));

function Mapbox(props) {
    
    const classes = useStyles();
    // const store = getStore();
    const {
        currentPhoto,
    } = useSelector(state => state.system.camera);
    // const staticCurrentPhoto = `/jpg/current-photo.jpg`;
    
    return (
        <div className={classes.mapbox}>
            Mapbox
        </div>
    );
}

const MemodFuncComponent = React.memo(Mapbox);
export default MemodFuncComponent;
// export default Mapbox;