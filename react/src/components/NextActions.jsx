import React, { Component } from 'react';
import { withRouter } from "react-router";

import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../theme/App.Style';
import {
    CardActions,
    IconButton,
} from '@material-ui/core/';
import Icon from './Icon';

class NextActions extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <React.Fragment>
                <CardActions disableSpacing>
                    <div className={cn(classes.grow)} />
                    <IconButton
                        color={`primary`}
                        aria-label="share">
                        <Icon icon={`share`} />
                    </IconButton>
                    <IconButton
                        color={`primary`}
                        aria-label={`Settings`}
                        onClick={() => { }}>
                        <Icon icon={`settings`} />
                    </IconButton>
                </CardActions>
            </React.Fragment>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(NextActions))
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