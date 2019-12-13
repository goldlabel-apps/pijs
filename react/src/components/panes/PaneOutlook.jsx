import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import cn from 'classnames';
import { styles } from '../../theme/App.Style';
import {
    Card,
    CardHeader,
    CardContent,
    IconButton,
    Tooltip,
    Typography,
} from '@material-ui/core/';
import { Icon } from '../';

class PaneCloud extends Component {

    render() {
        const {
            classes,
            weather,
        } = this.props;
        if (!weather.data) {
            return null;
        }
        const { description, icon } = weather.data.weather[0];
        const outlookDisplay = `${description}`;
        const iconurl = `http://openweathermap.org/img/w/${icon}.png`;
        
        return (
            <Card className={cn(classes.cardMinHeight)}>
                <CardHeader
                    title={`Outlook`}
                    action={
                        <Tooltip title={`Full screen`}>
                            <IconButton
                                size={`small`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    console.log ('redux action -> PaneCloud/fullscreen')
                                }}
                            >
                                <Icon icon={`fullscreen`} />
                            </IconButton>
                        </Tooltip>
                    }
                />
                <CardContent>
                    <img align={`left`} valign={'middle'} src={iconurl} alt={`weather icon`} />    
                    <Typography variant={`body1`} className={cn(classes.centered)}>
                        {outlookDisplay}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        weather: store.weather,
    };
  };
  
  export default (connect(
      mapStateToProps,
      null
)(withStyles(styles, { withTheme: true })(withRouter(PaneCloud))));