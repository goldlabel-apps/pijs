import React, { Component } from 'react';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CardHeader,
    IconButton,
    Typography,
} from '@material-ui/core/';
import { Icon } from '../';

class NotFound extends Component {
    render() {
        const {
            classes,
            history,
        } = this.props;
        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        title={`404. Not Found`}
                        avatar={
                            <IconButton
                                onClick={(e) => {
                                    e.preventDefault();
                                    history.push(`/`);
                                }}>
                                <Icon icon={`pi`} color={`primary`} />
                            </IconButton>
                        }
                    />
                    <CardMedia
                        className={cn(classes.media)}
                        title={`Not Found`}
                        image={`/png/open-graph.png`}
                    />
                    <CardContent>
                        <Typography
                            variant={`body1`}
                        >

                        </Typography>
                    </CardContent>
                    <CardActions>

                        <Button
                            fullWidth
                            variant={`outlined`}
                            color={`primary`}
                            onClick={() => {
                                history.push(`/`);
                            }}
                        >
                            Home
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(NotFound))
);
