import React, { Component } from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    // Avatar,
    Card,
    CardHeader,
    // IconButton,
    // Tooltip,
} from '@material-ui/core/';
// import Icon from '../Icon';

class PaneMap extends Component {

    render() {
        const {
            classes,
        } = this.props;

        return (
            <Card className={cn(classes.location)}>
                <CardHeader
                    title={`Map`}
                    // subheader={`Lat -27.19 Lng 153.11`}
                    // avatar={(
                    //     <Avatar
                    //         alt={`Webcam`}
                    //         className={classes.avatar}>
                    //         <Icon icon={'location'} />
                    //     </Avatar>
                    // )}
                    // action={
                    //     <Tooltip title={`More about Geo location`}>
                    //         <IconButton>
                    //             <Icon icon={`menu`} />
                    //         </IconButton>
                    //     </Tooltip>
                    // }
                />
                mapbox
            </Card>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(PaneMap))
);
