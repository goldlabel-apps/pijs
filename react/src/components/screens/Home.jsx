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
        const { data, fetching } = this.props.pijs;
        if (data === null && !fetching) {
            pingPi();
        }
    }

    render() {
        const {
            classes,
        } = this.props;
        let time = 0;
        let region = `...`;
        let state = `...`;
        let country = `...`;
        if (this.props.pijs !== null) {
            const { pijs } = this.props;
            if (this.props.pijs.data !== null) {
                const { location } = pijs.data.pijs
                time = moment.unix(location.time / 1000).format(`dddd, MMMM Do YYYY, h: mm: ss a`);;
                region = location.region;
                state = location.state;
                country = location.country;
            }
        }

        const deviceTime = moment.unix(Date.now() / 1000).format(`dddd, MMMM Do YYYY, h: mm: ss a`);

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
                            The time on your device is
                        </Typography>

                        <Typography gutterBottom variant={`h4`}>
                            {deviceTime}
                        </Typography>

                        <Typography gutterBottom>
                            Time in {region}, {state}, {country} is now
                        </Typography>

                        <Typography gutterBottom variant={`h4`}>
                            {time}
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