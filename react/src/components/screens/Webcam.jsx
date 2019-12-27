import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    PiPlayer,
    ScreenHeader
} from '../';

class Webcam extends React.Component {

    render() {
        return (
            <React.Fragment>
                <ScreenHeader title={`Webcam`} icon={`webcam`} />
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
