import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardContent,
    CardHeader,
} from '@material-ui/core/'
import mapboxgl from 'mapbox-gl'

const useStyles = makeStyles(theme => ({
        card: {
        border: "none",
        boxShadow: "none",
        background: "none"
    },
    map: {
        height: 275,
    }
}));

export default function Map() {
    const classes = useStyles()
    const [map, setMap] = useState(null)
    const mapContainer = useRef(null)
    useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
        const initializeMap = ({ setMap, mapContainer }) => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: `mapbox://styles/listingslab/ck7picfb501sh1ipfwf7ab967`,
                center: [153.107658, -27.211579],
                zoom: 11
            });
            map.on(`load`, (e) => {
                setMap(map);
                map.resize();
                // map.addControl(new mapboxgl.NavigationControl());
            });
        };

        if (!map) initializeMap({ setMap, mapContainer });
    }, [map])

    return (
        <Card className={classes.card} variant="outlined">
            <CardHeader
                title={`The Queen's Land`}
                subheader={`Secured with LetsEncrypt`}
            />
            <CardContent>
                <div
                    className={classes.map}
                    ref={el => (mapContainer.current = el)}
                />
            </CardContent>
        </Card>
    );
}
