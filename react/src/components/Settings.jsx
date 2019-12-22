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
    Grid,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Switch,
    Typography,
    useMediaQuery,
} from '@material-ui/core/';
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    myStyle: {
        minWidth: 450,
    },
    dialogTitleText: {
        marginLeft: theme.spacing(2),
    },
    grow: {
        flexGrow: 1
    }
}));


export default function Settings() {

    const theme = useTheme();
    const classes = useStyles();
    const dispatch = useDispatch();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const settings = useSelector(state => state.system.settings)
    const { open } = settings;

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={() => {
                dispatch({ type: 'SYSTEM/SETTINGS/CLOSE' });
            }}
            aria-labelledby="pijs-settings">
            <DialogTitle id="pijs-settings-title">
                <Grid container>
                    {`PiJS Settings`}
                    <div className={classes.grow} />
                    <Icon
                        icon={`settings`}
                        color={`primary`} />
                </Grid>
            </DialogTitle>

            <DialogContent className={classes.myStyle}>

                <Grid container>
                    <Grid item xs={3}>
                        <Switch
                            inputProps={{ 'aria-label': 'Share location checkbox' }}
                            checked={true}
                            onChange={() => { }}
                            value={`shareLocation`}
                            color={`primary`}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant={`body1`}>
                            Share your location?
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container>
                    <Grid item xs={3}>
                        <Switch
                            inputProps={{ 'aria-label': 'Sounds checkbox' }}
                            checked={true}
                            onChange={() => { }}
                            value={`sounds`}
                            color={`primary`}
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant={`body1`}>
                            Sounds
                        </Typography>
                    </Grid>
                </Grid>


                <Grid container>

                    <Grid item xs={3}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <RadioGroup
                                aria-label={`Dark Mode`}
                                name={`dark-mode`}
                                value={`auto`}
                                onChange={() => { }}
                            >
                                <FormControlLabel
                                    value="on"
                                    control={
                                        <Radio color={`primary`} />
                                    }
                                    label="On" />
                                <FormControlLabel
                                    value="off"
                                    control={
                                        <Radio color={`primary`} />
                                    }
                                    label="Off" />
                                <FormControlLabel
                                    value="auto"
                                    control={
                                        <Radio color={`primary`} />
                                    }
                                    label="Auto" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant={`body1`}>
                            Dark Mode
                        </Typography>
                    </Grid>
                </Grid>

            </DialogContent>

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
        </Dialog >
    );
}


/*
    <Typography gutterBottom>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Typography>
*/