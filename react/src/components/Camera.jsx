import React from 'react';
// import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    // Button,
    Card,
    // CardActions,
    CardContent,
    CardHeader,
    // Typography,
    IconButton,
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

function Camera(props) {
    
    const classes = useStyles();
    const store = getStore();
    // const {
    //     created,
    // } = useSelector(state => state.system.userEntity);
    const title = `Camera`;
    const subheader = <span style={{ color: 'white' }}>{`Taken 5 seconds ago`}</span>;
    
    return (
        <div className={classes.userEntity}>
            <Card className={classes.card}>
                <CardHeader
                    title={title}
                    subheader={subheader}
                    avatar={<Icon
                                icon={`camera`}
                                color={`primary`} />}
                    action={
                        <IconButton
                            variant={`contained`}
                            color={`primary`}
                            onClick={(e) => {
                                e.preventDefault();
                                store.dispatch({ type: "SYSTEM/RESET" });
                                window.location.assign(`/`)
                            }}>
                            <Icon
                                icon={`refresh`}
                                color={`primary`} />
                        </IconButton>
                    }/>
                <CardContent>
                    <div className={classes.content}>
                        show image
                    </div>
                </CardContent>
                {/* <CardActions>
                    <div className={classes.grow} />
                    <Button
                        variant={`contained`}
                        color={`secondary`}
                    >
                        A Button
                    </Button>
                </CardActions> */}
            </Card>
        </div>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;








/* content

const content = [];

{content.map((item, i) => {
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

*/