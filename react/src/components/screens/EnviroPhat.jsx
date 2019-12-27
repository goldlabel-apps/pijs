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

class EnviroPhat extends Component {
    render() {
        const {
            classes,
            history,
        } = this.props;
        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>
                    <CardHeader
                        className={cn(classes.screenHeader)}
                        title={`Enviro pHAT`}
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
                        title={`What is a Raspberry Pi?`}
                        image={`/jpg/envirophat.jpg`}
                    />
                    <CardContent>
                        <Typography variant={`body1`} gutterBottom>
                            Enviro pHAT is an environmental sensing board that lets you measure temperature, pressure, light, colour, motion and analog sensors. It's the perfect board for building a tiny monitoring station with Pi Zero that you can stick on a shelf and keep track of conditions in the room.
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button
                            variant={`contained`}
                            color={`primary`}
                            onClick={() => {
                                window.open(`https://learn.pimoroni.com/tutorial/sandyj/getting-started-with-enviro-phat`, `_blank`);
                            }}
                        >
                            <Icon icon={'link'} color={`secondary`} />
                            <span className={cn(classes.btnIconPadRight)}>
                                pimoroni.com
                            </span>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(EnviroPhat))
);



/*

<Typography variant={`h3`} gutterBottom>
    Installing the software
</Typography>

<Typography variant={`body1`} gutterBottom>
    Pimoroni always recommend using the most up-to-date version of Raspbian, as this is what we test our boards and software against, and it often helps to start with a completely fresh install of Raspbian, although this isn't necessary.

    As with most of Pimoroni's boards, we've created a really quick and easy one-line-installer to get your Enviro pHAT set up. We'd suggest that you use this method to install the Enviro pHAT software.

    Open a new terminal, and type the following, making sure to type 'y' or 'n' when prompted:
</Typography>

*/