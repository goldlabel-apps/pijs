
export default theme => ({
    btnIconPadRight: {
        marginLeft: theme.spacing(),
        paddingRight: theme.spacing(),
    },
    inPageBtn: {
        paddingRight: theme.spacing(),
        marginRight: theme.spacing(),
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        marginBottom: theme.spacing(),
    },
    mediaSq: {
        height: 0,
        paddingTop: '100%', // 16:9
        marginBottom: theme.spacing(),
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
    grow: {
        flexGrow: 1,
    }
});
