import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography,
    // IconButton,
} from '@material-ui/core/';
import Icon from '../Icon';

class PaneTemperature extends Component {

    render() {
        const {
            classes,
        } = this.props;
        // const temperature = `${30.27} C`;
        const temperature = `...`;
        return (
            <Card className={cn(classes.cardMinHeight)}>
                <CardHeader
                    title={`Temperature`}
                    // subheader={`It's stinkin' blimmin' hot`}
                    // avatar={(
                    //     <Avatar
                    //         alt={`Listingslab's Open Source Raspberry Pi Node Server`}
                    //         className={classes.avatar}>
                    //         <Icon icon={'temperature'} />
                    //     </Avatar>
                    // )}
                    // action={null}
                />
                <CardContent>
                    <Typography variant={`h3`} className={cn(classes.centered)}>
                        {temperature}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneTemperature))
);
