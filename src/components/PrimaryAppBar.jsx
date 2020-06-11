import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Avatar,
    Toolbar,
    Typography,
    MenuItem,
    Menu
} from '@material-ui/core/';
import {
    Icon,
    // SwitchTheme
} from './'

const useStyles = makeStyles(theme => ({
    appbar: {
        background: 'none',
        boxShadow: 'none',
        border: 'none'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    avatar: {
        background: 'none',
    }
}));

export default function PrimaryAppBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [setMobileMoreAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar
                className={classes.appbar}
                position={`static`}
                color={`secondary`}>
                <Toolbar>
                    <Avatar className={classes.avatar}>
                        <Icon icon={`logo`} color={`inherit`} />
                    </Avatar>
                    <Typography className={classes.title} variant="h6" noWrap>
                        PiJS.app
                    </Typography>
                    <div className={classes.grow} />
                    
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    );
}

/*
<SwitchTheme />
*/