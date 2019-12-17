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
    Typography,
} from '@material-ui/core/';

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
                        title={`Not Found`}
                        subheader={`Lorem ipsum dolor sit amet,`}
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
                            Vestibulum vitae mauris neque. In accumsan, lorem vel sagittis bibendum, nunc mauris egestas enim, ut sodales odio metus sed felis. Aliquam vestibulum tellus lectus, a pharetra turpis gravida nec. Nunc ut odio non erat egestas fringilla. Proin sem velit, sagittis non nisl sed, tempor tempor ipsum. In quis eros at tellus rutrum iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur vestibulum elementum ligula at fringilla. Suspendisse at purus posuere nisl rhoncus semper a sit amet purus. Nulla sit amet odio ut eros rhoncus fermentum sed vel sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur eleifend nibh in velit viverra tempor.
                    </Typography>
                    </CardContent>
                    <CardActions>
                        <div className={cn(classes.grow)} />
                        <Button
                            variant={`contained`}
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
