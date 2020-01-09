import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Card,
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
        created,
        visits,
    } = useSelector(state => state.system.userEntity);

    const title = `User Entity`;
    const subheader = <span style={{ color: 'white' }}>{visits} visits</span>;

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