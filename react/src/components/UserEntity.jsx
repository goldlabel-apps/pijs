import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    userEntity: {
    },
    card: {
        padding: theme.spacing()
    },
    content: {
        // border: '1px solid skyblue',
        width: 350,
    }
}));

function UserEntity(props) {
    const classes = useStyles();
    const store = getStore();
    const {
        created,
        visits,
        fingerprint,
    } = useSelector(state => state.system.userEntity);
    // console.log('visits', visits)

    const content = [
    ];

    return (
        <div className={classes.userEntity}>
            <Card className={classes.card}>
                <CardHeader
                    title={`User Entity`}
                    subheader={`Your privacy is important`}
                    avatar={<Avatar src={`/png/avatars/anon.png`} />}
                    action={
                        <IconButton>
                            <Icon icon={`menu`} color={`primary`} />
                        </IconButton>
                    }/>
                <CardContent>
                    <div className={classes.content}>

                        <p>Created {moment(created).fromNow()}</p>
                        <p>Visits {visits}</p>
                        <p>Fingerprint {fingerprint.value}</p>

                        {content.map((item, i) => {
                            // console.log(item, i)
                            return (
                                <React.Fragment key={`content_item_${i}`}>
                                    <Typography variant={`body1`}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant={`body2`}>
                                        {item.short}
                                    </Typography>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        variant={`contained`}
                        color={`primary`}
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: "SYSTEM/RESET" });
                            window.location.assign(`/`)
                        }}>
                        Reset
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

const MemodFuncComponent = React.memo(UserEntity);
export default MemodFuncComponent;