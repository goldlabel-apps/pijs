import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import {
    Button,
    Card,
    CardHeader,
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
        // ipgeo,
        // visits,
    } = userEntity;

    if (!open) {
        return null;
    }
    
    // const {
    //     ip,
    //     city,
    //     country_flag,
    //     country_name,
    //     state_prov,
    // } = ipgeo.data;
    // const ipgeolocation = `${city}, ${state_prov}, ${country_name}`;
    
    const title = `User Entity`;
    // const subheader = <span style={{ color: 'white' }}>{visits} visit{ visits > 1 ? `s` : null}</span>;
    
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
            
            {/* <Mapbox /> */}
            
            <Button
                variant={`contained`}
                color={`secondary`}
                onClick={(e) => {
                    e.preventDefault();
                    store.dispatch({ type: "SYSTEM/RESET" });
                    window.location.assign(`/?reset=${Date.now()}`)
                }}>
                <Icon icon={`reset`} color={`primary`} /><span className={classes.iconBtnSpacer}>Reset</span>
            </Button>

        </Card>
    );
}

const MemodFuncComponent = React.memo(UserEntity);
export default MemodFuncComponent;
