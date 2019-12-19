import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/AppShell.Style';
import { getStore } from "../";
import cn from 'classnames';
import {
    AppBar, Toolbar, IconButton, Fab
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

class PiPlayer extends Component {

    navClick = (path) => {
        const {
            history
        } = this.props;
        const store = getStore();
        history.push(path);
        store.dispatch({ type: "SYSTEM/NAV/CLOSE" });
    }

    render() {
        const {
            classes,
        } = this.props;
        return (

            <div className={cn(classes.piPlayer)} id="pi-player" >
                Image
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                            <AddIcon />
                        </Fab>
                        <div className={classes.grow} />
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

            </div >
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
)(withStyles(styles, { withTheme: true })(withRouter(PiPlayer))));




/*
<CardMedia
    className={webcamClass}
    style={{ background: '#333333' }}
    image={currentPhotoUrl}
    alt={`Webcam`}
/>

let webcamClass = classes.webcamFull;
if (screenMode === `preview`) {
    webcamClass = classes.webcamPreview;
}

const currentPhotoUrl = `https://pi.listingslab.io/jpg/current-photo.jpg?cb=${Date.now()}`;

*/