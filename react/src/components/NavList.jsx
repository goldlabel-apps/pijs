import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Checkbox,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListItemAvatar,
} from '@material-ui/core/';
import {
    Icon,
} from './';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavList() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([1]);

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

    const navJSON = {
        updated: Date.now(),
        data: [
            {
                title: `Home`,
                path: `/`,
                icon: `home`,
                value: `home`,
                checked: false
            },
            // {
            //     title: `Pressure`,
            //     path: `/pressure`,
            //     icon: `pressure`,
            //     value: `pressure`,
            //     checked: false
            // }
        ]
    }

    return (
        <List dense className={classes.root}>
            {navJSON.data.map((item, i) => {
                const labelId = `nav-list-${i}`;
                return (
                    <ListItem
                        button
                        key={labelId}
                        onClick={(e) => { 
                            e.preventDefault();
                        }}>
                        <ListItemAvatar>
                            <Icon icon={item.icon}  />
                        </ListItemAvatar>
                        <ListItemText
                            style={{
                                color: 'white'
                            }}
                            id={labelId}
                            primary={item.title}
                        />
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(item.value)}
                                checked={checked.indexOf(item.value) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}
