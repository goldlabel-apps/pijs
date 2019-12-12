import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    // Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography,
} from '@material-ui/core/';
// import Icon from '../Icon';

class PaneCloud extends Component {

    render() {
        const {
            classes,
        } = this.props;
        const cloud = `...`;
        return (
            <Card className={cn(classes.cardMinHeight)}>
                <CardHeader
                    title={`Cloud`}
                    // subheader={`(Percentage of best)`}
                    // avatar={(
                    //     <Avatar
                    //         alt={`Listingslab's Open Source Raspberry Pi Node Server`}
                    //         className={classes.avatar}>
                    //         <Icon icon={'airquality'} />
                    //     </Avatar>
                    // )}
                    // action={null}
                />
                <CardContent>
                    <Typography variant={`h3`} className={cn(classes.centered)}>
                        {cloud}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneCloud))
);
