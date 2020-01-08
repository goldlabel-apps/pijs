import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    // Avatar,
    //Button,
    Card,
    // CardActions,
    CardContent,
    CardHeader,
    Typography,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import {
    Icon,
} from './';
// import PiJSSVG from '../graphics/PiJSSVG'

const useStyles = makeStyles(theme => ({
    userEntity: {
        maxWidth: '95%',
        margin: theme.spacing(),
    },
    card: {
        // padding: theme.spacing()
    },
    content: {
        width: 350,
    },
    grow: {
        flexGrow: 1,
    }
}));

function UserEntity(props) {
    const classes = useStyles();
    const store = getStore();
    const {
        created,
        visits,
        // fingerprint,
    } = useSelector(state => state.system.userEntity);

    return (
        <div className={classes.userEntity}>
            <Card className={classes.card}>
                <CardHeader
                    title={`User Entity`}
                    subheader={<span style={{ color: 'white' }}>{visits} visits</span>}
                    avatar={
                            <Icon
                                icon={`userentity`}
                                color={`primary`}
                            />}
                    action={
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
                    }/>
                <CardContent>
                    <div className={classes.content}>

                        <Typography variant={`body2`}>
                            User for {moment(created).fromNow().replace(` ago`, ``) }
                            {/* Fingerprint {fingerprint.value} */}
                        </Typography>

                    </div>
                </CardContent>
                {/* <CardActions>
                    <div className={classes.grow} />
                </CardActions> */}
            </Card>
        </div>
    );
}

const MemodFuncComponent = React.memo(UserEntity);
export default MemodFuncComponent;