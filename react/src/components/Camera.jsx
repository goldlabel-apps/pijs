import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Card,
    CardContent,
    CardHeader,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    IconButton,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from './';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    camera: {
        margin: theme.spacing(),
    },
    moreInfoPanel: {
        background: 'rgba(255,255,255,0.1)',
    },
    cameraImage: {
        border: '1px solid rgba(0,0,0,0.5)',
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    white: {
        color: 'white',
    },
}));


function Camera() {
    
    const classes = useStyles();
    const store = getStore();
    const {
        open,
        currentPhoto,
    } = useSelector(state => state.system.camera);

    if (!open) {
        return null;
    }

    const title = `Camera`;
    const subheader = <span style={{ color: 'white' }}>Scarborough, Queensland, Australia</span>;
    const moreInfo = currentPhoto;
    
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
                        onClick={(e) => {
                            e.preventDefault();
                            store.dispatch({ type: "SYSTEM/CAMERA/CLOSE" });
                        }}>
                        <Icon
                            icon={`close`}
                            color={`primary`}
                        />
                    </IconButton>
                }/>
            <CardContent>
                <ExpansionPanel className={classes.moreInfoPanel} >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="More info"
                        id={`more-info`}>
                        <Typography className={classes.white}>
                            Live
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant={`body2`} className={classes.white}>
                            {moreInfo}
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <img
                    className={classes.cameraImage}
                    alt={subheader}
                    src={currentPhoto} />
                
            </CardContent>
        </Card>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
