import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    Card,
    CardContent,
    CardHeader,
    Grid,
    Typography,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    IconButton,
} from '@material-ui/core/';
import { getStore } from '../';
import {
    Icon,
    Mapbox,
} from './';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    userEntity: {
        margin: theme.spacing(),
    },
    ipgeoGrid: {
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
    const store = getStore();
    const {
        userEntity,
    } = useSelector(state => state.system);
    const {
        open,
        ipgeo,
        visits,
    } = userEntity;
    // console.log(open);
    if (!open) {
        return null;
    }
    const {
        ip,
        city,
        country_flag,
        country_name,
        state_prov,
    } = ipgeo.data;
    
    const title = `User Entity`;
    const subheader = <span style={{ color: 'white' }}>{visits} visits</span>;
    const moreInfo = `Hello! What do we currently know about you? Firstly (and most 
    importantly) the IP address that came with your request is ${ip}. 
    Using the free service from ipgeolocation.io, we can tell that ip's location is`;
    const ipgeolocation = `${city}, ${state_prov}, ${country_name}`;
    
    return (
        <div className={classes.userEntity}>
            <Card className={classes.card}>
                <CardHeader
                    title={title}
                    subheader={subheader}
                    avatar={<Icon
                        icon={`userentity`}
                        color={`primary`}
                    />}
                    action={
                        <IconButton
                            onClick={(e) => {
                                e.preventDefault();
                                store.dispatch({ type: "SYSTEM/USERENTITY/CLOSE" });
                            }}>
                            <Icon
                                icon={`close`}
                                color={`primary`}
                            />
                        </IconButton>
                } />
                <CardContent>
                    <Grid container className={classes.aGrid}>
                        <Grid item xs={4} sm={3} className={classes.ipgeoGrid}>
                            <img src={country_flag} alt={`flag`} />
                        </Grid>
                        <Grid item xs={8} sm={9} className={classes.ipgeoGrid}>
                            <Typography variant={`body1`}>
                                {ipgeolocation}
                            </Typography>
                        </Grid>
                    </Grid> 
                    <Mapbox />
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="More info"
                            id={`more-info`}>
                            <Typography className={classes.heading}>
                                More Info
                            </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography variant={`body1`}>
                                {moreInfo}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </CardContent>
            </Card>
        </div>
    );
}

const MemodFuncComponent = React.memo(UserEntity);
export default MemodFuncComponent;