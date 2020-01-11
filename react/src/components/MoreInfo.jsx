import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from './';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    iconBtnSpacer: {
        marginTop: theme.spacing(),
        marginLeft: theme.spacing(2),
        
    },
    moreInfoPanel: {
        background: 'rgba(255,255,255,0.01)',
    },
    white: {
        color: 'white',
    },
}));


function MoreInfo(props) {
    
    const classes = useStyles();
    const moreInfo = `PiJS is an Open Source, meaning that everything you see here is available to download and use for free from github.`;
    
    return (
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
    );
}

const MemodFuncComponent = React.memo(MoreInfo);
export default MemodFuncComponent;
