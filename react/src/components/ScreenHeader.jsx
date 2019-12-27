
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {
    Icon,
} from './';
import {
    Grid,
    IconButton,
    Tooltip,
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
    const { title, icon, isHome } = props;
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
                    <Typography variant={`h6`}>
                        {title || `Title prop missing`}
                    </Typography>
                </Grid>
                {!isHome ? 
                    <Grid item>
                        <Tooltip title={`PiJS Home`}>
                            <IconButton
                                className={classes.homeBtn}
                                onClick={(e) => {
                                    e.preventDefault();
                                    history.push(`/`);
                                }}>
                                <Icon
                                    icon={`home`}
                                    color={`primary`} />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                : null}
                
            </Grid>



        </div>
    );
}
