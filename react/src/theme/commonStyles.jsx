
export default theme => ({
    white: {
        color: 'white',
    },
    padIcon: {
        padding: theme.spacing(),
    },
    screenCentered: {
        // height: 'calc(100vh - 70px)',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    },
    grow: {
        flexGrow: 1,
    }
});
