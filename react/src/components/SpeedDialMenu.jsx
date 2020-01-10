import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { Icon } from './';

const useStyles = makeStyles(theme => ({
}));

const actions = [
    { icon: <Icon icon={`userentity`} color={`primary`} />, name: 'User Entity' },
];

export default function SpeedDialMenu() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <SpeedDial
            open={open}
            direction={`up`}
            ariaLabel="SpeedDial Menu"
            className={classes.speedDial}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
        >
            {actions.map(action => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                    onClick={handleClose}
                />
            ))}
        </SpeedDial>
    );
}
