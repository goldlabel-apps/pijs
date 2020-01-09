import React from 'react';
// import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Typography,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import {
    Icon,
    Mapbox,
} from './';
// import PiJSSVG from '../graphics/PiJSSVG'

const useStyles = makeStyles(theme => ({
    userEntity: {
        margin: theme.spacing(0.5),
    },
    card: {
    },
    content: {
    },
    grow: {
        flexGrow: 1,
    }
}));

function UserEntity(props) {

    const classes = useStyles();
    const store = getStore();
    const {
        userEntity,
    } = useSelector(state => state.system);
    const {
        ipgeo,
        // fingerprint,
        visits,
    } = userEntity;
    // console.log(fingerprint)
    const {
        ip,
        city,
        country_flag,
        country_name,
        state_prov,
        // latitude,
        // longitude,
    } = ipgeo.data;
    

    //  User for {moment(created).fromNow().replace(` ago`, ``) }
    /* Fingerprint {fingerprint.value} */
    let ipgeolocation = `Hello! This is what we currently know about you. Firstly and most 
    importantly, the IP address that came with your request for the app is ${ip}. 
    Using ipgeolocation.io we have matched it to ${city}, ${state_prov}, ${country_name}.`;

    const title = `User Entity`;
    const subheader = <span style={{ color: 'white' }}>{visits} visits</span>;

    // process.env.REACT_APP_MAPBOX

    
    return (
        <div className={classes.userEntity}>
            <Card className={classes.card}>
                <CardHeader
                    title={title}
                    subheader={subheader}
                    avatar={
                            <Icon
                                icon={`userentity`}
                                color={`primary`}
                            />}
                    // action={}
                />
                <CardContent>
                    <div className={classes.content}>
                        <Grid container>
                            <Grid item xs={2}>
                                <img src={country_flag} alt={`flag`} />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography variant={`body1`}>
                                    {ipgeolocation}
                                </Typography>
                            </Grid>
                        </Grid>    
                        <Mapbox />
                    </div>
                </CardContent>

                <CardActions>
                    <div className={classes.grow} />
                    <Tooltip title={`Reset your User Entity`}>
                        <IconButton
                            variant={`contained`}
                            color={`primary`}
                            onClick={(e) => {
                                e.preventDefault();
                                store.dispatch({ type: "SYSTEM/RESET" });
                                window.location.assign(`/`)
                            }}>
                            <Icon
                                icon={`trash`}
                                color={`primary`}
                            />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </div>
    );
}

const MemodFuncComponent = React.memo(UserEntity);
export default MemodFuncComponent;