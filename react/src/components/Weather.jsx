import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Card,
    CardHeader,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    camera: {
        margin: theme.spacing(),
    },
    iconBtnSpacer: {
        marginTop: theme.spacing(),
        marginLeft: theme.spacing(2),
        
    },
    moreInfoPanel: {
        background: 'rgba(255,255,255,0.01)',
    },
    grow: {
        flexGrow: 1,
    },
    white: {
        color: 'white',
    },
}));


function Weather() {
    
    const classes = useStyles();
    const store = getStore();
    const {
        open,
        // errors,
    } = useSelector(state => state.weather);

    // console.log('weather errors', errors)
    
    if (!open) {
        return null;
    }

    const title = `Weather`;
    // const subheader = <span style={{ color: 'white' }}>what's the weather like?</span>;
    
    return (
        <Card className={classes.camera}>
            <CardHeader
                title={title}
                // subheader={subheader}
                avatar={<Icon
                            icon={`weather`}
                            color={`primary`} />}
                action={
                    <IconButton
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: "SYSTEM/WEATHER/CLOSE" });
                        }}>
                        <Icon
                            icon={`close`}
                            color={`primary`}
                        />
                    </IconButton>
                }/>

                
        </Card>
    );
}

const MemodFuncComponent = React.memo(Weather);
export default MemodFuncComponent;
