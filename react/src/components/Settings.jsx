import React from 'react';
import {
    useSelector,
    useDispatch,
} from 'react-redux'
import {
    makeStyles,
    useTheme
} from '@material-ui/core/styles';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    useMediaQuery,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    myStyle: {
        minWidth: 450,
    },
}));


export default function Settings() {

    const theme = useTheme();
    const classes = useStyles();
    const dispatch = useDispatch();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const settings = useSelector(state => state.system.settings)
    const { open } = settings;
    // 
    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={() => {
                dispatch({ type: 'SYSTEM/SETTINGS/CLOSE' });
            }}
            aria-labelledby="pijs-settings">
            <DialogTitle id="pijs-settings-title">
                {`PiJS Settings`}
            </DialogTitle>

            <DialogContent className={classes.myStyle}>
                <Typography gutterBottom>
                    There are currently no user configurable settings.
                </Typography>
            </DialogContent>s
            <DialogActions>
                <Button
                    color={`primary`}
                    variant={`outlined`}
                    onClick={() => {
                        dispatch({ type: 'SYSTEM/SETTINGS/CLOSE' });
                    }} >
                    Cancel
                </Button>
                <Button
                    disabled
                    color={`primary`}
                    variant={`contained`}
                    onClick={() => {
                        dispatch({ type: 'SYSTEM/SETTINGS/CLOSE' });
                    }} >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}


/*
    <Typography gutterBottom>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Typography>
*/