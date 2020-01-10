import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
    Mapbox,
} from './';

const useStyles = makeStyles(theme => ({
    userEntity: {
        margin: theme.spacing(),
    },
    ipgeoGrid: {
        padding: theme.spacing()
    },
    aGrid: {
        margin: theme.spacing(),
        padding: theme.spacing()
    },
    grow: {
        flexGrow: 1,
    },
    btnIcon: {
        marginLeft: theme.spacing()
    }
}));

function UserEntity(props) {

    const classes = useStyles();
    // const store = getStore();
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
    
    
    let ip_address = `Hello! What do we currently know about you? Firstly (and most 
    importantly) the IP address that came with your request for the app is ${ip}. 
    Using a free service from ipgeolocation.io, that ip's location is `;

    let ipgeolocation = `${city}, ${state_prov}, ${country_name}`;

    const title = `User Entity`;
    const subheader = <span style={{ color: 'white' }}>{visits} visits</span>;

    
    return (
        <div className={classes.userEntity}>
            <Card className={classes.card}>
                <CardHeader
                    title={title}
                    subheader={subheader}
                    // avatar={}
                    action={<Icon
                        icon={`userentity`}
                        color={`primary`}
                    />}
                />
                <CardContent>
                    <Grid container className={classes.aGrid}>
                        <Grid item xs={12} >
                            <Typography variant={`body1`}>
                                {ip_address}
                            </Typography>
                        </Grid>
                    </Grid> 

                    <Mapbox />
                    
                    <Grid container className={classes.aGrid}>
                        <Grid item xs={4} className={classes.ipgeoGrid}>
                            <img src={country_flag} alt={`flag`} />
                        </Grid>

                        <Grid item xs={8} className={classes.ipgeoGrid}>
                            <Typography variant={`body1`}>
                                {ipgeolocation}
                            </Typography>
                        </Grid>
                    </Grid> 
                    
                </CardContent>

                {/* <CardActions>
                    <div className={classes.grow} />
                    <Tooltip title={`Reset User Entity`}>
                        <Button
                            variant={`outlined`}
                            color={`primary`}
                            onClick={(e) => {
                                e.preventDefault();
                                store.dispatch({ type: "SYSTEM/RESET" });
                                window.location.assign(`/`)
                            }}>
                            <Icon
                                icon={`trash`}
                                color={`primary`}
                            /><span className={classes.btnIcon}>Reset</span>
                        </Button>
                    </Tooltip>
                </CardActions> */}
            </Card>
        </div>
    );
}

const MemodFuncComponent = React.memo(UserEntity);
export default MemodFuncComponent;