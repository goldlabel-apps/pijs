import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Card,
    CardContent,
    CardHeader,
    IconButton,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    camera: {
        margin: theme.spacing(),
        minHeight: 450,
    },
    cameraImage: {
        border: '1px solid rgba(0,0,0,0.5)',
        width: '100%',
        borderRadius: theme.spacing(0.5),
    },
    grow: {
        flexGrow: 1,
    }
}));

function Camera(props) {
    
    const classes = useStyles();
    const store = getStore();
    // const {
    //     currentPhoto,
    // } = useSelector(state => state.system.camera);
    const staticCurrentPhoto = `/jpg/current-photo.jpg`;
    // console.log(currentPhoto);
    const title = `Camera`;
    const subheader = <span style={{ color: 'white' }}>{`5 seconds ago`}</span>;
    
    return (
            <Card className={classes.camera}>
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
                    <img
                        className={classes.cameraImage}
                        alt={subheader}
                        src={staticCurrentPhoto} />
                </CardContent>
                {/* <CardActions>
                    <div className={classes.grow} />
                    <Button
                        variant={`contained`}
                        color={`primary`}
                    >
                        A Button
                    </Button>
                </CardActions> */}
            </Card>
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