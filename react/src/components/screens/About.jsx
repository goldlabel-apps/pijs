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
                        title={`About this project`}
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
                        image={`/svg/icon.svg`}
                    />
                    <CardContent>
                        <Typography
                            variant={`body1`}
                        >
                            The Raspberry Pi is a very low cost, credit-card sized computer. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Python. It can also give more experienced developers a chance to do some mad cool stuff they wouldn’t normally do. We’re going to turn our Pi into a Node server, connected to the interweb through an everyday broadband connection.
                    </Typography>

                    </CardContent>
                    <CardActions>


                        <Button
                            variant={`outlined`}
                            color={`primary`}
                            onClick={() => {
                                window.open(`https://docs.listingslab.com/docs/balance/pi/`, `_blank`);
                            }}
                        >
                            <Icon
                                icon={`docs`}
                                color={`primary`} />
                            <span className={cn(classes.btnIconPadRight)}>
                                Docs</span>
                        </Button>

                        <Button
                            variant={`outlined`}
                            color={`primary`}
                            onClick={(e) => {
                                window.open(`https://github.com/listingslab-hardware/pijs`, `_blank`)
                            }}>
                            <Icon
                                icon={`github`}
                                color={`primary`} />
                            <span className={cn(classes.btnIconPadRight)}>
                                GitHub</span>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default (
    withStyles(styles, { withTheme: true })(withRouter(About))
);
