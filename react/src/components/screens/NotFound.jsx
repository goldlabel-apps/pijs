import React, { Component } from 'react';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
    ScreenHeader,
} from '../';

class NotFound extends Component {
    render() {
        const {
            classes,
            history,
        } = this.props;
        return (
            <React.Fragment>
                <ScreenHeader title={`PiJS 404`} icon={`pi`} />
                <CardMedia
                    className={cn(classes.media)}
                    title={`Not Found`}
                    image={`/png/open-graph.png`}
                />
                <CardContent>
                    <Typography variant={`body1`}>
                        No content at that endpoint
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant={`contained`}
                        color={`primary`}
                        onClick={() => {
                            history.push(`/`);
                        }}>
                        <Icon icon={`home`} color={`secondary`} />
                        <span className={cn(classes.btnIconPadRight)}>
                            Home</span>
                    </Button>
                </CardActions>
            </React.Fragment>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(NotFound))
);
