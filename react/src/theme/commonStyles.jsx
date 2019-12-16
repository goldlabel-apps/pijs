
export default theme => ({
    white: {
        color: 'white',
    },
    screenCentered: {
        height: 'calc(100vh - 70px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    primary: {
        color: theme.palette.primary.main
    },
    secondary: {
        color: theme.palette.secondary.main
    }
});
