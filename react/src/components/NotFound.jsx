import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../theme/App.Style';
import {
    Avatar,
    Card,
    CardMedia,
    CardHeader,
} from '@material-ui/core/';
// import ViewActions from '../ViewActions';
// import Icon from '../Icon';

class NotFound extends Component {
    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={classes.view}>
                <div className={cn(classes.pad)}>
                    <Card className={classes.card}>

                        <CardHeader
                            title={`Not Found`}
                            subheader={`No content, innit.`}
                            avatar={<Avatar src={`/logo192.png`} />}
                        // action={
                        //     <ViewActions />
                        // }
                        />
                        <CardMedia
                            className={classes.media}
                            image={`/png/graphics/404.png`}
                            title={`Not Found`}
                        />

                    </Card>
                </div>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(NotFound)
);
