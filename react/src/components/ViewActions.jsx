import React, { Component } from 'react';
import { withRouter } from "react-router";

import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    IconButton,
} from '@material-ui/core/';
import Icon from './Icon';

class ViewActions extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <React.Fragment>
                <IconButton
                    className={cn(classes.none)}
                    color={`primary`}
                    aria-label="Refresh"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.assign(`/?reset=${Date.now()}`);
                    }}>
                    <Icon icon={`refresh`} />
                </IconButton>
            </React.Fragment>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(ViewActions))
);








// import { connect } from 'react-redux';

// const mapStateToProps = (store) => {
//     return {};
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         // systemToggleDrawer: (bool) => dispatch(systemToggleDrawer(bool)),
//     };
// };

// export default (
//     connect(
//         mapStateToProps,
//         mapDispatchToProps
//     )(withStyles(styles, { withTheme: true })(withRouter(ViewActions)))
// );