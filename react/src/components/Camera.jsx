import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { getStore } from '../';
import {
    Button,
    Card,
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
    iconBtnSpacer: {
        marginTop: theme.spacing(),
        marginLeft: theme.spacing(2),
        
    },
    moreInfoPanel: {
        background: 'rgba(255,255,255,0.01)',
    },
    cameraImage: {
        border: '1px solid rgba(0,0,0,0.5)',
        maxWidth: '100%',
        maxHeight: 450,
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
    const moreInfo = `PiJS is an Open Source, meaning that everything you see here is available to download and use for free from github.`;
    
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
            
                <img
                    className={classes.cameraImage}
                    alt={subheader}
                    src={currentPhoto} />

                <ExpansionPanel className={classes.moreInfoPanel} >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="More info"
                        id={`more-info`}>
                        <Typography className={classes.white}>
                            Open Source
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant={`body2`} className={classes.white}>
                            {moreInfo}
                        </Typography>
                </ExpansionPanelDetails>
                
                <Button
                    fullWidth
                    className={classes.resetBtn}
                    variant={`text`}
                    color={`primary`}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(`https://github.com/listingslab-hardware/pijs`, `_blank`)
                    }}>
                    <Icon icon={`github`} /><span className={classes.iconBtnSpacer}>GitHub</span>
                </Button>
            </ExpansionPanel>
        </Card>
    );
}

const MemodFuncComponent = React.memo(Camera);
export default MemodFuncComponent;
