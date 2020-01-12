import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    Button,
    Card,
    CardHeader,
    CardContent,
    IconButton,
} from '@material-ui/core/';
import { getStore } from '../';
import {
    Icon,
    // Mapbox,
} from './';

const useStyles = makeStyles(theme => ({
    userEntity: {
        margin: theme.spacing(),
        maxWidth: 360,
    },
    iconBtnSpacer: {
        marginLeft: theme.spacing(2),
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

    const ipgeolocation = `${city}, ${state_prov}, ${country_name}`;
    
    const title = `Privacy`;
    const moreInfo = `What do we currently know about you? Only your IP address. 
    <strong>${ip}</strong>. Using a free service from ipgeolocation.io, 
    we know that ip's location is <strong>${ipgeolocation}</strong>`;
    
    return (
        <Card className={classes.userEntity}>
            <CardHeader
                title={title}
                // subheader={subheader}
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
                <div dangerouslySetInnerHTML={{ __html: moreInfo}} />
            </CardContent>
            {/* <Mapbox /> */}
            <CardContent>
            <Button
                variant={`outlined`}
                color={`inherit`}
                onClick={(e) => {
                    e.preventDefault();
                    store.dispatch({ type: "SYSTEM/RESET" });
                    store.dispatch({ type: "WEATHER/RESET" });
                    window.localStorage.clear();
                    window.location.assign(`/?reset=${Date.now()}`);
                }}>
                <Icon icon={`reset`} color={`primary`} />
                <span className={classes.iconBtnSpacer}>Restart</span>
                </Button>
                
            </CardContent>

        </Card>
    );
}

const MemodFuncComponent = React.memo(UserEntity);
export default MemodFuncComponent;
