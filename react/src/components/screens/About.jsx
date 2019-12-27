import React, { Component } from 'react';
import { withRouter } from "react-router";
import cn from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../../theme/AppShell.Style';
import {
    Card,
    CardContent,
    CardMedia,
    CardHeader,
    Grid,
    IconButton,
    Typography,
} from '@material-ui/core/';
import { Icon, OpenSource } from '../';

class About extends Component {
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
                        title={`About PiJS`}
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

                    <CardContent>
                        <Grid container>
                            <Grid item xs={12}>
                                <CardMedia
                                    className={cn(classes.media)}
                                    title={`What is a Raspberry Pi?`}
                                    image={`/jpg/pi4.jpg`}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>



                                <Typography variant={`body1`} gutterBottom >
                                    The Raspberry Pi is a very low cost, credit-card sized computer. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Python.
                                </Typography>

                                <Typography variant={`body1`} gutterBottom >
                                    It can also give more experienced developers a chance to do some mad cool stuff they wouldn’t normally do. We’re going to turn our Pi into a Node server, connected to the interweb through an everyday broadband connection.
                                </Typography>

                            </Grid>

                            <Grid item xs={12} md={6}>
                                <OpenSource />
                            </Grid>

                        </Grid>

                    </CardContent>

                </Card>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(About))
);
