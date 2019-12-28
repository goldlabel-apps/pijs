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
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@material-ui/core/';
import {
    Nav,
    ScreenHeader,
    // Listingslab,
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
            

            <React.Fragment>
                <ScreenHeader title={`PiJS.app`} icon={`home`} isHome={true} />
                <CardContent>
                    <Grid container>
                        <Grid item xs={12} md={8}>                                
                            <Typography variant={`body1`} gutterBottom>
                                An Open Source React PWA by Listingslab with Secure SSL Node/Express server running on a Raspberry Pi 4
                            </Typography>
                            <CardMedia
                                className={cn(classes.media)}
                                title={`What is a Raspberry Pi?`}
                                image={`/jpg/envirophat.jpg`}
                            />
                            
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