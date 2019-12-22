import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { getStore } from "../";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
} from '@material-ui/core/';

class Settings extends Component {

    navClick = (path) => {
        const {
            history
        } = this.props;
        const store = getStore();
        history.push(path);
        store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
    }

    render() {
        // const {
        //     classes,
        //     nav,
        // } = this.props;
        // const { open } = nav
        // const store = getStore();

        const open = true;
        const theme = useTheme();
        const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
        return (
            <React.Fragment>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={() => { }}
                    aria-labelledby="dialog-settings-title"
                >
                    <DialogTitle id="dialog-settings">
                        {"PiJS Settings"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            lorem ipsum
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            // autoFocus
                            onClick={() => { }}
                            color="primary">
                            Cancel
                        </Button>
                        <Button
                            nClick={() => { }}
                            color="primary"
                        >
                            Save Changes
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (store) => {
    return {
        store,
        nav: store.system.nav,
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Settings))));
