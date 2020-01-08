import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    camera: {
        maxWidth: '95%',
        margin: theme.spacing(),
    },
    cameraImage: {
        border: '1px solid rgba(0,0,0,0.5)',
        width: '100%',
        borderRadius: theme.spacing(0.5),
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
    const {
        currentPhoto,
    } = useSelector(state => state.system.camera);
    // console.log(currentPhoto);
    const title = `Camera`;
    const subheader = <span style={{ color: 'white' }}>{`Taken 5 seconds ago`}</span>;
    
    return (
        <div className={classes.camera}>
            <Card>
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
                                store.dispatch({ type: "SYSTEM/CAMERA/UPDATE" });
                            }}>
                            <Icon
                                icon={`refresh`}
                                color={`primary`} />
                        </IconButton>
                    }/>
                <CardContent>
                    <div className={classes.content}>
                        <img
                            className={classes.cameraImage}
                            alt={subheader}
                            src={`/jpg/current-photo.jpg`} />
                        {currentPhoto}
                    </div>
                </CardContent>
                <CardActions>
                    <div className={classes.grow} />
                    <Button
                        variant={`contained`}
                        color={`secondary`}
                    >
                        A Button
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;


// export default Camera;

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