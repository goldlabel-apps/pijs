import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
// import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
// import {
//     Card,
// } from '@material-ui/core/';
import {
    PiPlayer,
    ScreenHeader
} from '../';

class Webcam extends React.Component {


    render() {
        const {
            classes,
        } = this.props;
        return (
            <React.Fragment>
                <ScreenHeader title={`Webcam`} />
                <PiPlayer />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store,
        webcam: store.system.webcam
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Webcam))));
