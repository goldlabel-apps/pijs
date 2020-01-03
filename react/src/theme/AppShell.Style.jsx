export const styles = theme => ({
    appShell: {
        border: '1px solid white',
        margin: 'auto',
        width: '99%',
        maxWidth: 1200,
        height: '99vh',
        
    },
    navList: {
        padding: theme.spacing(),
    },
    menuOpenerBtn: {
        position: 'absolute',
        top: theme.spacing(),
        right: theme.spacing(),
    },
    navDrawer: {
        width: 300,
    },
    navDrawerWidth: {
        width: 300,
    },
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    map: {
        height: 183,
        outline: 'none',
    },
    white: {
        color: 'white',
    },
    padIcon: {
        padding: theme.spacing(),
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});
