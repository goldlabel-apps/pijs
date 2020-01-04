import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    ListSubheader,
    Switch,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    settings: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Settings() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List
            className={classes.settings}
            subheader={
                <ListSubheader>
                    Settings
                </ListSubheader>
            }>
            <ListItem>
                <ListItemIcon>
                    <Icon icon={`home`} />
                </ListItemIcon>
                <ListItemText
                    style={{
                        color: 'white'
                    }}
                    id={`switch-dark-mode`}
                    primary={`Dark Mode`} />
                
                <ListItemSecondaryAction>
                    <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={checked.indexOf('wifi') !== -1}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}
