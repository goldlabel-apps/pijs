import React, { Component } from 'react';
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardHeader,
    CardContent,
    Typography
} from '@material-ui/core/';
import {
    Icon,
} from '../';

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
                        avatar={<Icon icon={`pi`} color={`primary`} />}
                        subheader={`Welcome to Scarborough, QLD`}
                    />
                    <CardContent>
                        <Typography gutterBottom>
                            Current pi time is:
                        </Typography>

                        <Typography gutterBottom>
                            Current pi evironment: light | dark
                        </Typography>

                        <Typography gutterBottom>
                            Your system time is:
                        </Typography>

                    </CardContent>
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
