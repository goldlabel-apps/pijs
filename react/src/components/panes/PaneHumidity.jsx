import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core/';
import { Icon } from '../';
class PaneHumidity extends Component {

    render() {
        const {
            classes,
        } = this.props;
        const humidity = `...`;
        return (
            <Card className={cn(classes.cardMinHeight)}>
                <CardHeader
                    title={`Humidity`}
                    action={
                        <Tooltip title={`Full screen`}>
                            <IconButton
                                size={`small`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log ('redux action -> PaneHumidity/fullscreen')
                                }}
                            >
                                <Icon icon={`fullscreen`} />
                            </IconButton>
                        </Tooltip>
                    }
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
