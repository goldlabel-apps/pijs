import React, { Component } from 'react';
import { withRouter } from "react-router";
import {
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
} from './';

class NotFound extends Component {
    render() {
        const {
            classes,
            history,
        } = this.props;
        return (
            <React.Fragment>
                <CardMedia
                    className={classes.media}
                    title={`Not Found`}
                    image={`/png/open-graph.png`}
                />
                <CardContent>
                    <Typography variant={`body1`}>
                        No content at this endpoint
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
                        <span className={classes.btnIconPadRight}>
                            Home</span>
                    </Button>
                </CardActions>
            </React.Fragment>
        );
    }
}

export default (
    withRouter(NotFound)
);
