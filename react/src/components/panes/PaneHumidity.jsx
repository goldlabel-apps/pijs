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
} from '@material-ui/core/';
import Icon from '../Icon';

class PaneHumidity extends Component {

    render() {
        const {
            classes,
        } = this.props;
        const humidity = `${78} %`;
        return (
            <Card className={cn(classes.cardMinHeight)}>
                <CardHeader
                    title={`Humidity`}
                    subheader={`Very sticky`}
                    avatar={(
                        <Avatar
                            alt={`Listingslab's Open Source Raspberry Pi Node Server`}
                            className={classes.avatar}>
                            <Icon icon={'humidity'} />
                        </Avatar>
                    )}
                    action={null}
                />
                <CardContent>
                    <Typography variant={`h3`} className={cn(classes.centered)}>
                        {humidity}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneHumidity))
);
