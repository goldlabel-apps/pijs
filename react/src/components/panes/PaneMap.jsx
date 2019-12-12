import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Card,
    CardHeader,
    IconButton,
    Tooltip,
} from '@material-ui/core/';
import { Icon } from '../';

class PaneMap extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <Card className={cn(classes.location)}>
                <CardHeader
                    title={`Map`}
                    action={
                        <Tooltip title={`Full screen`}>
                            <IconButton
                                size={`small`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log ('redux action -> PaneMap/fullscreen')
                                }}
                            >
                                <Icon icon={`fullscreen`} />
                            </IconButton>
                        </Tooltip>
                    }
                />
                <div id={`map`} className={cn(classes.map)} />
                
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneMap))
);
