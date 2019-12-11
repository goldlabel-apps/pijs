import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Card,
    CardHeader,
} from '@material-ui/core/';
import ViewActions from '../ViewActions';

class PaneFooter extends Component {

    render() {
        const {
            classes,
        } = this.props;
        // const piDate = `${moment(Date.now()).format(`ddd, MMM Do, h:mm:ss a`)}`;
        return (
            <Card className={cn(classes.cardTitle)}>
                <CardHeader
                    title={`Footer`}
                    subheader={`Lere are links & stuff`}
                    action={
                        <ViewActions />
                    }
                />
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneFooter))
);
