import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardHeader
} from '@material-ui/core/';
// import {
//     About,
// } from '../';

class Home extends Component {
    render() {
        const {
            classes,
        } = this.props;
        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        title={`PiJS`}
                        subheader={`Welcome to the project`}
                    // avatar={<Icon icon={`docs`} color={`primary`} />}
                    />
                </Card>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(Home)
);


/*
<Grid item xs={12} md={6}>
    <Map mode={`preview`} />
</Grid>

<Grid item xs={12}>
    <Webcam mode={`preview`} />
</Grid>

<Grid item xs={12} md={6}>
    <Weather mode={`preview`} />
</Grid>
*/
