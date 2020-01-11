import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    Button,
    Card,
    CardHeader,
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
    iconBtnSpacer: {
        marginLeft: theme.spacing(2),
    },
    resetBtn: {
        margin: theme.spacing(),
        width: '95%',
    },
    moreInfoPanel: {
        background: 'rgba(255,255,255,0.01)',
    },
    white: {
        color: 'white',
    },
    ipgeoFlag: {
        paddingTop: theme.spacing(2)
    },
    ipgeoText: {
        paddingTop: theme.spacing(2.5)
    },
    grow: {
        flexGrow: 1,
    },
    btnIcon: {
        marginLeft: theme.spacing()
    }
}));

function UserEntity() {

    const classes = useStyles();
    const store = getStore();
    const {
        userEntity,
    } = useSelector(state => state.system);
    const {
        open,
        ipgeo,
        // visits,
    } = userEntity;
    // console.log(open);
    if (!open) {
        return null;
    }
    const {
        ip,
        city,
        // country_flag,
        country_name,
        state_prov,
    } = ipgeo.data;
    
    const title = `User Entity`;
    const ipgeolocation = `${city}, ${state_prov}, ${country_name}`;
    const subheader = <span style={{ color: 'white' }}>{ipgeolocation}</span>;
    const moreInfo = `What do we currently know about you? Only your IP address. 
    Using a free service from ipgeolocation.io, we know that ip's location is ${ipgeolocation}`;
    
    return (
        <Card className={classes.userEntity}>
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
            
            <Mapbox />
            
            <ExpansionPanel className={classes.moreInfoPanel} >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="More info"
                    id={`more-info`}>
                    <Typography className={classes.white}>
                        Reset User Entity
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant={`body2`} className={classes.white}>
                        IP {ip}. {moreInfo}
                    </Typography>
                </ExpansionPanelDetails>
                <Button
                    fullWidth
                    className={classes.resetBtn}
                    variant={`text`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault();
                        store.dispatch({ type: "SYSTEM/RESET" });
                        window.location.assign(`/?reset=${Date.now()}`)
                    }}>
                    <Icon icon={`reset`} color={`primary`} /><span className={classes.iconBtnSpacer}>Reset</span>
                        
                </Button>
            </ExpansionPanel>

        </Card>
    );
}

const MemodFuncComponent = React.memo(UserEntity);
export default MemodFuncComponent;
