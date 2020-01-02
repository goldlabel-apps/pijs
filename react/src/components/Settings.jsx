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
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    CardHeader,
    Grid,
    Switch,
    Typography,
    useMediaQuery,
} from '@material-ui/core/';
import { Icon } from './';

const useStyles = makeStyles(theme => ({
    myStyle: {
        minWidth: 450,
    },
    switchLabel: {
        marginTop: theme.spacing(1),
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

            <CardHeader
                title={`Settings`}
                avatar={<Icon
                    icon={`settings`}
                    color={`primary`}
                />}
            />

            <DialogContent className={classes.myStyle}>

                <Grid container>
                    <Grid item xs={2}>
                        <Switch
                            inputProps={{ 'aria-label': 'Share location checkbox' }}
                            checked={true}
                            onChange={() => { }}
                            value={`shareLocation`}
                            color={`primary`}
                        />
                    </Grid>
                    <Grid item xs={10}>

                        <Typography variant={`body1`} className={classes.switchLabel}>
                            Easily Turn Off 'n Onable
                        </Typography>

                        <List className={classes.navList}>

                            <ListItem button
                                onClick={(e) => {
                                    this.navClick(`https://github.com/listingslab-hardware/pijs`, `_blank`)
                                }}>
                                <ListItemIcon>
                                    <Icon icon={`github`} color={`primary`} />
                                </ListItemIcon>
                                <ListItemText primary={`github`} />
                            </ListItem>

                            <ListItem button
                                onClick={(e) => {
                                    this.navClick(`https://listingslab.com`, `_blank`)
                                }}>
                                <ListItemIcon>
                                    <Icon icon={`listingslab`} color={`#333333`} />
                                </ListItemIcon>
                                <ListItemText primary={`by listingslab`} />
                            </ListItem>
                        </List>
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