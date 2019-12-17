import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardHeader,
} from '@material-ui/core/';

class Webcam extends Component {
    render() {
        const {
            classes,
            // mode,
        } = this.props;
        // let screenMode = `full`
        // if (mode) {
        //     screenMode = mode
        // } else {
        //     alert('Webcam mode not specified');
        // }
        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        title={`Webcam`}
                        subheader={`Lorem ipsum dolor sit amet,`}
                    />
                </Card>
            </div >
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(Webcam)
);
