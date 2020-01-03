import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles /*, useTheme*/ } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import muiTheme from './theme/mui';
import {
    AppBar,
    CssBaseline,
    Drawer,
    Hidden,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core/';

import { ClockWork, Home, Icon, Sidebar, NotFound} from "./components/";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('lg')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function AppShell(props) {
    const { container } = props;
    const classes = useStyles();
    // const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        
    <MuiThemeProvider theme={createMuiTheme(muiTheme)}>
        <ClockWork />
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Sidebar"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                            <Icon icon={`pi`} />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        PiJS.app
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden lgUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >
                            <Sidebar />
                    </Drawer>
                </Hidden>
                <Hidden mdDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                            variant={`permanent`}
                        open>
                            <Sidebar />
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                
                    
                    <Router>
                        <Switch>
                            <Route exact path="/" render={props => {
                                return (<Home />);
                            }} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>

                
            </main>
            </div>
        </MuiThemeProvider>
    );
}

export default AppShell;
