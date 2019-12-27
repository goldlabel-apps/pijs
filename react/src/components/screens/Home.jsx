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
    CardContent,
    Grid,
} from '@material-ui/core/';
import {
    Nav,
} from '../';

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
        return (
            <div className={cn(classes.screenCentered)}>
                <Card className={cn(classes.screenCard)}>

                    <CardContent>
                        <Grid container>

                            <Grid item xs={12}>
                                <Nav isHome={true} />
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        store,
        pijs: store.system.pijs,
        weather: store.weather
    };
};

export default (connect(
    mapStateToProps,
    null
)(withStyles(styles, { withTheme: true })(withRouter(Home))));