
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
// import { useSelector } from 'react-redux';
import {
    ConnectionStatus,
    Icon,
} from './';
import {
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
    screenHeader: {
        marginTop: theme.spacing(),
    },
    gridItemTitle: {
        paddingTop: theme.spacing(),
        flexGrow: 1,
    },
    homeBtn: {
        marginRight: theme.spacing(1)
    }
}));

export default function ScreenHeader(props) {
    const classes = useStyles();
    const history = useHistory();
    const { title, icon } = props;
    // const { system } = useSelector(state => state);
    // console.log(system.pijs.status)

    return (
        <div className={classes.screenHeader}>
            <Grid container>
                <Grid item>
                    <IconButton disabled><Icon
                        icon={icon || `settings`}
                        color={`primary`}
                    /></IconButton>
                </Grid>
                <Grid item className={classes.gridItemTitle}>
                    <Typography variant={`h5`}>
                        {title || `Title prop missing`}
                    </Typography>
                </Grid>

                {/* <Grid item>
                    <SystemClock />
                </Grid> */}

                <Grid item>
                    <ConnectionStatus />
                </Grid>


                <Grid item>
                    <IconButton
                        disabled
                        className={classes.homeBtn}
                        onClick={(e) => {
                            e.preventDefault();
                            history.push(`/`);
                        }}>
                        <Icon
                            icon={`menu`}
                            color={`primary`} />
                    </IconButton>
                </Grid>

            </Grid>
        </div>
    );
}
