
export default theme => ({
    white: {
        color: 'white',
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
    media: {
        height: 0,
        paddingTop: '25%', // 16:9
    },
    grow: {
        flexGrow: 1,
    }
});
