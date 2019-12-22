import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    pingPi
} from '../../redux/system/actions';
import { withRouter } from "react-router";
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
import moment from 'moment';

class Home extends Component {

    componentDidMount() {
        const { pijs } = this.props;

        if (pijs === null) {
            pingPi();
        }
    }

    render() {
        const {
            classes,
        } = this.props;
        const deviceTime = moment.unix(Date.now() / 1000).format(`dddd, MMMM Do YYYY, h:mm:ss a`);
        const piTime = `...`;
        const region = `...`;
        const state = `...`;
        const country = `...`;
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
                            Time on your device is {deviceTime}
                        </Typography>

                        <Typography gutterBottom>
                            Time in {region}, {state}, {country} is now {piTime}
                        </Typography>

                        {/* <Typography gutterBottom>
                            Current pi evironment: light | dark
                        </Typography> */}

                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store,
        pijs: store.system.pijs
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Home))));