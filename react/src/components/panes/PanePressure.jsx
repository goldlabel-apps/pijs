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

class PanePressure extends Component {

    render() {
        const {
            classes,
        } = this.props;
        const pressure = `${1084} mBar`;
        return (
            <Card className={cn(classes.cardMinHeight)}>
                <CardHeader
                    title={`Pressure`}
                    subheader={`Sunny with sudden storms`}
                    avatar={(
                        <Avatar
                            alt={`Listingslab's Open Source Raspberry Pi Node Server`}
                            className={classes.avatar}>
                            <Icon icon={'pressure'} />
                        </Avatar>
                    )}
                    action={null}
                />
                <CardContent>
                    <Typography variant={`h4`} className={cn(classes.centered)}>
                        {pressure}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PanePressure))
);
