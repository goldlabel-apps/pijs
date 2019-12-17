import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardHeader,
} from '@material-ui/core/';
import { Icon } from '../'

class Map extends Component {
    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        avatar={<Icon icon={`map`} color={`secondary`} />}
                        title={`Map`}
                    />
                </Card>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(Map)
);
