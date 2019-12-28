import React, { Component } from 'react';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Button,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@material-ui/core/';
import {
    Icon,
    Nav,
    ScreenHeader,
} from '../';

class EnviroPhat extends Component {
    render() {
        const {
            classes,
            // history,
        } = this.props;
        return (
            <React.Fragment>
                <ScreenHeader title={`Enviro pHAT`} icon={`enviro`} />
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <CardMedia
                                className={cn(classes.media)}
                                title={`What is a Raspberry Pi?`}
                                image={`/jpg/envirophat.jpg`}
                            />
                            <Typography variant={`body1`} gutterBottom>
                                Enviro pHAT is an environmental sensing board that lets you measure temperature, pressure, light, colour, motion and analog sensors. It's the perfect board for building a tiny monitoring station with Pi Zero that you can stick on a shelf and keep track of conditions in the room.
                            </Typography>
                            <Button
                                variant={`contained`}
                                color={`primary`}
                                onClick={() => {
                                    window.open(`https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-enviro-phat`, `_blank`);
                                }}>
                                <Icon icon={'link'} color={`secondary`} />
                                <span className={cn(classes.btnIconPadRight)}>
                                    pimoroni.com</span>
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Nav isHome={true} />
                        </Grid>
                    </Grid>
                </CardContent>
            </React.Fragment>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(EnviroPhat))
);

